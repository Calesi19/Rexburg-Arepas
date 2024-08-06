using Arepas.Data.Models;

public interface IOrderRepository
{
    Task<OrderModel> GetOrderAsync(string id);
    Task<IEnumerable<OrderModel>> GetOrdersAsync();
    Task<OrderModel> CreateOrderAsync(OrderModel order);
    Task<OrderModel> UpdateOrderAsync(OrderModel order);
    Task DeleteOrderAsync(string id);
}
