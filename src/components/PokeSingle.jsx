import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import classes from "./PokeSingle.module.css";

const PokeSingle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);

  return (
    <div className={classes.pokeSingle}>
      <h2>{data.name}</h2>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
      />
      <div>
        {data.types?.map((type, idx) => (
          <span key={idx}>{type.type.name}</span>
        ))}
      </div>
      {/* navigate(/) i.e root also works */}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PokeSingle;
