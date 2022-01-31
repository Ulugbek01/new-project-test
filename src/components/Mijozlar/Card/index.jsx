import React from 'react';
import { UsersCard } from './style';

export const Card = ({value, onDelete}) => {
  return <div>
            <UsersCard>
                <p>{value.id}</p>
                <p>{value.name}</p>
                <p>{value.location}</p>
                <p>{value.tel}</p>
                <button>add</button>
                <button onClick={()=>onDelete(value.id)}>delete</button>
            </UsersCard>
        </div>;
};
