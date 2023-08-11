import "./ItemList.scss";
import { useState } from "react";
import Item from "../Item/Item";

const ItemList = ({listTitle,tasks}) => {
  return (
    <div className="list">
      <h3 className="list__title"> {listTitle} </h3>

      {tasks.map((item) => (
        <Item title={item.title} dueDate={item.dueDate} priority= {item.priority} />
      ))}
    </div>
  );
};

export default ItemList;
