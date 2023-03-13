import styles from './Cards.module.css';
import Card from './Card';
const onClose = ()=> window.alert('Emulamos que se cierra la card')
export default function Cards({characters, onClose}) {
   return (
   <div>
      {
         characters.map(({name, species, gender, image, id})=>{
            return (
               <div className={styles.CardItem}>
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

