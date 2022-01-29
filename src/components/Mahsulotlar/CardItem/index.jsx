import React, { Component } from 'react';
import { Container,ItemContainer } from './style';

export default class index extends Component {
  render() {
    const {id, name, surname, title} = this.props.value;
    const {onDelete} = this.props;
    return(
        <Container>
            <ItemContainer>
                <ItemContainer.Title size={'id'}>{id}</ItemContainer.Title>
                <ItemContainer.Title>{name}</ItemContainer.Title>
                <ItemContainer.Title>{surname}</ItemContainer.Title>
                <ItemContainer.Title>{title}</ItemContainer.Title>
                <button className='btn'>edit</button>
                <button className='btn' onClick={()=>onDelete(id)}>delete</button>
            </ItemContainer>
        </Container>
    );
  }
}
