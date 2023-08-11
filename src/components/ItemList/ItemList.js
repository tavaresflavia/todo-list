import './ItemList.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import Item from '../Item/Item';


const ItemList = () => {

const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

    const SERVER_URL = ""
    useEffect(()=>{
        axios
            .get(SERVER_URL + "/items")
            .then((response)=> {
                const itemList = response.data;
      
              })
              .catch( (err) => {
                console.log(err);
                setHasError(true);
              })
        },[selectedVideo.id])

        if (isLoading) {
            return <p> Loading...</p>;
          }
        
          if (hasError) {
            return (
              <p>Oops! We're experiencing some technical difficulties and unable to
                retrieve the data at the moment.</p>
            );
          }



    return (
        <div className='list'>
          <h3 className='list__title'> </h3>

            {itemList.map( (item) =>
                <Item
                title = {item.title}
                dueDate = {item.dueDate}
                 
                /> 
            ) }

            


            
        </div>
    );
};

export default ItemList;