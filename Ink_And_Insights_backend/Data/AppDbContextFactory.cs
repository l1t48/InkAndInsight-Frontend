using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Ink_And_Insights_backend.Data
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            DotNetEnv.Env.Load();

            // Default to "Development" if the variable isn't set
            var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development";
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

            if (env == "Development")
            {
                var conn = Environment.GetEnvironmentVariable("DEV_CONNECTION");
                optionsBuilder.UseSqlite(conn);
            }
            else
            {
                var conn = Environment.GetEnvironmentVariable("PROD_CONNECTION");
                optionsBuilder.UseNpgsql(conn);
            }

            return new AppDbContext(optionsBuilder.Options);
        }
    }
}