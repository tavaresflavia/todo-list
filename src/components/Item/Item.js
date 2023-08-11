import './Item.scss'

const Item = ({title,dueDate,priority}) => {


    return (
        <div className = {"item " + (priority==="low" && "item--low") + (priority==="high" && "item--high")} >
            <h3 className = "item__title "> {title}</h3>

            <p className = "item__due-date"> {dueDate} </p>
            
        </div>
    );
};

export default Item;