import React, { useEffect, useState } from 'react';
import classes from "./loader.scss";

import Lottie from 'react-lottie';
import * as location from './1055-world-locations.json'
import * as sucess from './1127-success.json'
import App from '../../App';

const defaultOptions1 = {
      loop: true,
      autoplay: true, 
      animationData: location.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const defaultOptions2 = {
      loop: true,
      autoplay: true, 
      animationData: sucess.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

const Loader = () => {

    const [data, setDate] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((json) => {
                    setDate(json);
                    setLoading(true);
                
                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
            });
        }, 2000);
    }, []);
    return (
        <>
            {
                !completed ? (
                    <div className={`${classes.loaderWrapper} loaderWrapper`}>
                        {
                            !loading ?
                                <Lottie options={defaultOptions1} height={400}width={400}/>
                            :   <Lottie options={defaultOptions2} height={100}width={100}/>
                        }
                    </div>
                ) : (
                    <App />
                )}
        </>
    );
}

export default Loader;