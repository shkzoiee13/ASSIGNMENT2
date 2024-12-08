import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
 
function KeyPadComponent() {
    const [text1, setText] = useState(""); // Manages the calculator display
    const [showImage, setShowImage] = useState(false); // Manages image visibility
 
    const ClickHandle = (e) => {
        const value = e.target.value;
        if (value === "C") {
            setText(""); // Clear display
        } else if (value === "=") {
            try {
                // eslint-disable-next-line no-eval
                setText(eval(text1)); // Evaluate the expression
            } catch {
                setText("Error");
            }
        } else {
            setText(text1 + value); // Append button value
        }
    };
 
    const handleShowMe = () => {
        setShowImage(true); // Show the image when "Show Me" is clicked
    };
 
    const handleSquare = () => {
        const number = parseFloat(text1); // Parse the number from the display
        if (!isNaN(number)) {
            setText((number * number).toString()); // Display the square
        } else {
            setText("Error"); // Show an error if input is invalid
        }
    };
 
    return (
<div className="Calculator">
<div className="screen-row">
<input type="text" readOnly value={text1} />
</div>
 
            {/* Regular Calculator Buttons */}
<div className="button-row">
<Button label="(" ClickHandle={ClickHandle} />
<Button label="CE" ClickHandle={ClickHandle} />
<Button label=")" ClickHandle={ClickHandle} />
<Button label="C" ClickHandle={ClickHandle} />
</div>
<div className="button-row">
<Button label="1" ClickHandle={ClickHandle} />
<Button label="2" ClickHandle={ClickHandle} />
<Button label="3" ClickHandle={ClickHandle} />
<Button label="+" ClickHandle={ClickHandle} />
</div>
<div className="button-row">
<Button label="4" ClickHandle={ClickHandle} />
<Button label="5" ClickHandle={ClickHandle} />
<Button label="6" ClickHandle={ClickHandle} />
<Button label="-" ClickHandle={ClickHandle} />
</div>
<div className="button-row">
<Button label="7" ClickHandle={ClickHandle} />
<Button label="8" ClickHandle={ClickHandle} />
<Button label="9" ClickHandle={ClickHandle} />
<Button label="*" ClickHandle={ClickHandle} />
</div>
<div className="button-row">
<Button label="." ClickHandle={ClickHandle} />
<Button label="0" ClickHandle={ClickHandle} />
<Button label="=" ClickHandle={ClickHandle} />
<Button label="/" ClickHandle={ClickHandle} />
</div>
 
            {/* Special Buttons */}
<div className="special-buttons-row">
<button className="special-button" onClick={handleShowMe}>
                    Show Me
</button>
<button className="special-button" onClick={handleSquare}>
                    Square
</button>
</div>
 
            {/* Display Image */}
            {showImage && (
<div className="image-container">
<img
                        src="https://i.imgur.com/ymFiYGP.jpeg"
                        alt="Your Picture"
                        className="profile-picture"
                    />
</div>
            )}
</div>
    );
}
 
export default KeyPadComponent;