class Card{
    cardID: number;
    accountID: number;
    cardNumber: string;
    name: string;
    surname: string;
    expiryDate: string;
    codeCVV: string;
    codePIN: string;

    constructor(ID: number, AccId: number, Num: string, Name: string, Surname: string, Exp: string, CVV: string, codePIN: string){
        this.cardID = ID;
        this.accountID = AccId;
        this.cardNumber = Num;
        this.name = Name;
        this.surname = Surname;
        this.expiryDate = Exp;
        this.codeCVV = CVV;
        this.codePIN = codePIN;
    }
}