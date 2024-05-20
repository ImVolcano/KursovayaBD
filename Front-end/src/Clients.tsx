import { GetData } from "./GetData";
import { Inputs } from "./Inputs";

export function Clients(){
    return(
        <>
        <table width="50%" align="left">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Patronymic</th>
                <th>Age</th>
                <th>Passport Serial</th>
                <th>Passport Number</th>
            </tr>
            <GetData tableName="Clients"/>
        </table>
        <Inputs id="" data="" tableName="Clients"/>
        </>
    )
}