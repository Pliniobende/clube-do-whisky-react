import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import categoria1 from '../../images/Categoria1.jpeg';
import categoria2 from '../../images/Categoria2.jpeg';
import categoria3 from '../../images/Categoria3.jpeg';
import categoria4 from '../../images/Categoria4.jpg';

const items = [
  {
    src: categoria1
  },
  {
    src: categoria2
  },
  {
    src: categoria3
  },
  {
    src: categoria4
  }
];

const NovoCarrossel = (props) => {

    const [categories, setCategories] = useState([]);

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


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === categories.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? categories.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  
  

  const slides = categories.map((categorie) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={categorie.id}
      >
        <img src={categoria1} />
       
        <CarouselCaption captionText={categorie.description} captionHeader={categorie.name} />
      </CarouselItem>
      
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default NovoCarrossel;