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
        setUser(results);
        setLoaded(true);
      };
  
      fetchData();
      

}, [username]);




return(
    <h1> {loaded && user ? 
        <div>
            
            <h1>{user.username}</h1>
            <img src={user.avatarFile._url}></img>
            <p>{user.about}</p>
            <a src={user.websiteURL}>{user.websiteURL}</a>
            <p>{user.services?.length}</p>
            <p>{user.email}</p>

        </div>
        : "NOT LOADED"}</h1>
)

}