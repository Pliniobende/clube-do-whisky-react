import React from 'react';
import Card from '../Card'
const CategoriaDetalhes = props => {

    if(props.items.length === 0){
        return(
        <h2>Nenhuma marca cadastrada</h2>
        )
    }
   
    return (
    <ul>
        {props.items.map((marca) => 
            <Card key={marca.id} descricao={marca.description} image={marca.image} categoria={marca.categoriesId}/>
        )}
    </ul>
    )
}

export default CategoriaDetalhes
