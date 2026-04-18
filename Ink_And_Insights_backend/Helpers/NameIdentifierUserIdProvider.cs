using System.Security.Claims;
using Microsoft.AspNetCore.SignalR;

namespace Ink_And_Insights_backend.Helpers
{
    public class NameIdentifierUserIdProvider : IUserIdProvider
    {
        public string? GetUserId(HubConnectionContext connection)
        {
            return connection.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}
