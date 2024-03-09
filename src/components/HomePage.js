import React from 'react';
import fatbunny from './fatbunny.jpeg';

console.log(fatbunny);

const HomePage = () => {
    
    return (
        <div>
            <center>
                <header>
                    <h1> Meet the bunny</h1>
                </header>
                <main>
                    <img src={fatbunny} alt="fatbunny<3" /> 
                    <p>I love fat bunnies &lt;3</p>   
                </main>
            </center>
        </div>
    );
}

export default HomePage;