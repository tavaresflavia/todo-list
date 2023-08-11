import { useState } from "react";
import "./Form.scss";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import submitIcon from '../../assests/icons/submit.png'

const Form = () => {

  const navigate = useNavigate();
  

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority,setPriority] = useState("2")
  const [isFun, setIsFun] = useState(false);
  const priorityArr = ["Low","Medium","High"]

 

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
  
  

  const handleSubmission = () => {
    axios.post("http://localhost:5050" + "/item", {
    title: title,
    priority: priority,
    dueDate:dueDate,
    isFun: isFun
    }

    )
    .then((res) => {
    navigate('/');})
  }


  return (
    <div className="form">
      <div className="form__row"><input
        className="form__title"
        value={title}
        type="text"
        onChange={handleChangeTitle}
      />
      <p className="form__smile" onClick={handleChangeFun}>
        {" "}
        {isFun ? "🙂" : "😐"}
      </p></div>
      <div className="form__row">
      <input   className="form__due-date" type="date" value={dueDate} 
      onChange = {handleChangeDueDate}/>
      
      <input className= "form__range"  value = {priority}  min = "1" max ="3" type= "range" 
      onChange= {handleChangePriority}/>
      <span className = {"form__priority form__priority--" + (priorityArr[priority-1]) }>{priorityArr[priority-1]} </span>
      </div>

      <div className = "form__btns">
      <Link className="form__cancel" to = '/'> Cancel </Link>

      <img src={submitIcon}className="form__submit" onClick= 
      {handleSubmission} ></img></div>
    </div>
  );
};

export default Form;
