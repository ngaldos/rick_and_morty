import styles from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
            {character.name ? (
                <>
                <h3>{character.name}</h3>
                <p>{character.status}</p>
                <p>{character.specie}</p>
                <p>{character.origin?.name}</p>
                <img src={character.img} alt='img'/>
                </>
            ) : (
            <h3></h3>)}
        </div>
    );
}

export default Detail; 