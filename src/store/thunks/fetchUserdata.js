import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser=createAsyncThunk('user/fetch', async()=>{
const response =await axios.get('http://localhost:3005/user')
return response.data;
})
export {fetchUser}