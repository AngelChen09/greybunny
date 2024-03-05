export default function App() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <button onClick={() => navigate("./components/AboutMe")}> About Me </button>
        </div>
    );
}