import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersProvider";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../redux/usersDelete";

const UserList = ({ usersData }) => {
  // const {deleteUsers}=useContext(UsersContext)
  const [ids, setIds] = useState([]);
  const dispatch = useDispatch();
  const handleCheck = (id) => {
    setIds([...ids, id]);
  };
  const handleDelete = () => {
    // deleteUsers(ids)
    // setIds([])
    dispatch(deleteUsers(ids));
  };
  return (
    <>
      {usersData.map((item) => {
        return (
          <button onClick={() => handleCheck(item.id)}>{item.username}</button>
        );
      })}
      <br />
      <button onClick={() => handleDelete(ids)}>Delete</button>
    </>
  );
};

export default UserList;
