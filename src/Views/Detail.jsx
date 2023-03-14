import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail= ()=>{
    const {id} = useParams();

    const [character, setCharacter]= useState({});

    useEffect(()=>{
        const KEY= '7b3900ebf212.09a5fbfae83932ed306d';
        const URL_BASE= 'https://be-a-rym.up.railway.app/api';
        fetch(`${URL_BASE}/character.${id}?key=${KEY}`)
        .then(response=> response.json())
        .then(data=>{
            setCharacter([...character, data]);
        })
    }, []);
    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.img}/>

        </div>
    );
}

export default Detail;