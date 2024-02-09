import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import LandingBackground from "../Components/LandingBackground";
import UserProfile from "../Components/UserProfile";

export default function LandingPage({setUserData,usersData}) {

    const navigate = useNavigate();

    //sets user data and goes to home page on account name click
    const setUser = (data) => {
        setUserData(data);
        localStorage.setItem("userData",JSON.stringify(data));
        navigate("/home")
    }
  
    return (
    <Stack className='landingPage' sx={{alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh"}}>
            <LandingBackground/>
            <Stack sx={{width:"clamp(300px,600px,40%)",height:"50%",position:"relative",marginBottom:"150px"}}>
                <Stack sx={{borderRadius:"25px 25px 0px 0px",backgroundColor:"#F6F6F6",minHeight:"100px",alignItems:"center",justifyContent:"center"}}>
                <Typography sx={{fontSize:"1.25rem",fontWeight:"600",color:"#545454"}} variant='caption'>Select an account</Typography>
                </Stack>
                <Stack divider={<Divider orientation="horizontal" flexItem />} sx={{boxShadow:"0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",borderBottom:"25px solid white",borderRadius:"0px 0px 25px 25px",backgroundColor:"white",minHeight:"400px",overflow:"hidden auto",padding:"0px 35px"}}>
                {
                    usersData.length && usersData.map((user,idx) => 
                    <UserProfile key={user.username} name={user.name} image={user.profilepicture} onClick={()=>setUser(user)} />
                    )
                }
                </Stack>
        </Stack>
    </Stack>
)}