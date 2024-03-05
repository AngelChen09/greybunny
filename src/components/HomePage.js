import React from "react";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <h1>My Grey Bunny</h1>
            </header>
            <main>
                <p>Welcome to my simple React homepage! This is a basic example of a React project.</p>
                <img src="https://via.placeholder.com/300" alt="placehold" />
                <button onClick={() => navigate("")}> About Me </button>
            </main>
        </div>
    );
}

export default HomePage;