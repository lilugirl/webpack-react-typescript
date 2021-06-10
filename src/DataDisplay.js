import React ,{memo} from 'react';
const DataDisplay=({data})=>{
    console.log('datadisplay data',data);
    return (<h3>{data.read().foo}</h3>)
}
export default memo(DataDisplay);