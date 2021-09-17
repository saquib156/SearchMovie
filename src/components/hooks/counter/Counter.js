import React, {useState, useEffect} from "react";
import './Counter.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count===0){
            document.getElementById("countVal").style.color = '#666666';
        } else if(count < 0){
            document.getElementById("countVal").style.color = 'red';
        } else if(count > 0){
            document.getElementById("countVal").style.color = 'green';
        }
    }, [count]);

    return (
        <>
            <div class="counter-box">
                <h1 class="head">Counter Using Hooks</h1>
                <h2 class="head" id="countVal">{count}</h2>
                <div class="btn-box">
                    <button class="btn" onClick={() => setCount(count-1) }>Decrease</button>
                    <button class="btn" onClick={() => setCount(0) }>Reset</button>
                    <button class="btn" onClick={() => setCount(count+1) }>Increase</button>
                </div>
            </div>
        </>
    )

}

export default Counter;