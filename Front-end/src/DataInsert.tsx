export function DataInsert(data: Array<any>, tableName: string){
    switch(tableName){
        case "Clients": {
            return(
                <>
                    {data?.map(
                        (item: Client) => (
                            <>
                                <tr>
                                    <td>{item.clientID}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.patronymic}</td>
                                    <td>{item.age}</td>
                                    <td>{item.passportSerial}</td>
                                    <td>{item.passportNumber}</td>
                                </tr>
                            </>
                        )
                    )}
                </>
            )
        }

        case "Accounts": {
            return(
                <>
                    {data?.map(
                        (item: Account) => (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.clientID}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.sum}</td>
                                    <td>{item.cardID}</td>
                                </tr>
                            </>
                        )
                    )}
                </>
            )
        }

        case "Cards": {
            return(
                <>
                    {data?.map(
                        (item: Card) => (
                            <>
                                <tr>
                                    <td>{item.cardID}</td>
                                    <td>{item.accountID}</td>
                                    <td>{item.cardNumber}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.expiryDate}</td>
                                    <td>{item.codeCVV}</td>
                                    <td>{item.codePIN}</td>
                                </tr>
                            </>
                        )
                    )}
                </>
            )
        }

        case "Deposits": {
            return(
                <>
                    {data?.map(
                        (item: Deposit) => (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.clientID}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.sum}</td>
                                    <td>{item.percentage}</td>
                                </tr>
                            </>
                        )
                    )}
                </>
            )
        }

        case "Credits": {
            return(
                <>
                    {data?.map(
                        (item: Credit) => (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.clientID}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.sum}</td>
                                    <td>{item.payedSum}</td>
                                    <td>{item.percentage}</td>
                                </tr>
                            </>
                        )
                    )}
                </>
            )
        }
    }
}