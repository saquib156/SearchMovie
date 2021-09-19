import React, {useState, useEffect} from "react";
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    useEffect(() => {
        if(count===0){
            setColor('grey');
        } else if(count < 0){
            setColor('red');
        } else {
            setColor('green');
        }
    }, [count]);

    return (
        <>
            <div className="counter-box">
                <h1 className="head">Counter Using Hooks</h1>
                <h2 className={color} >{count}</h2>
                <div className="btn-box">
                    <button className="btn" onClick={() => setCount(count-1) }>Decrease</button>
                    <button className="btn" onClick={() => setCount(0) }>Reset</button>
                    <button className="btn" onClick={() => setCount(count+1) }>Increase</button>
                </div>
            </div>
        </>
    )

}

export default Counter;