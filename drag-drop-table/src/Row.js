import React from 'react'

class Row extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        
    }

    render(){
        let drag = this.props.type === `drag`? true : null ;
        let drapDropClass = this.props.type === `drag`? 'draggable' : 'droppable'
        return(
            <tr id={this.props.row.id} className={drapDropClass} draggable={drag} >
                <td>{this.props.row.name}</td>
                <td>{this.props.row.username}</td>
                <td>{this.props.row.email}</td>
                <td>
                    {this.props.row.address.street}{this.props.row.address.suite}<br/>
                    {this.props.row.address.city}{this.props.row.address.zipcode}
                </td>
            </tr>
        )
    }
}
export default Row