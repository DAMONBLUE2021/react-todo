import React, {useState} from 'react';

function ColorPicker(){
    const[color, setColor] = useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <>
            <div className = "color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected Color:{color}</p>

                </div>
                <label>Select a Color:</label>
                <input type='color' value={color} onChange={handleColorChange} />

            </div>
        </>
    );
};
export default ColorPicker;

/*
.body{
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.color-picker-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    margin: 50px;
    font-size: 3rem;
}

.color-display{
    width:300px;
    height:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid hsl(0, 0%, 80%);
    border-radius: 5px;
    margin-bottom: 25px;
    transition: 0.25s ease;
}

.color-display p{
    color: hsl(0, 0%, 20%);
    font-size: 2rem;
    text-align: center;

}

label{
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

input[type="color"]{
    width: 75px;
    height: 50px;
    padding: 5px;
    border-radius: 50px;
    border:5px solid hsl(0, 0%, 80%);
}
*/