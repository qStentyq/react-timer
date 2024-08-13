import "./components/Timer/Timer/Timer.css";
import Timer from "./components/Timer/Timer/Timer";

function App() {
    return (
        <div className='app'>
            <div className='container'>
                <h1 className='header'>Timer</h1>
                <Timer />
            </div>
        </div>
    );
}

export default App;
