namespace Ink_And_Insights_backend.Models
{
  public class Quote {
    public int Id { get; set; }
    public string Text { get; set; } = null!;
    public string? Author { get; set; }
    public int OwnerId { get; set; }    // link to User.Id
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  }
}
