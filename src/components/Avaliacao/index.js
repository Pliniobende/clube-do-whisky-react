import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

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

    },[ratings])  

    return (
        <>
            <div>
            <span>{FaStar}</span>
            <p>{average.avgRating}</p>
            </div>
            <div>
            <ul>
            {ratings.map((rating) =>{
                <li key={rating.id}> {rating.rating} {rating.description}</li>
            })}
            </ul>
            </div>
        <FormAvaliacao />
            
        </>
    )
}

export default Avaliacao
