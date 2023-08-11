import './Item.scss'
import checkIcon from '../../assets/icons/check.png'

const Item = ({title,dueDate,priority,isEmpty }) => {


    return (
        <div className = {"item item--" + priority} >
            <h3 className = "item__title "> {title}</h3>

            <div className = "item__bottom">
            
                

            <p className = "item__due-date"> {dueDate} </p>
            <img   className = "item__check" src={checkIcon}/>
            {/* onClick= {handleCheck} */}
            </div>
            
            
        </div>
    );
};

export default Item;