class Deposit{
    id: number;
    clientID: number;
    currency: string;
    sum: number;
    percentage: number;
    
    constructor(ID: number, cID: number, curr: string, Sum: number, perc: number){
        this.id = ID;
        this.clientID = cID;
        this.currency = curr;
        this.sum = Sum;
        this.percentage = perc;
    }
}