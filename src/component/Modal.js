import React from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ id, popup, setPopup }) => {
//   console.log("Single id", id);
  const alluser = useSelector((state) => state.app.users);
//   console.log("alluser", alluser);
  const singleUser = alluser.filter((ele) => ele.id === id);
//   console.log("single user", singleUser);

  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Display the information for the specific user */}
              {singleUser.map((user) => (
                <div key={user.id}>
                  <h5>{user.name}</h5>
                  <p>{user.email}</p>
                  <p>{user.gender}</p>
                  <p>{user.age}</p>
                  {/* Add other user information as needed */}
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setPopup(false)}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
