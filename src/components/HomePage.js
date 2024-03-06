import React from 'react';
import fatbunny from './fatbunny.jpeg';
import navbar from './NavBar/index.js';

console.log(fatbunny);

const HomePage = () => {
    
    return (
        
        <div>
            <center>
                <header> 
                    <h1>My Grey Bunny</h1>
                </header>
                <main>
                    <p>I love fat bunnies &lt;3</p>   
                    <img src={fatbunny} alt="fatbunny<3" />
                </main>
            </center>
        </div>
    );
}

export default HomePage;