import React, {useState, useEffect} from "react";
import './Counter.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    
    const countVal = document.querySelector("#countVal");

    useEffect(() => {
        if(count===0){
            countVal.style.color = '#666666';
        } else if(count < 0){
            countVal.style.color = 'red';
        } else if(count > 0){
            countVal.style.color = 'green';
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