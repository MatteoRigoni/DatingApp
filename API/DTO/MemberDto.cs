using System;
using System.Collections.Generic;

namespace API.DTO
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime DateBirth { get; set; }
        public string Alias { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public List<PhotoDto> Photos { get; set; }
        public DateTime CreatedDate { get; set; } 
        public DateTime LastActive { get; set; } 
    }
}