import React from 'react';

export class Questionsgraph extends React.Component{
    render(){
        console.log(this.props.tags)
        console.log(this.props.quescount)
        return(
            <div>
                question tags
            </div>
        )
    }
}