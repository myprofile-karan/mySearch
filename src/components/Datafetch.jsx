import React, { useEffect, useState } from "react";

const Datafetch = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState([]);

  console.log(text);
  useEffect(() => {
    const fetching = async () => {
      let data = await fetch("https://dummyjson.com/users");
      data = await data.json();
      let result = data.users;
      setUser(result);
      console.log(result);
    };
    fetching();
  }, []);
  return (
    
    <div>
      <input
        type="text"
        placeholder="search..."
        style={{ border: "1px solid gray",margin:'50px 570px'}}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="container">
        <div className="row gy-3">
      {user
        .filter((user) => user.firstName.toLowerCase().includes(text))
        .map((item) => {
          return (
            <>
                <div className="col-3">
                <div className="card px-3">
                    <img src={item.image} width="100%" height="200px" alt="" />
                    <h6>Name: {item.firstName} {item.lastName}</h6>
                    <span>Age: {item.age}</span>
                    <span>Gender: {item.gender}</span>
                </div>
                </div>
            </>
          );
        })
        }
        </div>
        </div>
    </div>
  );
};

export default Datafetch;
