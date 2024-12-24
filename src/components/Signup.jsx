import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setError('Both fields are required.');
            return;
        }
        setError('');
        console.log('Signup:', formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
                {error && <p className="message">{error}</p>}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;