import React, {useState} from 'react';
import SaveIcon from '../../icons/floppy-disk.png';
import css from './LoginDialog.module.scss';


const LoginDialog = () =>{
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = (event, setter) => {
        setter(event.target.value);
    }

    const search = () => {
        console.log('search');
    }

    return(
        <div className={css.container}>
            <div className={css.title}>
                Zaloguj się
            </div>
            <form /*method="POST"*/ className={css.form}>
                <div className={css.login}>
                    <label for="login">Login</label>
                    <input type="text" value={login}  onChange={(event) => handleOnChange(event, setLogin)} className={css.input} />
                </div>
                <div className={css.password}>
                    <label for="password">Password</label>
                    <input type="text" value={login}  onChange={(event) => handleOnChange(event, setPassword)} className={css.input} />
                </div>
                <div className={css.info}>

                    <div >
                        Nie masz jeszcze konta?
                    </div>
                    <div className={css.registerInfo}>
                        Zarejestruj się!
                    </div>
                </div>

                <button type="submit" className={css.submitButton}> <img src={SaveIcon} alt="saveIcon" className={css.saveIcon}/> </button>
             </form>

           
            </div>

    )};

export default LoginDialog;