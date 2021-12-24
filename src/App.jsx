import { useState } from 'react';
import './App.css';


function App() {

    const [count, setCount] = useState(0);

    const changeCount = (value) => {
        setCount((prev) => {
            if (value === 2 || value === 0.5) {
                return (prev * value);
            } else if (value === "square") {
                return (prev * prev)
            } else if (value === 0) {
                return 0;
            } else {
                return (prev + value);
            }
        });
    }


    return (
        <div className="container">

            <div className='box'><h1>Counter: {count}</h1></div>
            <div className='boxCenter'>
                <button onClick={() => changeCount(1)} className='button-5'>Add</button>
                <button onClick={() => changeCount(-1)} className='button-5'>Subtract</button>
                <button onClick={() => changeCount(0)} className='button-5'>Reset</button>
                <button onClick={() => changeCount(2)} className='button-5'>Double</button>
                <button onClick={() => changeCount(0.5)} className='button-5'>Half</button>
                <button onClick={() => changeCount("square")} className='button-5'>Square</button>
            </div>

        </div>
    );
}

export default App;