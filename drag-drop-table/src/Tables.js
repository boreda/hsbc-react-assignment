import React from 'react'
import {dropData, commonData, masterData} from './tableData';

class Tables extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            drop: dropData,
            commonData: commonData,
            masterData: masterData,
            updated: []
        }
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }
    handleDragOver(event){
        event.preventDefault();
    }
    handleDrag(event, row, id){
        event.stopPropagation();
        this.setState((prevState)=>{
            // this.state.drop = prevState.drop.map(r=>{
            //     if(r.id !== id){
            //         prevState.drop.push(row)
            //     }
            // })
            this.state.commonData = prevState.commonData.filter(d=>(d.id!==id));
        })
        this.state.updated.push(row)
        if(this.state.updated = this.state.updated.includes(row) ? this.state.updated : null);
    }
    handleDrop(row){
        // console.log(this.state)
        this.setState({
            commonData: this.state.commonData,
            drop: this.state.drop.includes(row) ? this.state.drop.concat(this.state.updated) : null
        })
    }
    render(){
        const dropTableComponent = (this.state.drop).map(row=>{
            return <tr 
                        id={row.id} 
                        className="droppable" 
                        onDragOver={(e)=>{this.handleDragOver(e)}}
                        onDrop={(e)=>this.handleDrop(row)}
                    >
                        <td>{row.name}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>
                            {row.address.street}{row.address.suite}<br/>
                            {row.address.city}{row.address.zipcode}
                        </td>
                    </tr>
        })
        const commonTableComponent = (this.state.commonData).map(row=>{
            return <tr 
                        id={row.id} 
                        className="draggable" 
                        draggable 
                        onDragStart={(e)=>{this.handleDrag(e, row, row.id)}}
                    >
                        <td>{row.name}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>
                            {row.address.street}{row.address.suite}<br/>
                            {row.address.city}{row.address.zipcode}
                        </td>
                    </tr>
        })
        const masterTableComponent = (this.state.masterData).map(row=>{
            return <tr 
                        id={row.id} 
                        className="draggable" 
                        draggable 
                    >
                        <td>{row.name}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>
                            {row.address.street}{row.address.suite}<br/>
                            {row.address.city}{row.address.zipcode}
                        </td>
                    </tr>
        })
        return(
            <div>
                <h2>React Drag Drop Row Table Component</h2>
                <table className="table table-hover" style={{width: '150vh'}}>
                <caption>Drop Table</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>{dropTableComponent}</tbody>
                </table>
    
                <table className="table table-hover" style={{width: '150vh'}}>
                <caption>Common Drag Table</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>{commonTableComponent}</tbody>
                </table>
    
                <table className="table table-hover" style={{width: '150vh'}}>
                <caption>Master Drag Table</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody >{masterTableComponent}</tbody>
                </table>
            </div>
        )
    }
}
export default Tables