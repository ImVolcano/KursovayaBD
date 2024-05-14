using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private const string connectionString = "Server=(localdb)\\mssqllocaldb;Database=bank;Trusted_Connection=True;";

        // Метод для получения всех записей из любой таблицы по её названию
        [HttpGet]
        public List<object> SelectAll(string tableName)
        {
            List<object> list = new List<object>();

            string expression = "SELECT * FROM " + tableName;

            SqlConnection sqlConnection = new SqlConnection(connectionString);

            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand(expression, sqlConnection);

            SqlDataReader reader = cmd.ExecuteReader();

            switch (tableName)
            {
                case "Clients":
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            object id = reader.GetValue(0);
                            object name = reader.GetValue(1);
                            object surname = reader.GetValue(2);
                            object patronymic = (reader.GetValue(3) is DBNull ? null : reader.GetValue(3));
                            object age = reader.GetValue(4);
                            object passportSerial = reader.GetValue(5);
                            object passportNumber = reader.GetValue(6);

                            BankClient client = new BankClient((int)id, (string)name, (string)surname, (string)patronymic, (int)age, (int)passportSerial, (int)passportNumber);
                            list.Add(client);
                        }
                    }
                    break;

                case "Accounts":
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            object id = reader.GetValue(0);
                            object clId = reader.GetValue(1);
                            object curr = reader.GetValue(2);
                            object sum = reader.GetValue(3);
                            object cardId = reader.GetValue(4);

                            Account acc = new Account((int)id, (int)clId, (string)curr, (int)sum, (int)cardId);
                            list.Add(acc);
                        }
                    }
                    break;

                case "Cards":
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            object id = reader.GetValue(0);
                            object accId = reader.GetValue(1);
                            object number = reader.GetValue(2);
                            object name = reader.GetValue(3);
                            object surname = reader.GetValue(4);
                            object expDate = reader.GetValue(5);
                            object CVV = reader.GetValue(6);
                            object PIN = reader.GetValue(7);

                            BankCard card = new BankCard((int)id, (int)accId, (string)number, (string)name, (string)surname, (string)expDate, (string)CVV, (string)PIN);
                            list.Add(card);
                        }
                    }
                    break;

                case "Credits":
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            object id = reader.GetValue(0);
                            object clId = reader.GetValue(1);
                            object sum = reader.GetValue(2);
                            object psum = reader.GetValue(3);
                            object perc = reader.GetValue(4);

                            Credit cred = new Credit((int)id, (int)clId, "Ruble", (int)sum, (int)perc);
                            list.Add(cred);
                        }
                    }
                    break;

                case "Deposits":
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            object id = reader.GetValue(0);
                            object clId = reader.GetValue(1);
                            object curr = reader.GetValue(2);
                            object sum = reader.GetValue(3);
                            object perc = reader.GetValue(4);

                            Deposit dep = new Deposit((int)id, (int)clId, (string)curr, (int)sum, (int)perc);
                            list.Add(dep);
                        }
                    }
                    break;
            }

            sqlConnection.Close();

            return list;
        }

        // Метод для добавление новой записи в таблицу по названию
        [HttpPost]
        public IActionResult AddData(string data, string tableName)
        {
            string expression = "";

            switch (tableName)
            {
                case "Clients":
                    BankClient client = DataConverter.makeClient(data);

                    string values = "";

                    if (client.patronymic == null || client.patronymic == "null") values = $"('{client.name}', '{client.surname}', null, '{client.age}', '{client.passportSerial}', '{client.passportNumber}')";
                    else values = $"('{client.name}', '{client.surname}', '{client.patronymic}', '{client.age}', '{client.passportSerial}', '{client.passportNumber}')";

                    expression = $"INSERT INTO Clients (Name, Surname, Patronymic, Age, PassportSerial, PassportNumber) VALUES " + values;

                    break;

                case "Accounts":
                    Account acc = DataConverter.makeAccount(data);

                    expression = $"INSERT INTO Accounts (ClientID, Currency, Sum, CardID) VALUES ('{acc.clientID}', '{acc.currency}', '{acc.sum}', '{acc.cardID}')";

                    break;

                case "Cards":
                    BankCard card = DataConverter.makeCard(data);

                    expression = $"INSERT INTO Cards (AccountID, Number, Name, Surname, ExpiryDate, CVV, PIN) VALUES ('{card.accountID}', '{card.cardNumber}', '{card.name}', '{card.surname}', '{card.expiryDate}', '{card.codeCVV}', '{card.codePIN}')";

                    break;

                case "Credits":
                    Credit credit = DataConverter.makeCredit(data);

                    expression = $"INSERT INTO Credits (ClientID, Sum, PayedSum, Percentage) VALUES ('{credit.clientID}', '{credit.sum}', '{credit.payedSum}', '{credit.percentage}')";

                    break;

                case "Deposits":
                    Deposit deposit = DataConverter.makeDeposit(data);

                    expression = $"INSERT INTO Deposits (ClientID, Currency, Sum, Percentage) VALUES ('{deposit.clientID}', '{deposit.currency}', '{deposit.sum}', '{deposit.percentage}')";

                    break;
            }

            SqlConnection sqlConnection = new SqlConnection(connectionString);

            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand(expression, sqlConnection);

            if (cmd.ExecuteNonQuery() > 0)
            {
                sqlConnection.Close();

                return Ok();
            }

            sqlConnection.Close();

            return BadRequest();
        }

        // Метод для удаления записи по ID в таблице по названию
        [HttpDelete]
        public IActionResult Delete(int id, string tableName)
        {
            string expression = "";

            switch (tableName)
            {
                case "Clients":
                    expression = "DELETE FROM Clients WHERE ID=" + id.ToString();

                    break;

                case "Accounts":
                    expression = "DELETE FROM Accounts WHERE ID=" + id.ToString();

                    break;

                case "Cards":
                    expression = "DELETE FROM Cards WHERE ID=" + id.ToString();

                    break;

                case "Credits":
                    expression = "DELETE FROM Credits WHERE ID=" + id.ToString();

                    break;

                case "Deposits":
                    expression = "DELETE FROM Deposits WHERE ID=" + id.ToString();

                    break;
            }

            SqlConnection sqlConnection = new SqlConnection(connectionString);

            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand(expression, sqlConnection);

            if (cmd.ExecuteNonQuery() > 0)
            {
                sqlConnection.Close();

                return Ok();
            }

            sqlConnection.Close();

            return BadRequest();
        }

        // Метод для изменения данных в записи в таблице по названию
        [HttpPut]
        public IActionResult Update(int id, string data, string tableName)
        {
            string expression = "";
            string values = "";

            switch (tableName)
            {
                case "Clients":
                    BankClient client = DataConverter.makeClient(data);

                    if (client.patronymic == null) values = $"Name='{client.name}', Surname='{client.surname}', Patronymic=null, Age={client.age}, PassportSerial='{client.passportSerial}', PassportNumber='{client.passportNumber}'";
                    else values = $"Name='{client.name}', Surname='{client.surname}', Patronymic='{client.patronymic}', Age={client.age}, PassportSerial='{client.passportSerial}', PassportNumber='{client.passportNumber}'";

                    expression = "UPDATE Clients SET " + values + " WHERE ID=" + id.ToString();

                    break;

                case "Accounts":
                    Account acc = DataConverter.makeAccount(data);

                    values = $"ClientID='{acc.clientID}', Currency='{acc.currency}', Sum='{acc.sum}', CardID='{acc.cardID}'";
                    expression = "UPDATE Accounts SET " + values + " WHERE ID=" + id.ToString();

                    break;

                case "Cards":
                    BankCard card = DataConverter.makeCard(data);

                    values = $"AccountID='{card.accountID}', Number='{card.cardNumber}', Name='{card.name}', Surname='{card.surname}', ExpiryDate='{card.expiryDate}', CVV='{card.codeCVV}', PIN='{card.codePIN}'";
                    expression = "UPDATE Cards SET " + values + " WHERE ID=" + id.ToString();

                    break;

                case "Credits":
                    Credit credit = DataConverter.makeCredit(data);

                    values = $"ClientID='{credit.clientID}', Sum='{credit.sum}', PayedSum='{credit.payedSum}', Percentage='{credit.percentage}'";
                    expression = "UPDATE Credits SET " + values + " WHERE ID=" + id.ToString();

                    break;

                case "Deposits":
                    Deposit deposit = DataConverter.makeDeposit(data);

                    values = $"ClientID='{deposit.clientID}', Currency='{deposit.currency}', Sum='{deposit.sum}', Percentage='{deposit.percentage}'";
                    expression = "UPDATE Deposits SET " + values + " WHERE ID=" + id.ToString();

                    break;
            }

            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(expression, connection);
            if (command.ExecuteNonQuery() > 0)
            {
                connection.Close();

                return Ok();
            }

            connection.Close();

            return BadRequest();
        }
    }
}
