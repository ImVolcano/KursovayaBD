import { GetData } from "./GetData";
import { Inputs } from "./Inputs";

export function Accounts(){
    return(
        <>
        <table width="30%" align="left">
            <tr>
                <th>ID</th>
                <th>ClientID</th>
                <th>Currency</th>
                <th>Sum</th>
                <th>CardID</th>
            </tr>
            <GetData tableName="Accounts" />
        </table>
        <Inputs id="" data="" tableName="Accounts"/>
        </>
    )
}