import { Close, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, ModeCommentOutlined, Send } from '@mui/icons-material';
import { Badge, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import UserProfile from './UserProfile';

export default function Chatbox ({userData,usersData}) {
    const [ selectedUser, setSelectedUser ] = useState();
    const [ chatOpen, setChatOpen ] = useState(false);
    const messages = [
        { msg:"Lorem ipsum dolor sit amet consectetuer", send:false, startingMsg:true},
        { msg:"Lorem ipsum dolor sit", send:false, startingMsg:false},
        { msg:"Lorem ipsum dolor", send:true, startingMsg:true},
        { msg:"Lorem ipsum", send:true, startingMsg:false}
    ]

    //to handle chatbox on click
    const handleChatClick = () => {
        setChatOpen(prev=>(!prev));
    }

    //to close chatbox on outside click
    const onOutsideClick = (event) => {
        if (event.target.getAttribute("name")!=="closeButton" && event.target.parentElement.getAttribute("name")!=="closeButton")
        {
            setChatOpen(false);
            setSelectedUser(undefined);
        }
    }

    return (
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
            {/* chatbox */}
            <Stack sx={{bottom:"-18px",right:"30px",minWidth:"200px",position:"fixed"}}>
                <Stack px={1} alignItems={"center"} direction="row" justifyContent="space-between" onClick={handleChatClick} sx={{opacity:"0.97",borderRadius:"7px 7px 0 0",backgroundColor:"#2C65C8",height:"35px"}}>
                    <Stack gap={1} direction="row" alignItems={"center"}>
                        <ModeCommentOutlined sx={{fontSize:"1.2rem",color:"white"}} />
                        <Typography sx={{color:"white"}} variant='caption'>{"Chats"}</Typography>
                    </Stack>
                    <KeyboardArrowUpOutlined sx={{transform:chatOpen&&"rotate(180deg)",fontSize:"1.2rem",color:"white"}} />
                </Stack>
                <Stack gap={0.5} sx={{padding:"8px 12px 8px 8px",maxWidth:"200px",maxHeight:"250px",overflow:"hidden auto",border:"2px solid #2C65C8",backgroundColor:"white"}}>
                { 
                    chatOpen &&
                    usersData.filter(x=>x.name!==userData.name).map((user,idx)=>
                        <Stack key={user.name} gap={2} direction={"row"} sx={{maxHeight:"35px"}} alignItems="center" justifyContent={"space-between"}>
                            <UserProfile name={user.name} image={user.profilepicture} dimension={24} height={"35px"} fontSize={"0.8rem"} lightFont onClick={()=>setSelectedUser(user)} />
                            <Badge sx={{".MuiBadge-badge":{background:idx%2===0?"#1EAD64":"#DFDFDF"}}} variant="dot"></Badge>
                        </Stack>
                    )
                }
                </Stack>
            </Stack>

            {/* messagebox */}
            {
                selectedUser &&
                <Stack sx={{bottom:"1px",right:"260px",minWidth:"200px",position:"fixed",borderRadius:"7px 7px 0 0"}}>
                    <Stack px={1} alignItems={"center"} direction="row" justifyContent="space-between" sx={{borderRadius:"7px 7px 0 0",opacity:"0.97",backgroundColor:"#2C65C8",height:"35px"}} onClick={onOutsideClick}>
                        <UserProfile name={selectedUser.name} image={selectedUser.profilepicture} dimension={24} height={"35px"} fontSize={"0.8rem"} fontColor={"white"} lightFont />
                        <Stack direction="row" alignItems={"center"}>
                            <KeyboardArrowDownOutlined sx={{fontSize:"1.2rem",color:"white"}} />
                            <IconButton name="closeButton" sx={{p:0}} onClick={()=>setSelectedUser(undefined)}><Close name="closeButton" sx={{fontSize:"1rem",color:"white"}}/></IconButton>
                        </Stack>
                    </Stack>
                    <Stack gap={0.5} sx={{maxWidth:"216px",backgroundColor:"white"}}>
                    <Stack p={1} sx={{border:"2px solid #2C65C8",borderBottom:"1px solid #F1F1F1",maxHeight:"150px",overflow:"hidden auto"}}>
                        <Stack gap={1} sx={{padding:"0 12px"}}>
                            {
                                messages.map((message,idx)=>
                                    <Stack key={idx} alignItems={idx>1 ? "end" : "start"} gap={1}>
                                        <Stack className={message.startingMsg ? `start ${message.send?"send":""}` : ""} backgroundColor="#F1F1F1" p={1} sx={{position:message.startingMsg&&"relative",maxWidth:"80%",borderRadius:"4px"}}>
                                            <Typography sx={{color:"#787878",fontSize:"0.7rem"}} variant='caption'>{message.msg}</Typography>
                                        </Stack>
                                        {
                                            idx===1 &&
                                            <Stack alignItems={"center"} width="100%">
                                                <Typography sx={{color:"#D4D4D4",fontSize:"0.7rem"}} variant='caption'>{"9:16 PM"}</Typography>
                                            </Stack>
                                        }
                                    </Stack>
                                )
                            }
                        </Stack>
                    </Stack>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment"
                                endAdornment={<InputAdornment sx={{marginBottom:"5px"}} position="end"><IconButton sx={{p:0}}><Send sx={{fontSize:"1.2rem",color:"#2C65C8"}}/></IconButton></InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{sx:{padding:"0px 8px",position:"relative",top:"-3px",fontSize:"0.8rem"}}} 
                                sx={{"&:hover":{borderColor:"#0000003b"},borderRadius:"0px",".MuiOutlinedInput-notchedOutline":{top:"-10px",borderWidth:"2px","&:hover":{borderColor:"#0000003b"},}}} />
                        </FormControl>
                    </Stack>
                </Stack>
            }
        </OutsideClickHandler>
    )
}