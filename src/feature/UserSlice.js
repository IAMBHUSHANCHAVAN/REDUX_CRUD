import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createuser= createAsyncThunk("createUser" ,async(data,{rejectWithValue})=>{
    const response = await fetch("https://64c7a811a1fe0128fbd51911.mockapi.io/crud" , {
        //timestamp 27:00
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    try {
        const result = response.json()
        return result
    } catch (error) {
        rejectWithValue("error has occcured" , error)
    }
})
// updateUser

export const updateUser= createAsyncThunk("updatedData" ,async(data,{rejectWithValue})=>{
    const response = await fetch(`https://64c7a811a1fe0128fbd51911.mockapi.io/crud/${data.id}` , {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    try {
        const result = response.json()
        return result
    } catch (error) {
        rejectWithValue("error has occcured" , error)
    }
})
// deleteUser
export const deleteUser= createAsyncThunk("createUser" ,async(id,{rejectWithValue})=>{
    const response = await fetch(`https://64c7a811a1fe0128fbd51911.mockapi.io/crud/${id}` , {
        method:"DELETE"
    })
    
    try {
        const result = response.json()
        return result
    } catch (error) {
        rejectWithValue("error has occcured" , error)
    }
})

// readAction
export const getUserData = createAsyncThunk("getUserData" , async(asa , {rejectWithValue})=>{
    const response = await fetch("https://64c7a811a1fe0128fbd51911.mockapi.io/crud",
    // header vala get ke liye compulsory nhi hota so skiped
    )
    try {
        const result = await response.json()
        return result
    } catch (error) {
        rejectWithValue(error)
    }
  
})
export const UserData = createSlice({
    name:"UserData",
    initialState:{
        users : [],
        loading : false,
        error : null,
        searchData:[]
    },
    reducers:{
    searchUser:(state,actions)=>{
        state.searchData = actions.payload
    },},
    extraReducers:{
        [createuser.pending]:(state)=>{
            state.loading = true
            // state.error = null
        },[createuser.fulfilled]:(state,actions)=>{
            state.loading = false
            state.users.push(actions.payload);
        },[createuser.rejected]:(state,actions)=>{
            state.loading = false
            state.error = actions.payload
        },
        [getUserData.pending]:(state)=>{
            state.loading = true
            // state.error = null
        },[getUserData.fulfilled]:(state,actions)=>{
            state.loading = false
            state.users = actions.payload
        },[getUserData.rejected]:(state,actions)=>{
            state.loading = false
            state.error = actions.payload
        },
        [deleteUser.pending]:(state)=>{
            state.loading = true
            // state.error = null
        },[deleteUser.fulfilled]:(state,actions)=>{
            state.loading = false
            const {id} = actions.payload;
            console.log(id);
            if(id){
                state.users = state.users.filter((ele)=>ele.id!==id)  // current id ke alava state me he vo sab print karo
            }
        },[deleteUser.rejected]:(state,actions)=>{
            state.loading = false
            state.error = actions.payload
        },
        // in delete we dont need to write this it happens without this
        // [updateUser.pending]:(state)=>{
        //     state.loading = true
        //     // state.error = null
        // },[updateUser.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.users = state.users.map((ele) =>
        //       ele.id === action.payload.id ? action.payload : ele
        //     );
        //   },
        //   [updateUser.rejected]:(state,actions)=>{
        //     state.loading = false
        //     state.error = actions.payload
        // },
    },

})
export default UserData.reducer
export const {searchUser} = UserData.actions