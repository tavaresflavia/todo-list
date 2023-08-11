import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../../components/ItemList/ItemList";

const PriorityPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [days, setDays] = useState([]);
    const SERVER_URL = "http://localhost:5050";

    // Define next 5 days
    const datesArray = [];
    for (let i = 0; i < 5; i++) {
    const date = new Date(); 
    const nextDate = new Date(date.setDate(date.getDate() + i)); // add 'i' days to current date
    let month = nextDate.getUTCMonth() + 1; //months from 1-12
    let day = nextDate.getUTCDate();
    let year = nextDate.getUTCFullYear();

    if (month < 10) {month = `0${month}`;}
    if (day < 10) {day = `0${day}`;}

    console.log(days);

    datesArray.push(`${year}-${month}-${day}`);
    }   
  
    useEffect(() => {
      axios
        .get(SERVER_URL + "/item")
        .then((response) => {
          const listData = response.data;
          const daysArr = [];
          datesArray.forEach((day)=> {
            const dayData = listData.filter((info)=> {
                return info.dueDate === day;
            })
            daysArr.push(dayData);
          })
          setDays(daysArr);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setHasError(true);
        });
    }, []);
  
    if (isLoading) {
      return <p> Loading...</p>;
    }
  
    if (hasError) {
      return (
        <p>
          Oops! We're experiencing some technical difficulties and unable to
          retrieve the data at the moment.
        </p>
      );
    }

  
    return (
      <div>
        {
            days.map((day, i)=> {
                return (<ItemList tasks={day} listTitle={datesArray[i]}/>)
            })
        }
      </div>
    );
  };

export default PriorityPage;