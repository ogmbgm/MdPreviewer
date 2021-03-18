import React, {Component} from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';
const marked = require("marked");

const defaultText="# H1 Element \r ## H2 Element \r **bolded text** \r > blockquote \n * List: \n - FirstItem \n - Second Item \n - Third Item \n * Link: [Google](https://www.google.com) \n * Image: ![sunset](https://cdn.pixabay.com/photo/2021/02/12/09/36/sunflowers-6007847_960_720.jpg) \n * `<div>HTML code</div>` \n * ``` \n { \n multilinecode \n } \n```";
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            html: marked(defaultText, {gfm: true,breaks: true})
        }
        this.mdToHtml = this.mdToHtml.bind(this);
    }
    mdToHtml(event){
        const html = marked(event.target.value, {gfm: true,breaks: true});
        this.setState({
            html
        });
    }
    render(){
        return(
            <div id="main">
                <Editor onChange={this.mdToHtml} defaultText={defaultText}/>
                <Preview html={this.state.html}/>
            </div>
        )
    }
}

export default App;