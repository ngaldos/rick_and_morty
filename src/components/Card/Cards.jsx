import styles from './Cards.module.css';
import Card from './Card';
const onClose = ()=> window.alert('Emulamos que se cierra la card')
export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {
         characters.map(({name, species, gender, image})=>{
            return (
               <div className={styles.CardItem}>
                  <Card 
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

