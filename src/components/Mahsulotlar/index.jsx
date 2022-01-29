import React, { Component } from 'react';
import CardItem from './CardItem';
import { list } from '../../utils/users';
import { Container } from './style';


export default class index extends Component {
    state = {
        users: list,
    }
  render() {
      const onDelete =(id)=> {
        let newData = this.state.users.filter((value) => value.id !== id);
          this.setState({users: newData});
          console.log(id, " id")
        }

    return (
        <Container>
            {this.state.users.map((value)=> 
                <CardItem value={value} key={value.id} onDelete={onDelete}/>
            )}
        </Container>
    )
  }
}
