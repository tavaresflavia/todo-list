import './Item.scss'
import axios from 'axios';
import checkIcon from '../../assets/icons/check.png'
import { useState } from 'react'
const SERVER_URL = "http://localhost:5050";



const Item = ({title,dueDate,priority,id, isFun }) => {

const [hidden,setHidden] = useState(false)

    const handleCheck = () => {
        axios.delete(`${SERVER_URL}/item/${id}`)
        .then(() => setHidden(true)
        )
        .catch(err => console.log(err))

    }


    return (
        <div className = {"item item--" + priority + (hidden ? " item--hidden" : "" )} >
            <h3 className = "item__title "> {title} 
            <span className="item__smile" >
        {isFun ? "🙂" : ""}
      </span></h3>

            <div className = "item__bottom">
                

            <p className = "item__due-date"> {dueDate} </p>
            <img onClick= {handleCheck}  className = "item__check" src={checkIcon} alt="item check"/>
            
            </div>
            
            
        </div>
    );
};

export default Item;