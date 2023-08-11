import { useEffect, useState } from "react";
import axios from "axios";

import ItemList from "../../components/ItemList/ItemList";

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [highPriority, setHighPriority] = useState([]);
  const [midPriority, setMidPriority] = useState([]);
  const [lowPriority, setLowPriority] = useState([]);

  const SERVER_URL = "http://localhost:5050";
  useEffect(() => {
    axios
      .get(SERVER_URL + "/item")
      .then((response) => {
        const listData = response.data;
        setTaskList(listData);
        const newHighPriority = listData.filter(
          (el) => el.priority.toLowerCase() === "high"
        );
        const newMidPriority = listData.filter(
          (el) => el.priority.toLowerCase() === "medium"
        );
        const newLowPriority = listData.filter(
          (el) => el.priority.toLowerCase() === "low"
        );
        setHighPriority(newHighPriority);
        setMidPriority(newMidPriority);
        setLowPriority(newLowPriority);

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
      <ItemList tasks={highPriority} listTitle="High" />
      <ItemList tasks={midPriority} listTitle="Medium" />
      <ItemList tasks={lowPriority} listTitle="Low" />
    </div>
  );
};

export default HomePage;
