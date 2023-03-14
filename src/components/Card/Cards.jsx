import styles from './Cards.module.css';
import Card from './Card';
export default function Cards({characters, onClose}) {
   return (
   <div className={styles.CardItem}>
      {
         characters.map(({id, name, species, gender, image})=>{
            return (
               <div>
                  <Card 
                     id={id}
                     name= {name}
                     species= {species}
                     gender= {gender}
                     image= {image}
                     onClose= {onClose}
                  />
               </div>
            );
         })
      }
   </div>
   );
}

