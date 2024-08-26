import { useState } from "react";


const User = ({name}) => {
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);

    return (
        <div className="user-card"> 
            <h3>Name: {name}</h3>
            <h4>Location: Palani</h4>
            <h4>Contact: @sankaraxi</h4>
            <h4>Count : {count} (function)</h4>
            <h4>Count2 : {count2} (function)</h4>
            <button onClick={() => {
                setCount(count + 1)
                setCount2(count2 + 2)
            }}>Increment</button>
        </div>
    );
}

export default User;