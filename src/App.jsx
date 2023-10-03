import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import axios from "axios";
import UsersProvider from "./context/UsersProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/users",
});

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axiosInstance.get();
      const data = await res.data;
      setUsersData(data);
    };
    getUsers();
  }, [usersData]);
  // console.log(usersData);
  return (
    <>
      <UsersProvider>
        <Provider store={store}>
          <UserList usersData={usersData} />
        </Provider>
      </UsersProvider>
    </>
  );
}

export default App;
