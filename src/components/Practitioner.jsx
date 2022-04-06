 import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Moralis } from "moralis";


export default function HealingNetwork() {
     let {username} = useParams();
    
    const [user, setUser] = useState();
    const [loaded, setLoaded] = useState(false);


useEffect(() =>{
     const queryParams = {'username': username}
    const fetchData = async () => {
        const results = await Moralis.Cloud.run("getPractitioner", queryParams);
        console.log(results);
         console.log(queryParams)
        setUser(results);
        setLoaded(true);
      };
  
      fetchData();

}, [username]);

return(
    <h1> {loaded ? user.attributes.username: "NOT LOADED"}</h1>
)

}