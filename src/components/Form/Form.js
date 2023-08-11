import { useState } from "react";
import "./Form.scss";
import { Link } from "react-router-dom";

const Form = () => {
  const todayDate = new Date();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(todayDate);
  const [priority,setPriority] = useState("2")
  const [isFun, setIsFun] = useState(false);
  const priorityArr = ["low","medium","high"]



  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDueDate = (e) => {
    setDueDate(e.target.value);
  }

  const handleChangeFun = () => {
    const newValue = !isFun;
    setIsFun(newValue);
  };

  const handleChangePriority =(e)=> {
    setPriority(e.target.value);
  }

  console.log(todayDate);
  return (
    <div className="form">
      <input
        className="form__title"
        value={title}
        type="text"
        onChange={handleChangeTitle}
      />
      <input className="form__due-date" type="date" value={dueDate} 
      onChange = {handleChangeDueDate}/>
      <p className="form__smile" onClick={handleChangeFun}>
        {" "}
        {isFun ? "🙂" : "😐"}
      </p>
      <input className= "form__range"  value = {priority}  min = "1" max ="3" type= "range" 
      onChange= {handleChangePriority}/>
      <span className = {"form__priority form__priority--" + (priorityArr[priority-1]) }>{priorityArr[priority-1]} </span>

      <Link className="form__btn"> </Link>
    </div>
  );
};

export default Form;
