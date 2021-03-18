import React, {Component} from 'react';
//import './Preview.css';

class Preview extends Component{
    render(){
        return(
            <div id="preview" dangerouslySetInnerHTML={{__html: this.props.html}}>
                
            </div>
        )
    }
}

export default Preview;