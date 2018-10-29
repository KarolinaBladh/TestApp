using Microsoft.EntityFrameworkCore;

namespace TestAngularApp.Models
{
    public class PhoneOwnersContext : DbContext
    {
        public PhoneOwnersContext(DbContextOptions<PhoneOwnersContext> options)
            : base(options)
        {

        }

        public DbSet<PhoneOwner> PhoneOwner { get; set; }

    }
}
