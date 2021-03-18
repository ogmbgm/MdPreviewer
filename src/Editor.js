import React, {Component} from 'react';
//import './Editor.css';

class Editor extends Component{
    render(){
        return(
                <textarea id="editor" onChange={this.props.onChange} defaultValue={this.props.defaultText}></textarea>
        )
    }
}

export default Editor;