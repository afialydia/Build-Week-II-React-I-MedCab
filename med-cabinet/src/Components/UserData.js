import React, { useEffect, useState } from "react";
import axios from "axios";
import RecCards from "./RecCards";


const UserData = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      const recData = res.data.results;
      console.log(recData);
      setState(recData);
    }, [])
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      {state.map(data => {
          return (
            <RecCards 
                name={data.name}
                // key={data.id}
                // id={data.id}
            />
          )
      })}
    </div>
  );
}

export default UserData;