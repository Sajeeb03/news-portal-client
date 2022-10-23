import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Here comes terms and conditions</h1>
            <button><Link to="/register">Back to Register</Link></button>
        </div>
    );
};

export default Terms;