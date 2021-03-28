using System;
using System.Collections.Generic;
using API.Extentions;

namespace API.Entities
{
    public class User
    {
        public User()
        {
        }
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateBirth { get; set; }
        public string Alias { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public List<Photo> Photos { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;

        public ICollection<UserLike> LikedByUsers { get; set; }
        public ICollection<UserLike> LikedUsers { get; set; }

        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesReceived { get; set; }

        public int GetAge()
        {
            return this.DateBirth.CalculateAge();
        }
    }
}