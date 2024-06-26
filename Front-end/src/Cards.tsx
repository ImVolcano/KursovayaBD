import { GetData } from "./GetData";
import { Inputs } from "./Inputs";

export function Cards(){
    return(
        <>
        <table width="50%" align="left">
            <tr>
                <th>ID</th>
                <th>AccountID</th>
                <th>Number</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Expiry date</th>
                <th>CVV</th>
                <th>PIN</th>
            </tr>
            <GetData tableName="Cards" />
        </table>
        <Inputs id="" data="" tableName="Cards"/>
        </>
    )
}