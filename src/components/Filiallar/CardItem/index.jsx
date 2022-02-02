import React from 'react';
import { CardItemContainer, CardItemWrapper } from './style';

export const CardItem = (props) => {
    const {id, title, name, surname} = props.value;
    // console.log(props.active)
  return (
      <CardItemContainer>
          <CardItemWrapper>
            <div>{id}</div>
            <div>{title}</div>
            <div>{name}</div>
            <div>{surname}</div>
            <button>delete</button>
            {props.active ? 
                <button onClick={()=>props.onSave(id)}>save</button>:
                <button onClick={()=>props.onEdit({id, title, name, surname})}>edit</button>
            }
          </CardItemWrapper>
      </CardItemContainer>
  )
};
