import React, {useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import categoria1 from '../../images/Categoria1.jpeg';
import categoria2 from '../../images/Categoria2.jpeg';
import categoria3 from '../../images/Categoria3.jpeg';
import categoria4 from '../../images/Categoria4.jpg';
import axios from 'axios';
import './Carousel.css'


function CarouselW() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async() => {
        try{
            const response = await axios.get('http://localhost:8080/api/v1/categories')
            setCategories(response.data);
        }catch(err){
            console.log(err.response.data)
        }
   
    }
    fetchCategories();

},[]) 

  return (
    <>
 
  <Carousel>
  
  <Carousel.Item>
    <img
      src={categoria1}
      alt="Bourbon"
    />
    <Carousel.Caption>
      <h3>Bourbon</h3>
      <p>O bourbon é um whiskey americano feito de grãos maltados, dos quais no mínimo 51% da composição é milho. </p>
      <p>As regras que regem o bourbon são menos rígidas que as do Escocês, porém ele deve ser totalmente fabricado nos Estados Unidos para ser qualificado como Bourbon.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={categoria2}
      alt="Straight Bourbon"
    />
    <Carousel.Caption>
      <h3>Straight Bourbon</h3>
      <p>Esse é um bourbon de um estado Americano, Kentucky por exemplo, que foi envelhecido por no mínimo 2 anos e não contém aditivos, tais como sabores ou corantes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={categoria3}
      alt="Rye"
    />
    <Carousel.Caption>
      <h3>Rye</h3>
      <p>O rye é fabricado especialmente na América do Norte. Nos Estados Unidos, ele deve ser fermentado a partir de uma mistura de grãos maltados que contenha pelo menos 51% de centeio.</p>
      <p>As regras sobre o rye canadense são bem menos rígidas e a bebida pode conter muito menos do que 51% de centeio.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src={categoria4}
      alt="Whiskey Escocês"
    />
    <Carousel.Caption>
      <h3>Whiskey Escocês</h3>
      <p>Também conhecido como Scotch, são produzidos apenas na Escócia. </p>
      <p>O termo Scotch é protegido por legislação e só pode ser usado para bebidas produzidas no país, assim como a cachaça no Brasil.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default CarouselW;
