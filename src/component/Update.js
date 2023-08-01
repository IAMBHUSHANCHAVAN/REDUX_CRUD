import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../feature/UserSlice'

const Update = () => {
    const [update , setUpdate] = useState()
    const {id}= useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((state)=> state.app.users)
    const load = useSelector((d)=>d.app.loading)
useEffect(()=>{
    if(id){
        const singleuser = data.filter((ele)=>ele.id===id)
        console.log("single user" , singleuser);
        setUpdate(singleuser[0])
    }
},[])
const newData = (e)=>{
    setUpdate({...update , 
        [e.target.name]:e.target.value
    })
}

const handleUpdate = (e)=>{
e.preventDefault()
dispatch(updateUser(update))
navigate("/read")
}
console.log(update);
  return (
    <div>
      <div className="container">
      <h2>edit data here</h2>
      <form 
      onSubmit={handleUpdate}
      >
        <div className="mb-3">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={update && update.name}
            onChange={newData}
            id="inputName"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            value={update && update.email}
            onChange={newData}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="inputAge" className="form-label">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="form-control"
            id="inputAge"
            value={update && update.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="data">Gender</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              onChange={newData}
              value="FEMALE"
              id="flexRadioDefault2"
              checked={update && update.gender === "FEMALE"}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              FEMALE
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              onChange={newData}
              value="MALE"
              id="flexRadioDefault1"
              checked={update && update.gender === "MALE"}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              MALE
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
          </div>
    </div>
  )
}

export default Update
