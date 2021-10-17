import React, { useContext } from "react";
import Grid from "../Grid";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/user";
import Avaliacao from "../Avaliacao";

import { Image } from "./Card.styles";

const Card = (props) => {
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    user.auth
      ? console.log("redirect to = /avaliacao/", e.target.value)
      : console.log("redirect to Signin");
  };

  return (
    <>
      <Grid>
        <Image src={props.image} alt="sample" />
        <p>{props.description}</p>
        <button onClick={handleSubmit} value={props.id} type="submit">
          Avaliar
        </button>
      </Grid>
    </>
  );
};

export default Card;
