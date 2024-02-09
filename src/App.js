import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage.jsx";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  const [userData,setUserData] = useState();
  const [usersData,setUsersData] = useState([]);

  //to fetch the users data
  const getUsersData = () => {
      fetch("https://panorbit.in/api/users.json").then((response) => response.json()).then((data) => 
      setUsersData(data.users)
      );
  }

  //to get users data on render
  useEffect(()=>{
      getUsersData();
  },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage usersData={usersData} setUsersData={setUsersData} setUserData={setUserData} />} />
      <Route path="/home" element={<HomePage usersData={usersData} userData={userData} setUserData={setUserData} />} />
    </Routes>
    </>
  );
}

