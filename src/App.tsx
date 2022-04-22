import React from 'react';
import './App.css';
import {ListViewComponent} from '@syncfusion/ej2-react-lists';
import {groupData} from './data';

function App() {
  const customHeader=(props:any)=>{
    return(
      <span className='e-headertext'>Call History</span>
    );
  }
  const customItems=(props:any)=>{
    return(
      <div className='e-list-wrapper e-list-avatar e-list-multi-line'>
        <span className='e-avatar e-icon'></span>
        <span className='e-list-item-header'>{props.text}</span>
        <span className='e-list-content'>{props.group}, {props.time}</span>
      </div>
    );
  }
  const customGroupTemplate=(props:any)=>{
    return(<span className='e-custom-group'>{props.items[0].category}
    </span>);
  }
 return (
    <div className="App">
      <ListViewComponent id="listview" dataSource={groupData} 
        fields={{id: 'id', text: 'text', groupBy: 'category'}}  
        width={300} height={500}
        showHeader={true} headerTemplate={customHeader}
        cssClass="e-list-template" template={customItems}
        groupTemplate={customGroupTemplate}
      ></ListViewComponent>
    </div>
  );
}

export default App;
