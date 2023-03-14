import SearchBar from "../SearchBar/SearchBar";
import React from 'react';
import { Link } from "react-router-dom";
import styles from '../SearchBar/SearchBar.module.css';

export default function Nav ({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <div className={styles.Links}>
                <Link to='/'><h3>Landing</h3></Link>
                <Link to='/home'><h3>Home</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
            </div>
        </div>
    );
}