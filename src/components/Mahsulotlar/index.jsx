import React, { Component } from 'react';
import CardItem from './CardItem';
import { list } from '../../utils/users';
import { Container } from './style';
export default class index extends Component {
    state = {
        active: null,
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
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
      }
      
      const onAdd = ()=> {
        if(!(this.state.name && this.state.surname && this.state.title)){
          alert('Iltimos malumot kiriting');
        }
        else {
          let newUser = {
            id: this.state.users.length + 1,
            title: this.state.title,
            name: this.state.name,
            surname: this.state.surname
          }
          this.setState({users: [...this.state.users, newUser]});
        }
        this.setState({
          id: null,
          name:'',
          surname:'',
          title:'',
        })
        // console.log(this.state.users);
      }

       /*  Edit qiladigan function boshlandi  */

      const onSave = ()=>{
        // console.log(this.state.active);
        if(!this.state.active){
          let newUser = {
            id: this.state.users.length + 1,
            title: this.state.title,
            name: this.state.name,
            surname: this.state.surname
          }
          this.setState({users: [...this.state.users, newUser]});
        }
        else{
          let newUser = {
            title: this.state.title,
            name: this.state.name,
            surname: this.state.surname
          }

          let user = this.state.users.map((value)=> value.id === this.state.active 
          ? {...this.state.users, ...newUser}: value);
          console.log({...this.state.users})
          this.setState({users: user});
        }

        this.setState({
          id: null,
          name:'',
          surname:'',
          title:'',
        })
      }
      /* Edit qiladigan fuction tugadi */

      const onEdit = (value)=> {
        this.setState({
          active:value.id,
          name: value.name,
          surname: value.surname,
          title: value.title,
        })

        console.log();
      }

    return (
        <Container>
            <div>
              <h3>Name: {this.state.name}</h3>
              <h3>Surname: {this.state.surname}</h3>
              <h3>Title: {this.state.title}</h3>
              <input value={this.state.name} name='name' onChange={onChange} className='input' type="text" placeholder='name' />
              <input value={this.state.surname} name='surname' onChange={onChange} className='input' type="text" placeholder='surname' />
              <input value={this.state.title} name='title' onChange={onChange} className='input' type="text" placeholder='title' />
              <button onClick={onSave}>save</button>
              <button className='add-btn' onClick={onEdit}>add</button>
            </div>
            {this.state.users.length > 0 ?
                this.state.users.map((value)=> 
                    <CardItem value={value} key={value.id} onDelete={onDelete} onEdit={onEdit} active={this.state.active === value.id}/>
                ) : <h1>No data</h1>}
        </Container>
    )
  }
}
