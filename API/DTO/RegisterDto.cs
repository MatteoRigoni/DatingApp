using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTO
{
    public class RegisterDto
    {
        [Required]
        [StringLength(20, MinimumLength=1)]
        public string Username { get; set; }
        [Required]
        [StringLength(6, MinimumLength=1)]
        public string Password { get; set; }

        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
    }
}