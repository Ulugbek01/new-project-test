import React, { Component } from 'react';
import { Container,ItemContainer } from './style';

export default class index extends Component {
  render() {
    const {id, name, surname, title} = this.props.value;
    const {onDelete, onEdit} = this.props;
    // console.log(this.props.active);
  
    return(
        <Container>
            <ItemContainer>
                <ItemContainer.Title size={'id'}>{id}</ItemContainer.Title>
                <ItemContainer.Title>{name}</ItemContainer.Title>
                <ItemContainer.Title>{surname}</ItemContainer.Title>
                <ItemContainer.Title>{title}</ItemContainer.Title>
                {this.props.active ? 
                  <button className='btn'>save</button>
                  :<button className='btn' onClick={()=> onEdit({id, name, surname, title})}>edit</button>
                }
                <button className='btn' onClick={()=>onDelete(id)}>delete</button>
            </ItemContainer>
        </Container>
    );
  }
}
