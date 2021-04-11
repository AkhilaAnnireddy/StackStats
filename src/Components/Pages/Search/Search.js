import React from 'react';


export class Search extends React.Component{
    render()
    {
        return(
                <div className="result">
                        <div className="img">
                            <img src={this.props.image} alt="display_image"/>
                        </div>
                        <div className="name">
                            <h6>{this.props.inname}</h6>
                        </div>
                </div>
        )
    }
}