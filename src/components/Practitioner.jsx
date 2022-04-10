import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import { useMoralis } from "react-moralis";

export default function HealingNetwork() {
  let { username } = useParams();

  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const { isInitialized } = useMoralis();

  const renderServices = () => {
    if (user.services) {
      console.log(user.services);
      return user.services.map((s) => {
        return (
          <div key={s.id}>
            {s.name}:{s.description}
            <br></br>
            Price:{s.price}
          </div>
        );
      });
    } else {
      return <h1>No services</h1>;
    }
  };

  useEffect(() => {
    if (isInitialized) {
      const queryParams = { username: username };
      const fetchData = async () => {
        const results = await Moralis.Cloud.run("getPractitioner", queryParams);
        setUser(results);
        setLoaded(true);
      };

      fetchData();
    }
  }, [username, isInitialized]);

  return (
    <h1>
      {" "}
      {loaded && user ? (
        <div>
          <h1>{user.username}</h1>
          <img src={user.avatarFile._url}></img>
          <p>{user.about}</p>
          <a target="_blank" rel="noreferrer noopener" href={user.websiteURL}>
            {user.websiteURL}
          </a>
          <p>{user.services?.length}</p>
          <p>{user.email}</p>
          {renderServices()}
        </div>
      ) : (
        "NOT LOADED"
      )}
    </h1>
  );
}
