import React from 'react';
import styles from './NotFound.module.css';
import { Helmet } from 'react-helmet';
const NotFound = () => {
    return (
        <div className="application">
            <Helmet>
                <title>NotFound</title>
            </Helmet>
            <h2> NotFound </h2>
        </div>
    );
}

export default NotFound;
