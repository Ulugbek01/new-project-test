import React,{useState} from 'react';
import { CardItem } from './CardItem';
import { Container } from './style';
import { list } from '../../utils/users';

export const Filiallar = () => {
    const [users, setUsers] = useState(list);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [title, setTitle] = useState('');
    const [active, setActive] = useState(null);

    const onChangeName =(e)=> {
        setName(e.target.value);
    }

    const onChangeSurname =(e)=> {
        setSurname(e.target.value);
    }
    const onChangeTitle =(e)=> {
        setTitle(e.target.value);
    }

    const onAdd = ()=> {
        if(!(name.length && surname.length && title.length)){
           alert('Plase malumotlarni toldiring'); 
        }
        else {
            let newUser = {
                id: users.length + 1, 
                name: name,
                surname: surname,
                title: title,
            }
            setUsers([...users, newUser]);
        }

    }

    const onEdit = (value) =>{
       setActive(value.id,
        //    name: value.name,
        //    surname: value.surname,
        //    title: value.title,
       );
    }
  return (
      <Container>
          <input value={name} type="text" onChange={onChangeName} placeholder='name'/>
          <input value={surname} type="text" onChange={onChangeSurname} placeholder='surname'/>
          <input value={title} type="text" onChange={onChangeTitle} placeholder='title'/>
          <button onClick={onAdd}>add</button>
          <button>save</button>
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
          <p>Title: {title}</p>
          {users.map((value) =>
            <CardItem key={value.id} value={value} onEdit={onEdit} active={active===value.id}/>
          )}
      </Container>
  )
};
