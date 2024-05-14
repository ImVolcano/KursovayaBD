class DataConverter
{
    // Метод для преобразования строки в тип BankClient
    public static BankClient makeClient(string data)
    {
        BankClient client;

        string[] parts = data.Split(" ");

        client = new BankClient(Convert.ToInt32(parts[0]), parts[1], parts[2], (parts[3].Equals("null") ? null : parts[3]), Convert.ToInt32(parts[4]), Convert.ToInt32(parts[5]), Convert.ToInt32(parts[6]));

        return client;
    }

    // Метод для преобразования строки в тип Account
    public static Account makeAccount(string data)
    {
        Account account;

        string[] parts = data.Split(" ");

        int? cardId = parts[4].Equals("null") ? null : Convert.ToInt32(parts[4]);

        account = new Account(Convert.ToInt32(parts[0]), Convert.ToInt32(parts[1]), parts[2], Convert.ToInt32(parts[3]), cardId);

        return account;
    }

    // Метод для преобразования строки в тип BankCard
    public static BankCard makeCard(string data)
    {
        BankCard card;

        string[] parts = data.Split(" ");

        card = new BankCard(Convert.ToInt32(parts[0]), Convert.ToInt32(parts[1]), parts[2], parts[3], parts[4], parts[5], parts[6], parts[7]);

        return card;
    }

    // Метод для преобразования строки в тип Deposit
    public static Deposit makeDeposit(string data)
    {
        Deposit dep;

        string[] parts = data.Split(" ");

        dep = new Deposit(Convert.ToInt32(parts[0]), Convert.ToInt32(parts[1]), parts[2], Convert.ToInt32(parts[3]), Convert.ToInt32(parts[4]));

        return dep;
    }

    // Метод для преобразования строки в тип Credit
    public static Credit makeCredit(string data)
    {
        Credit cred;

        string[] parts = data.Split(" ");

        cred = new Credit(Convert.ToInt32(parts[0]), Convert.ToInt32(parts[1]), parts[2], Convert.ToInt32(parts[3]), Convert.ToInt32(parts[4]));

        return cred;
    }
}