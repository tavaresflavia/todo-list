import './Item.scss'
import { useState } from "react";

const Item = (item,dueDate) => {

    const [priority,setPriority] = useState("mid")

    return (
        <div className = {"item " + (priority==="low" && "item--low") + (priority==="high" && "item--high")} >
            <h3 className = "item__title "> {item}</h3>
            <p className = "item__due-date"> {dueDate} </p>
            
        </div>
    );
};

export default Item;