import { GetData } from "./GetData";
import { Inputs } from "./Inputs";

export function Credits(){
    return(
        <>
        <table width="50%" align="left">
            <tr>
                <th>ID</th>
                <th>ClientID</th>
                <th>Currency</th>
                <th>Sum</th>
                <th>PayedSum</th>
                <th>Percentage</th>
            </tr>
            <GetData tableName="Credits"/>
        </table>
        <Inputs id="" data="" tableName="Credits"/>
        </>
    )
}