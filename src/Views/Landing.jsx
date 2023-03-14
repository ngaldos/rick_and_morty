import { Link } from "react-router-dom";
import styles from './Landing.module.css';

const Landing= () =>{
    return (
        <div className={styles.Background}>
            <Link to='/home'>
                <h3>Boton xD</h3>
            </Link>
            
        </div>
    );
}

export default Landing;