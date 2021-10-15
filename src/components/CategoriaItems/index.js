import React from 'react'

const CategoriaItems = props => {
    console.log(props);
    
    return (
        <li>
            <div>
              <h2>{props.descricao}</h2> 
              <h2>{props.image}</h2>
              <h2>{props.categoria}</h2> 
            </div>
        </li>
    )
}

export default CategoriaItems;
