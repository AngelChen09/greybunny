import React from 'react';
import fatbunny from '../Media/fatbunny.jpeg';

console.log(fatbunny);

const Home = () => {
    
    return (
        <div>
            <center>
            <br></br>
            <header>
                <h1> Meet the bunny</h1>
            </header>
            <main>
                <img src={fatbunny} alt="fatbunny<3" /> 
                <p>I love fat bunnies &lt;3</p> 
                <br></br>
                <p><b>This website is still under construction. Please enjoy le bunny in the meantime.</b></p>
            </main>
            </center>
        </div>
    );
}

export default Home;