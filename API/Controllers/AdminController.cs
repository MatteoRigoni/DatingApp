using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AdminController : BaseApiController
    {
        public UserManager<User> UserManager { get; set; }
        public AdminController(UserManager<User> userManager)
        {
            UserManager = userManager;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("users-with-role")]
        public ActionResult GetUsersWithRoles()
        {
            var users = UserManager.Users
                        .Include(r => r.UserRoles)
                        .ThenInclude(r => r.Role)
                        .OrderByDescending(r => r.UserName)
                        .Select(u => new {
                            u.Id,
                            Username = u.UserName,
                            Roles = u.UserRoles.Select(r => r.Role.Name).ToList()
                        })
                        .ToList();

            return Ok(users);
        }

        [HttpPost("edit-roles/{username}")]
        public async Task<ActionResult> EditRoles(string username, [FromQuery] string roles)
        {
            var selectedRoles = roles.Split(',');
            var user = await UserManager.FindByNameAsync(username);
            var userRoles = await UserManager.GetRolesAsync(user);
            var result = await UserManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));
            if (!result.Succeeded) return BadRequest("Failed upadte of roles");
            result = await UserManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));
            return Ok(await UserManager.GetRolesAsync(user));
        }

        [Authorize(Policy = "ModeratePhotoRole")]
        [HttpGet("photos-to-moderate")]
        public ActionResult GetPhotosForModerator()
        {
            return Ok("Only admin can see this");
        }
    }
}