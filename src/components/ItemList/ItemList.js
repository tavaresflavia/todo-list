import "./ItemList.scss";
import { useState } from "react";
import Item from "../Item/Item";

const ItemList = ({listTitle,tasks}) => {

  const hasFun = () => {
   const funTask = tasks.find( el => el.isFun === true);
   console.log("funtask",funTask,tasks);
   if (tasks.length===0 || funTask ){
    return true

   } else {
    return false
   }
  }
 
  return (
    <div className="list">
      <h3 className="list__title"> {listTitle} </h3>

      <p className = "list__completed"> {tasks.length===0 && "Completed!"} </p>
      <p className = "list__fun-stat"> {hasFun() ? "":"Not your average calendar – sprinkle in some fun tasks!"} </p>

      {tasks.map((item) => (
        <Item  id = {item.id} title={item.title} dueDate={item.dueDate} priority= {item.priority} isFun= {item.isFun} />
      ))}
    </div>
  );
};

export default ItemList;
