class Client{
    clientID: number;
    name: string;
    surname: string;
    patronymic: string | null;
    age: number;
    passportSerial: number;
    passportNumber: number;

    constructor(ClientId: number, Name: string, Surname: string, Patr: string | null, Age: number, PassSer: number, PassNum: number){
        this.clientID = ClientId;
        this.name = Name;
        this.surname = Surname;
        this.patronymic = Patr;
        this.age = Age;
        this.passportSerial = PassSer;
        this.passportNumber = PassNum;
    }
}