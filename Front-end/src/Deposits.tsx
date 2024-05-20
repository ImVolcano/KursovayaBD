import { GetData } from "./GetData";
import { Inputs } from "./Inputs";

export function Deposits(){
    return(
        <>
        <table width="50%" align="left">
            <tr>
                <th>ID</th>
                <th>ClientID</th>
                <th>Currency</th>
                <th>Sum</th>
                <th>Percentage</th>
            </tr>
            <GetData tableName="Deposits"/>
        </table>
        <Inputs id="" data="" tableName="Deposits"/>
        </>
    )
}