public class Params
{
    public string Data {  get; set; }
    public string TableName { get; set; }

    public Params(string data, string tableName)
    {
        Data = data;
        TableName = tableName;
    }
}