import React, { Component } from 'react';
import CardItem from './CardItem';
import { list } from '../../utils/users';
import { Container } from './style';
export default class index extends Component {
    state = {
        users: list,
        name:'',
        surname: '',
        title:'',
    }
  render() {
      const onDelete =(id)=> {
        let newData = this.state.users.filter((value) => value.id !== id);
          this.setState({users: newData});
        }
      
      const onChange = (e)=> {
        // console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
      }
      
      const onAdd = ()=> {
        let newUser = {
          id: this.state.users.length + 1,
          title: this.state.title,
          name: this.state.name,
          surname: this.state.surname
        }
        // console.log(newUser);
        this.setState({users: [...this.state.users, newUser]});
      }
    return (
        <Container>
            <div>
              <h3>Name: {this.state.name}</h3>
              <h3>Surname: {this.state.surname}</h3>
              <h3>Title: {this.state.title}</h3>
              <input name='name' onChange={onChange} className='input' type="text" placeholder='name' />
              <input name='surname' onChange={onChange} className='input' type="text" placeholder='surname' />
              <input name='title' onChange={onChange} className='input' type="text" placeholder='title' />
              <button className='add-btn' onClick={onAdd}>add</button>
            </div>
            {this.state.users.length > 0 ?
                this.state.users.map((value)=> 
                    <CardItem value={value} key={value.id} onDelete={onDelete}/>
                ) : <h1>No data</h1>}
        </Container>
    )
  }
}
