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
    },[])  

    return (
        <>  
        <div>
        <ul>
        {ratings.map((rating) =>{
            return(
                <li key={rating.id}> {rating.rating} {rating.description}</li>
            )
            })}
            </ul>
            <div>
             
        {average.map((avg) =>{
            return(
                <div>
                    <span><FaStar/></span>
                    <p>{avg.avgRating}</p>
                </div>
                )
            })}
            </div>
            </div>
        <FormAvaliacao />  
        </>
    )
}

export default Avaliacao
