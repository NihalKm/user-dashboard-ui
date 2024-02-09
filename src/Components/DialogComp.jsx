import { Avatar, Button, Dialog, DialogContent, Divider, Stack, Typography } from "@mui/material";
import UserProfile from "./UserProfile";

export default function DialogComp ({userData,otherUsers,onSignOut,onClose,profileOpen,setUserData}) {
    
    //to update the current user
    const updateUser = (index) => {
        setUserData(otherUsers[index]);
        localStorage.setItem("userData",JSON.stringify(otherUsers[index]));
        onSignOut(false);
    }

    return (
    // sx={{".MuiModal-backdrop":{backgroundColor:"#FAFAFA"}}}
    <Dialog PaperProps={{ sx: {padding:"20px 0",borderRadius:"25px",width:"275px",position: "fixed",top: "7.5%", right:"2.5%",m:0} }} onClose={onClose} open={profileOpen}>
        <DialogContent>
            <Stack sx={{alignItems:"center",justifyContent:"center"}}>
                <Avatar alt={userData.name} src={userData.profilepicture} sx={{width: 75, height: 75 }}/>
                <Typography sx={{fontSize:"1rem",fontWeight:"500",color:"#545454"}} variant='caption'>{userData.name}</Typography>
                <Typography color={"#9A9A9A"} variant='subtitle2' mb={1}>{userData.email}</Typography>
                <Divider sx={{borderWidth:"1px"}} orientation="horizontal" flexItem />
                {
                    otherUsers.length>=2 &&
                    <>
                        <UserProfile name={otherUsers[0].name} image={otherUsers[0].profilepicture} onClick={()=>updateUser(0)} />
                        <Divider sx={{borderWidth:"1px"}} orientation="horizontal" flexItem />
                        <UserProfile name={otherUsers[1].name} image={otherUsers[1].profilepicture} onClick={()=>updateUser(1)} />
                    </>
                }
                <Button variant="contained" size="small" onClick={onSignOut} sx={{"&:hover":{backgroundColor:"#D55151"},backgroundColor:"#D55151",borderRadius:"50px",textTransform:"none",fontWeight:"700",padding:"5px 15px",mt:0.5}}>Sign out</Button>
            </Stack>
        </DialogContent>
    </Dialog>
    )
}