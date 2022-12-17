import React from 'react';
import Carmarks from './carmarks';
import Caroussel from './caroussel';

function Homepage(){
    return (
        <div>
            <Caroussel/>
            <Carmarks/>
        </div>
    );
}

export default Homepage;
