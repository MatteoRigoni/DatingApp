using System.ComponentModel.DataAnnotations;

namespace API.DTO
{
    public class LoginDto
    {
        [Required]
        [StringLength(20, MinimumLength=1)]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength=1)]
        public string Password { get; set; }
    }
}