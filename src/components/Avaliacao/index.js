import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './Avaliacao.css'
import FormAvaliacao from '../FormAvaliacao';

function Avaliacao() {
    const [ratings, setRatings] = useState([]);
    const [average, setAverage] = useState([]);

    useEffect(() => {
        const fetchRatings = async() => {
            try{
                const response = await axios.get('http://localhost:8080/api/v1/reviews/15');
                setRatings(response.data);
            }catch(err){
                console.log(err.response)
            }
            try{
                const response = await axios.get('http://localhost:8080/api/v1/reviews');
                setAverage(response.data);
               
            }catch(err){
                console.log(err.response)
            }
        }
        fetchRatings();
    },[])  

    if(ratings.length == 0){
        return(
        <p> Nenhuma avaliação encontrada</p>
        )
    }
    return (
        <>  
        <FormAvaliacao /> 
      
        <div className='ratings'>
        <ul className='ratinglist'>
  
        {ratings.map((rating) =>{
            return(
                <div className='ratingdata'>
                <li key={rating.id}> <p>Nota: {rating.rating}</p> <p>Avaliação:</p> <p>{rating.description}</p></li>
                </div>
            )
            })}
            </ul>
            <div>
             
        {average.map((avg) =>{
            return(
                <div>
                    <span className='star'><FaStar/></span>
                    <span className='avgrating'> Nota média: {Math.round(avg.avgRating).toFixed(1)} </span>
                </div>
                )
            })}
            </div>
            </div>
    
        </>
    )
}

export default Avaliacao
