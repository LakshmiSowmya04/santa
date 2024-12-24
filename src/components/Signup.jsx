import react from 'react';
import './Signup.css';

function Signup(){
    return(
        <>
            <div className='signup'>
                <input type="text" placeholder='user-name' />
                <input type="text" placeholder='password' />
                <button>Signup</button>
            </div>
        </>
    );
}

export default Signup ;