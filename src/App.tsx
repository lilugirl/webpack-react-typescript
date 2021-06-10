import React from 'react';
import Button from './Button';
import {Sum} from 'liuyi-node-project';
class App extends React.Component{
    render(){
        return(<div>
            <p>hi world</p>
            {Sum(10,32)}
           <Button></Button>
        </div>)
    }
}
export default App;