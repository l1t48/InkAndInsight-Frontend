using Microsoft.EntityFrameworkCore;
using Ink_And_Insights_backend.Config;
using Ink_And_Insights_backend.Services;
using Ink_And_Insights_backend.Hubs;
using Ink_And_Insights_backend.Data;
using Ink_And_Insights_backend.Helpers;
using Microsoft.AspNetCore.SignalR;

DotNetEnv.Env.Load(); 
var builder = WebApplication.CreateBuilder(args);

// ----------------------------
// DATABASE
// ----------------------------
// Pass the configuration and environment to the extension method
builder.Services.AddDatabase(builder.Configuration, builder.Environment);

// ----------------------------
// CORS
// ----------------------------
var allowedOriginsEnv = Environment.GetEnvironmentVariable("Cors__AllowedOrigins") ?? "";
var allowedOrigins = allowedOriginsEnv.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
builder.Services.AddCorsPolicy(allowedOrigins);

// ----------------------------
// JWT Authentication
// ----------------------------
var jwtKey = Environment.GetEnvironmentVariable("Jwt__Key") ?? throw new Exception("JWT key not set in environment");
var jwtIssuer = Environment.GetEnvironmentVariable("Jwt__Issuer") ?? "myapp-dev";
builder.Services.AddJwtAuthentication(jwtKey, jwtIssuer);


// ----------------------------
// SignalR
// ----------------------------
builder.Services.AddSignalR();
builder.Services.AddSingleton<IUserIdProvider, NameIdentifierUserIdProvider>();

// ----------------------------
// Controllers & Swagger
// ----------------------------
builder.Services.AddControllers();
builder.Services.AddSwaggerSetup();

// ----------------------------
// User Service
// ----------------------------
// Registers UserService as a scoped dependency, 
// so it can be injected into controllers via constructor injection.
// Passes AppDbContext, JWT key, and issuer to the service.
builder.Services.AddScoped<UserService>(sp => 
{
    var context = sp.GetRequiredService<AppDbContext>();
    return new UserService(context, jwtKey, jwtIssuer);
});

// ----------------------------
// Build & configure middleware
// ----------------------------
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Testing the backend");
    });
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapHub<NotificationsHub>("/hubs/notifications");
app.MapControllers();
app.Run();
