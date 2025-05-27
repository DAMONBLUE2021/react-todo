import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment =() =>{
        setCount(count+1);
    }

    const decrement =() =>{
        setCount(count-1);
    }

    const reset =() =>{
        setCount(0);
    }

    return(
        <div className = "counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>


        </div>
    );
}
export default Counter;

/*
.counter-container{
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.count-display{
    font-size: 10em;
    margin-top: 0;
    margin-bottom: 50px;
}

.counter-button{
    width:150px;
    height: 50px;
    font-size: 1.5em;
    font-weight: bold;
    margin:0px 5px;
    background-color: rgb(29, 151, 179);
    border:none;
    border-radius: 5px;
    cursor: pointer;

}

.counter-button:hover{
    background-color: rgb(21, 157, 112);
}
*/