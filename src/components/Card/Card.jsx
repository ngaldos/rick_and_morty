import styles from './Cards.module.css';
export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className= {styles.Background}>
         <button className={styles.BotonCierre} onClick={onClose}>X</button>
         <img  src={image} alt="" />
         <div>
            <h2 className={styles.Name}>{name}</h2>
         </div>
         <h2 className={styles.Data}>{species}</h2>
         <h2 className={styles.Data}>{gender}</h2>
      </div>
   );
}
