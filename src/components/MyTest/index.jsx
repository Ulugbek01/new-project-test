import React,{useState} from 'react';
import { students } from '../../utils/students';
import { useNavigate } from 'react-router-dom';

export const MyTest = () => {
    // const location = useLocation();
    // console.log(location);

    const [lists, setLists] = useState(students);
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const getLocation = ({target})=> {
        // console.log(target.value);
        setLocation(target.value);
    }

    const getName = ({target})=> {
        // console.log(target.value);
        setName(target.value);
    }

    const getTel = ({target})=> {
        // console.log(target.value);
        setTel(target.value);
    }

    const onAdd = ()=> {
        if(!(location.length && name.length && tel.length)){
            alert('Kechirasiz janob...')
        }
        else {
            let newData = {
                id: lists.length + 1,
                 location,
                 name,
                 tel
            }
            setLists([...lists, newData])
        }

        /* Inputdagi malumotni add qilgandan keyin inputni 
            bo'shatish uchun nima qilamiz */
            
        // let newData = {
        //     location: '',
        //     name: '',
        //     tel: ''
        // }
    }

    const navigate = useNavigate();
    console.log(navigate);

    // const location = useLocation();
    // console.log(location);
  return (
      <div style={{marginTop: '40px', backgroundColor:'bisque'}}>
          <button onClick={()=> navigate('/')}>go to home</button>
          <br />
          <button onClick={()=>navigate(-2)}>{"<<"}</button>
          <button onClick={()=>navigate(-1)}>{"<"}</button>
          <button onClick={()=>navigate(+1)}>{">"}</button>
          <button onClick={()=>navigate(+2)}>{">>"}</button>
          <input type="text" onChange={getLocation} placeholder='location'/>
          <input type="text" onChange={getName} placeholder='name'/>
          <input type="tel" onChange={getTel} placeholder='tel'/>
          <button style={{cursor:'pointer'}} onClick={onAdd}>add</button>
          {/* <p>{id}</p> */}
          <p> location :{location}</p>
          <p> name :{name}</p>
          <p> tel :{tel}</p>
          {lists.map((value)=> 
            <div key={value.id} style={{display:'flex',
                justifyContent:'space-between',
                backgroundColor:'green',
                marginTop: '8px',
            }}>
                <p>{value.id}</p>
                <p>{value.location}</p>
                <p>{value.name}</p>
                <p>{value.tel}</p>
            </div>
          )}
      </div>
  );
};
