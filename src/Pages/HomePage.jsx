import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import './HomePage.css';
import UserProfile from "../Components/UserProfile";
import { useNavigate } from "react-router-dom";
import ProfileComp from "../Components/ProfileComp";
import DialogComp from "../Components/DialogComp";
import Menubar from "../Components/Menubar";
import Chatbox from "../Components/Chatbox";

export default function HomePage({ usersData, setUserData, ...rest }) {
    const userData = rest.userData ? rest.userData : JSON.parse(localStorage.getItem("userData"));
    const [ selectedMenu, setSelectedMenu ] = useState("Profile");
    const [ profileOpen, setProfileOpen ] = useState(false);
    const navigate = useNavigate();
    const otherUsers = usersData.filter(x=>[(userData.id+1)%usersData.length,(userData.id+2)%usersData.length].includes(x.id)||[(userData.id+1)%usersData.length,(userData.id+2)%usersData.length].includes(x.id%usersData.length));

    //function returns profile view if selected menu is profile and coming soon screen for others
    const getHomeContents = (menu) => {
        return menu==="Profile" ? <ProfileComp userData={userData} /> : 
        <Stack direction={"row"} alignItems="center" justifyContent={"center"} flex={1} sx={{fontSize:"5rem",fontWeight:"900",color:"#EEEEEE"}}>
            Coming Soon
        </Stack>;
    }

    //to signout and go to landing page
    const onSignOut = (nav=true) => {
        setProfileOpen(false);
        nav && navigate("/");
        nav && localStorage.removeItem("userData");
        !nav && setSelectedMenu("Profile");
    }

    return (
        <Stack direction={"row"} sx={{height:"100vh"}}>
            <Menubar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <Stack flex={1} divider={<Divider sx={{border:"1px solid lightgrey"}} orientation="horizontal" flexItem />} sx={{margin:"0 30px"}}>
                <Stack direction={"row"} sx={{alignItems:"center",justifyContent:"space-between",backgroundColor:"white",width:"100%",height:"80px"}}>
                    <Typography sx={{fontSize:"1.25rem",fontWeight:"600",color:"#545454"}} variant='caption'>{selectedMenu}</Typography>
                    <UserProfile name={userData.name} image={userData.profilepicture} onClick={()=>setProfileOpen(true)} />
                </Stack>
                {/* function below return component based on selected menu */}
                {getHomeContents(selectedMenu)}
            </Stack>
            {/* chatbox component */}
            <Chatbox userData={userData} usersData={usersData} />
            {/* profile dialog box */}
            <DialogComp userData={userData} otherUsers={otherUsers} setUserData={setUserData} onSignOut={onSignOut} profileOpen={profileOpen} onClose={()=>setProfileOpen(false)} />
        </Stack>
    )
}