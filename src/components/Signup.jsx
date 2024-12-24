import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setError('Both fields are required.');
            setSuccess('');
            return;
        }
        setError('');
        setSuccess('Signup successful!');
        console.log('Signup data:', formData);
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
    );
}

export default Signup;