class Credit{
    id: number;
    clientID: number;
    currency: string;
    sum: number;
    payedSum: number;
    percentage: number;

    constructor(ID: number, cID: number, curr: string, Sum: number, pSum: number, perc: number){
        this.id = ID;
        this.clientID = cID;
        this.currency = curr;
        this.sum = Sum;
        this.payedSum = pSum;
        this.percentage = perc;
    }
}