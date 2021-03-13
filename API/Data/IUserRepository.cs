using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public interface IUserRepository
    {
         void Update(User user);
         Task<bool> SaveAllAsync();
         Task<IEnumerable<User>> GetUsersAsync();
         Task<User> GetUserByIdAsync(int id);
         Task<User> GetUserByUsernameAsync(string username);
    }
}