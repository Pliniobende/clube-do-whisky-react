import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CategoriaDetalhes from '../CategoriaDetalhes';

const Categorias = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async() => {
            try{
                const response = await axios.get('http://localhost:8080/api/v1/categories/15');
                setBrands(response.data);
               
            }catch(err){
                console.log(err.response)
            }
        }
        fetchBrands();

    },[])  

    return (
        <CategoriaDetalhes items={brands} />
    )
}

export default Categorias;
