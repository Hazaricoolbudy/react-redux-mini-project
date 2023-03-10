import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store';

const UsersList = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(fetchUser())
  },[dispatch])
  return (
    <div>UsersList</div>
  )
}

export default UsersList