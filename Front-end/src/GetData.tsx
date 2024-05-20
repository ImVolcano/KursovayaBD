import { useEffect, useState } from "react";
import { DataInsert } from "./DataInsert";

export function GetData(props){
    switch(props.tableName){
        case "Clients": {
            const [clients, setClients] = useState<Client[]>([]);

            useEffect(() => {
                fetch("https://localhost:7297/api/Data/SelectAll?tableName=Clients").then((res) => res.json()).then((json) => setClients(json));
            });

            return DataInsert(clients, props.tableName);
        }

        case "Cards": {
            const [cards, setCards] = useState<Card[]>([]);

            useEffect(() => {
                fetch("https://localhost:7297/api/Data/SelectAll?tableName=Cards").then((res) => res.json()).then((json) => setCards(json));
            });

            return DataInsert(cards, props.tableName);
        }

        case "Credits": {
            const [credits, setCredits] = useState<Credit[]>([]);

            useEffect(() => {
                fetch("https://localhost:7297/api/Data/SelectAll?tableName=Credits").then((res) => res.json()).then((json) => setCredits(json));
            });

            return DataInsert(credits, props.tableName);
        }

        case "Deposits": {
            const [deposits, setDeposits] = useState<Deposit[]>([]);

            useEffect(() => {
                fetch("https://localhost:7297/api/Data/SelectAll?tableName=Deposits").then((res) => res.json()).then((json) => setDeposits(json));
            });

            return DataInsert(deposits, props.tableName);
        }

        case "Accounts": {
            const [accounts, setAccs] = useState<Account[]>([]);

            useEffect(() => {
                fetch("https://localhost:7297/api/Data/SelectAll?tableName=Accounts").then((res) => res.json()).then((json) => setAccs(json));
            });

            return DataInsert(accounts, props.tableName);
        }
    }
    
}