/*import { useState } from 'react';
const [state, setState] = useState({
    gender: '',
    image: '',
    name:'',
    species: ''});
    const [error, setError]= useState({
        gender: '',
        image: '',
        name:'',
        species: ''});
        const validate = ()=>{
        }
        */
import { useState } from 'react';
import style from './Form.module.css';
const Form = ()=>{
    const [userData, setUserData] = useState({ username: '', password: '' });
    const onClick = (event)=>{
        setUsers([...users, ]);
    }
    const handleChange= (event)=>{
        
        setUserData({});
    }
       return(
        <div>
            <form className={style.Background}>
                <div>
                    <div>
                        <label>Name: </label>
                        <input name='name' onChange={handleChange}></input>
                    </div>

                    <div>
                        <label>Username: </label>
                        <input name='username' onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input name='password' onChange={handleChange}></input>
                    </div>

                    <div>
                        <label>Email: </label>
                        <input name='email' onChange={handleChange}></input>
                    </div>

                    <div>
                        <botton classname={style.submit} type='submit' onClick={onClick}>
                            Submit</botton>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Form;