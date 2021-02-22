import React from 'react'
import Tables from './Tables'

class DragDrop extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>   
                <Tables />
            </div>
        )
    }
}
export default DragDrop