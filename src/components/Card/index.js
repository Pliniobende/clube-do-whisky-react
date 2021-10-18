import React,{ useState} from "react";
import Grid from "../Grid";
import Avaliacao from '../Avaliacao'


import { Image } from './Card.styles';


const Card = props => {
    const [review, setReview] = useState(false);
    const onClick = () => setReview(true);

    return(
    <>
        <Grid>
            <Image src= {props.image} alt="sample"/>
                <p>{props.descricao}</p>
            <div>
            <button type="submit" onClick={onClick}>Avaliar</button>
            {review ? <Avaliacao/> : null}
            </div>
        </Grid>
    </>
    )
};


export default Card;