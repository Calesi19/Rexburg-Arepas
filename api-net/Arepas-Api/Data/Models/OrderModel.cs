namespace Arepas.Data.Models;

public class OrderModel
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Product { get; set; } = string.Empty;
    public int Quantity { get; set; } = 0;
    public string Customer { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
