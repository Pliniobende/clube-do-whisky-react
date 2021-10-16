import React from "react";
import Grid from "../Grid";


import { Image } from './Card.styles';


const Card = props => (
    <>
        <Grid>
            <Image src= {props.image} alt="sample"/>
            <p>{props.descricao}</p>
            <button type="submit">Avaliar</button>
        </Grid>
    </>
);


export default Card;