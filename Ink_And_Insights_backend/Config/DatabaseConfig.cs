using Microsoft.EntityFrameworkCore;
using Ink_And_Insights_backend.Data;

namespace Ink_And_Insights_backend.Config
{
    public static class DatabaseConfig
    {
        public static void AddDatabase(this IServiceCollection services, IConfiguration configuration, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                var devConn = Environment.GetEnvironmentVariable("DEV_CONNECTION");
                services.AddDbContext<AppDbContext>(opt =>
                    opt.UseSqlite(devConn));
            }
            else
            {
                var prodConn = Environment.GetEnvironmentVariable("PROD_CONNECTION");
                services.AddDbContext<AppDbContext>(opt =>
                    opt.UseNpgsql(prodConn));
            }
        }
    }
}