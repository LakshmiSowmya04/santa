import react from 'react';
import './login.css';

function Login(){
    return(
        <>
            <div className='login'>
                <input type="text" placeholder='user-name' />
                <input type="text" placeholder='password' />
                <button>login</button>
            </div>
        </>
    );
}

export default Login ;