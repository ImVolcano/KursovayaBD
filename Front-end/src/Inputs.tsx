import React from 'react'
import { AddData } from './AddData'
import './styles/input.css'

interface Props{
    id: string;
    data: string;
    tableName: string;
}

interface State{
    id: string;
    data: string;
    tableName: string;
}

export class Inputs extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {id: "", data: "", tableName: props.tableName};
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleDelSubmit = this.handleDelSubmit.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
    }

    onChangeID(e){
        this.setState({id: e.target.value});
    }

    onChangeData(e){
        this.setState({data: e.target.value});
    }

    async handleAddSubmit(e){
        e.preventDefault();

        let fullData = this.state.id + " " + this.state.data;

        const response = await fetch("https://localhost:7297/api/Data/AddData", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                data: fullData,
                tableName: this.state.tableName
            })
        }).then(response => response.ok);
    }

    async handleDelSubmit(e){
        e.preventDefault();

        const response = await fetch("https://localhost:7297/api/Data/Delete", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                data: this.state.id,
                tableName: this.state.tableName
            })
        }).then(response => response.ok);
    }

    async handleChangeSubmit(e){
        e.preventDefault();

        let fullData = this.state.id + " " + this.state.data;

        const response = await fetch("https://localhost:7297/api/Data/Update", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                data: fullData,
                tableName: this.state.tableName
            })
        }).then(response => response.ok);
    }

    render(){
        return(
            <>
            <div>
                <span className="spanID">ID</span>
                <input type="text" className="inputID" id="idIn" onChange={this.onChangeID}/>
                <span className="spanID">Данные</span>
                <input type="text" className="inputData" id="dataIn" onChange={this.onChangeData}/>
            </div>
            <div>
                <button className="addButtn" onClick={this.handleAddSubmit}>Добавить</button>
                <button className="changeButtn" onClick={this.handleChangeSubmit}>Изменить</button>
                <button className="delButtn" onClick={this.handleDelSubmit}>Удалить</button>
            </div>
        </>
        )
    }
}