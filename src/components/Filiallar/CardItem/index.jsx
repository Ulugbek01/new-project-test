import React from 'react';
import { CardItemContainer, CardItemWrapper } from './style';

export const CardItem = (props) => {
    const {id, title, name, surname} = props.value;
  return (
      <CardItemContainer>
          <CardItemWrapper>
            <div>{id}</div>
            <div>{title}</div>
            <div>{name}</div>
            <div>{surname}</div>
            <button>delete</button>
            <button>edit</button>
          </CardItemWrapper>
      </CardItemContainer>
  )
};
