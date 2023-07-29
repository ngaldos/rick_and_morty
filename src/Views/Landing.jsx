import { Link } from "react-router-dom";
import styles from './Landing.module.css';
import foto from '../Images/logo2.png';
import Form from '../components/Form/Form';
/*
<Link to='/home'>
                <img src={foto} alt='img'/>
            </Link>
            <h3>Apreta el logo de Rick y Morty para ser re-direccionado al /Home</h3>
*/

const Landing= () =>{
    return (
        <div className={styles.Background}>
            <Form/>
        </div>
    );
}

export default Landing;