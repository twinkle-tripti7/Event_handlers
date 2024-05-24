import React, { useState } from 'react';
import './index.css';


const Events = () => {
    const [bg, setBg] = useState();
    const [name, setName] = useState("CLICK ME");

    // On first click on "CLICK ME" it will change
    const Click1 = () => {
        let newBg = "pink";
        setBg(newBg);

        let newName = "OUCH!! YOU CLICKED ME";
        setName(newName);
    }

    //On second click , these properties will change
    const Click2 = () => {
        let newBg = "yellow";
        setBg(newBg);
        setName("YOU CLICKED ME TWICE!!");
    }
    return (
        <>
            {/* Here on clicking the button you will see the changes */}
            <div style={{ backgroundColor: bg }}>
                <button onClick={Click1} onDoubleClick={Click2}> {name}</button>
            </div>
            
            {/* Here just by moving the cursor over the button changes will be observed */}
            <div style={{ backgroundColor: bg }}>
                <button onMouseEnter={Click1} onMouseLeave={Click2}> {name}</button>
            </div>
        </>
    )

}

export default Events;







