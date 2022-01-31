import React,{useState} from 'react';
import { Card } from './Card';
import { students } from '../../utils/students';


export const Mijozlar = () => {
    const [data, setData] = useState(students);
    
    const onDelete = (id) => {
        let newData = data.filter((value)=> value.id !== id);
        setData(newData);
        // alert(id);
    }

    const getData = ({target})=> {
      let newData1 = data.filter((value)=> value.name.includes(target.value));
        setData(newData1); 
    }
  return (
    <div>
        <input type="text" placeholder='Search...' onChange={getData} />
        {data.map((value)=>
            <Card value={value} key={value.id} onDelete={onDelete}/>
        )}
    </div>
  )
};
