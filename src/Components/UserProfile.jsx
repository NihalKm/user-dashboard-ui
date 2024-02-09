import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function UserProfile ({name,image,onClick,dimension=35,height,fontSize="1rem",fontColor="#545454",lightFont}) {

    return (
      <Stack onClick={onClick} direction={"row"} gap={2} sx={{cursor:"pointer",opacity:1,[height ? "maxHeight" : "minHeight"]:height?height:"50px",justifyContent:"start",alignItems:"center",maxWidth:"fit-content"}}>
        <Avatar alt={name} src={image} sx={{ width: dimension, height: dimension }}/>
        <Typography color={fontColor} fontSize={fontSize} fontWeight={!lightFont && "600"} variant='subtitle2'>{name}</Typography>
      </Stack>
    )
  }