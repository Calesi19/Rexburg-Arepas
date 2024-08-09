namespace Arepas.Data.Models;

public class OrderModel
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int ArepasChicken { get; set; } = 0;
    public int ArepasPlain { get; set; } = 0;
    public int ArepasSauce { get; set; } = 0;
    public int ArepasChickenSauce { get; set; } = 0;
    public string CustomerName { get; set; } = string.Empty;
    public string CustomerPhone { get; set; } = string.Empty;
    public string OrderStatus { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
