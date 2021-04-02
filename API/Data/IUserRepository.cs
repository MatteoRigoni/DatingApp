using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Helpers;

namespace API.Data
{
    public interface IUserRepository
    {
         void Update(User user);
         Task<PagedList<User>> GetUsersAsync(UserParams userParams);
         Task<User> GetUserByIdAsync(int id);
         Task<User> GetUserByUsernameAsync(string username);
    }
}