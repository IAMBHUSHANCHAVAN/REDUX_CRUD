import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData,deleteUser } from "../feature/UserSlice";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Read = () => {
  const [id, setId] = useState();
  const [popup, setPopup] = useState(false);

  const data = useSelector((state) => {
    return state.app;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (data.loading) {
    return <h1 className="text-center">loading...</h1>;
  }

  return (
    <>
      <h1>get all data</h1>
      {data.users &&
     data.users.filter((ele) => {
      // if (data.searchData === 0) {
      //   return ele;
      // } else {
      //   // console.log(ele);
      //   return ele.name.toLowerCase().includes(data.searchData.toLowerCase());
      // }
      // below taken from chatgpt
      if (data.searchData === 0) {
        return true;
      } else if(data.searchData.length>0) {
        return typeof ele.name === 'string' && ele.name.toLowerCase().includes(data.searchData.toLowerCase());
      }else{
        return <h1>data not found</h1>
      }
      }).map((curr) => (
          <div key={curr.id} className="container">
            <div className="card mt-2">
              <div className="card-body text-center">
                <h5 className="card-title">{curr.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{curr.email}</h6>
                <div className="d-flex justify-content-between">                
                <button className="btn btn-primary " onClick={()=>dispatch(deleteUser(curr.id))}>delete</button>
                <button className="btn btn-primary"><Link className="text-white text-decoration-none" to={`/edit/${curr.id}`}>Update</Link></button>
                <button
                  type="button"
                  className="btn btn-primary "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={()=>setId(curr.id)}
                >View</button>
                <Modal id={id} popup={popup} setPopup={setPopup}/>
              </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Read;
