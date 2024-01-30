import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <p>This is {user && <span>{user.username}</span>}</p>
        </div>
    );
};

export default Home;