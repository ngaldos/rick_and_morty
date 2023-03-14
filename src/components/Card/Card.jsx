import {Link} from 'react-router-dom';
import styles from './Cards.module.css';
export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className= {styles.Background}>
         <button className={styles.BotonCierre} onClick={()=>onClose(id)}>X</button>
         <img  src={image} alt="" />
         <div>
            <Link to={`/detail/${id}`} className={styles.Name}>{name}</Link>
            <h3 className={styles.ID}>{id}</h3>
         </div>
         <h2 className={styles.Data}>{species}</h2>
         <h2 className={styles.Data}>{gender}</h2>
      </div>
   );
}
