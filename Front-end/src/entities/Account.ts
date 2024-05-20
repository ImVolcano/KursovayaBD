class Account{
    id: number;
    clientID: number;
    currency: string;
    sum: number;
    cardID: number | null;

    constructor(ID: number, ClientId: number, Curr: string, Sum: number, CardId: number | null){
        this.id = ID;
        this.clientID = ClientId;
        this.currency = Curr;
        this.sum = Sum;
        this.cardID = CardId;
    }
}