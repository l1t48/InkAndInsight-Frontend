using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace MyBackend.Hubs
{
    [Authorize] // require authenticated connections
    public class NotificationsHub : Hub
    {
        public Task<string?> GetMyUserId()
        {
            return Task.FromResult(Context.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }
    }
}
