import React, {useState} from 'react';
import SaveIcon from '../../icons/floppy-disk.png';
import css from './LoginDialog.module.scss';

const REGISTER_URL = "http://localhost:8082/api/v1/users";
const LOGIN_URL = "http://localhost:8082/api/v1/users/login";

const LoginDialog = ({ setIsUserLoggedIn }) =>{
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [isRegisterClicked, setIsRegisterClicked] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleOnChange = (event, setter) => {
        setter(event.target.value);
    }

    const search = () => {
        console.log('search');
    }

    const onRegisterClick = () => {
        setIsRegisterClicked(true);
    }

    const handleOnRegister = async (event) => {
        event.preventDefault();

        const payload = {
            "login": login,
            "password": password
        }
       await fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {

                const { success } = data;
                if(success){
                    setLogin('');
                    setPassword('');
                    setIsRegisterClicked(false);
                    sessionStorage.setItem("isLoggedIn", true);
                    setIsUserLoggedIn(true);

                }
                else{
                    setIsUserLoggedIn(false);
                    sessionStorage.setItem("isLoggedIn", false);

                }
        })
        
    }

    const handleOnLogin = async (event) => {
        event.preventDefault();

        const payload = {
            "login": login,
            "password": password
        }

        await fetch(LOGIN_URL, {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                .then(response => response.json())
                .then(data => {
                        const { success } = data;
                        if(success){

                            setLogin('');
                            setPassword('');
                            setIsRegisterClicked(false);
                            setIsError(false);
                            setIsUserLoggedIn(true);
                            sessionStorage.setItem("isLoggedIn", true);


                        }
                        else{
                            setIsError(true);
                            setIsUserLoggedIn(false);
                            sessionStorage.setItem("isLoggedIn", false);

                        }
                })
    }

    return(
        <div className={css.container}>
            <div className={css.title}>
                {isRegisterClicked ? "Zarejestruj się" : "Zaloguj się"}
            </div>
            <form onSubmit={isRegisterClicked ? handleOnRegister: handleOnLogin} className={css.form}>
                <div className={css.login}>
                    <label>Login</label>
                    <input type="text" value={login}  onChange={(event) => handleOnChange(event, setLogin)} className={css.input} />
                </div>
                <div className={css.password}>
                    <label>Password</label>
                    <input type="password" value={password}  onChange={(event) => handleOnChange(event, setPassword)} className={css.input} />
                </div>
                {isError && <div className={css.loginError}>Niepoprawny login lub hasło</div>}
                <div className={css.info}>
                {!isRegisterClicked &&
                <>
                    <div >
                        Nie masz jeszcze konta?
                    </div>
                    <div className={css.registerInfo} onClick={onRegisterClick}>
                        Zarejestruj się!
                    </div>
                </>
                    }
                </div>

                <button type="submit" className={css.submitButton}> <img src={SaveIcon} alt="saveIcon" className={css.saveIcon}/> </button>
             </form>

           
            </div>

    )};

export default LoginDialog;