import React,{useState} from "react";
import { students } from "../../utils/students";
import { Container, UsersCard } from "./style";

const Hooks = ()=> {
    const [count, setCount] = useState(students);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [tel, setTel] = useState('');

    const getName =({target})=> {
        // console.log(target.name);
        setName(
            target.value
          );  
    }
    const getLocation =({target})=> {
        // console.log(target.value);
        setLocation(target.value);
    }
    const getTel =({target})=> {
        // console.log(target.value);
        setTel(target.value);
    }
    const Add = ()=> {
        // console.log(name);
        if(name.length && location.length && tel){
            const newStudent = {
                id: count.length +1,
                name: name,
                location: location,
                tel: tel,
            }
            setCount([...count, newStudent]);
        }
        else{
            alert('please enter text');
        }
    }

    return (
        <Container>
            <p>Hooks Components</p>
            <h4>Name: {name}</h4>
            <h4>Location: {location}</h4>
            <h4>Phone number: {tel}</h4>
            <input type="text" name="name" placeholder="name" onChange={getName}/>
            <input type="text" name="location" placeholder="location" onChange={getLocation}/>
            <input type="text" name="tel" placeholder="tel number" onChange={getTel}/>
            <button className="add-btn" onClick={Add}>add</button>
            {count.map((value) => 
                <UsersCard key={value.id}>
                    <p>Id: {value.id}</p>
                    <p>Name: {value.name}</p>
                    <p>Location: {value.location}</p>
                    <p>Tel: {value.tel}</p>
                </UsersCard>
            )}
        </Container>
    )
}

export default Hooks;