namespace DataAccess;

// Data Access

public class DataAccess
{
    public static string ConnectionString { get; set; }

    public static SqlConnection GetConnection()
    {
        return new SqlConnection(ConnectionString);
    }

    public static DataTable GetDataTable(string query)
    {
        using (var connection = GetConnection())
        {
            connection.Open();
            using (var command = new SqlCommand(query, connection))
            {
                using (var reader = command.ExecuteReader())
                {
                    var table = new DataTable();
                    table.Load(reader);
                    return table;
                }
            }
        }
    }

    public static void ExecuteNonQuery(string query)
    {
        using (var connection = GetConnection())
        {
            connection.Open();
            using (var command = new SqlCommand(query, connection))
            {
                command.ExecuteNonQuery();
            }
        }
    }
}
