import { useState } from "react";
import "./Form.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import submitIcon from '../../assets/icons/submit.png'

const Form = () => {

  const navigate = useNavigate();


  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("2")
  const [isFun, setIsFun] = useState(false);
  const priorityArr = ["Low", "Medium", "High"]



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

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  }



  const handleSubmission = () => {
    axios.post("http://localhost:5050" + "/item", {
<<<<<<< HEAD
      title: title,
      priority: priorityArr[priority - 1],
      dueDate: dueDate,
      isFun: isFun
=======
    title: title,
    priority: priorityArr[priority-1],
    dueDate:dueDate,
    isFun: isFun
>>>>>>> bc1f9e91883b167755499172b647bc4f516091ef
    }

    )
      .then((res) => {
        navigate('/');
      })
  }


  return (
    <div className="form">
      <div className="form__row">
        <div className="form__title-box">
          <label htmlFor="title" class="form__label">
            Task :
          </label>
          <input
            name="title"
            className="form__title"
            value={title}
            type="text"
            onChange={handleChangeTitle}
          />
        </div>
        <p className="form__smile" onClick={handleChangeFun}>
          {isFun ? "🙂" : "😐"}
        </p></div>
      <div className="form__row2">
        <div className="form__date-box">
          <label htmlFor="date" className="">Date :</label>
          <input name="date" className="form__due-date" type="date" value={dueDate}
            onChange={handleChangeDueDate} />
        </div>
        <div className="form__priority-div">
          <label htmlFor="priority" className="form__priority-label">Priority :</label>
          <div class="form__priority-select">
            <input name="priority" className="form__range" value={priority} min="1" max="3" type="range"
              onChange={handleChangePriority} />
            <span className={"form__priority form__priority--" + (priorityArr[priority - 1])}>{priorityArr[priority - 1]} </span>
          </div>
        </div>
      </div>

      <div className="form__btns">
        <Link className="form__cancel" to='/'> Cancel </Link>

        <img src={submitIcon} className="form__submit" onClick=
          {handleSubmission} ></img>
      </div>
    </div>
  );
};

export default Form;
