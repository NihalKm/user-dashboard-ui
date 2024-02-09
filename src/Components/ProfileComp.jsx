import { Avatar, Divider, Stack, Typography } from "@mui/material";
import TableRow from "./TableRow";
import MapContainer from "./MapContainer";

export default function ProfileComp (props) {
    const userData = props.userData ? props.userData : JSON.parse(localStorage.getItem("userData"));
    
    return (
    <Stack direction={"row"} flex={1} spacing={4} sx={{fontSize:"1.1rem",margin:"2% 0"}} divider={<Divider sx={{border:"1px solid lightgrey"}} orientation="horizontal" flexItem />}>
        <Stack flex={1} divider={<Divider sx={{border:"1px solid lightgrey",marginLeft:"10%"}} orientation="horizontal" flexItem />}>
            <Stack flex={2} alignItems="center" justifyContent={"center"}>
                <Avatar alt={userData.name} src={userData.profilepicture} sx={{alignContent:"center",display:"flex",width: 200, height: 200 }}/>
                <table style={{borderSpacing:"8px"}}>
                    <tbody>
                        <tr>
                            <th colSpan={2} style={{color:"#545454",fontWeight:"700"}}>{userData.name}</th>
                        </tr>
                        <TableRow name={"Username"} value={userData.username} />
                        <TableRow name={"e-mail"} value={userData.email} />
                        <TableRow name={"Phone"} value={userData.phone} />
                        <TableRow name={"Website"} value={userData.website} />
                    </tbody>
                </table>
            </Stack>
            <Stack flex={1} justifyContent={"center"}>
            <table style={{borderSpacing:"8px"}}>
                <tbody>
                    <tr>
                        <th colSpan={2} style={{color:"#9A9A9A",fontWeight:"600"}}>Company</th>
                    </tr>
                    <TableRow name={"Name"} value={userData.company.name} />
                    <TableRow name={"catchphrase"} value={userData.company.catchPhrase} />
                    <TableRow name={"bs"} value={userData.company.bs} />
                </tbody>
            </table>
            </Stack>
        </Stack>
        <Stack flex={2} sx={{margin:"0 4%"}} gap={1}>
            <Stack>
                <Typography sx={{fontSize:"1rem",fontWeight:"600",color:"#9A9A9A"}} variant='caption'>Address</Typography>
                <table style={{borderSpacing:"8px"}}>
                    <tbody>
                    <TableRow name={"Street"} width={"100px"} value={userData.address.street} />
                    <TableRow name={"Suite"} width={"100px"} value={userData.address.suite} />
                    <TableRow name={"City"} width={"100px"} value={userData.address.city} />
                    <TableRow name={"Zipcode"} width={"100px"} value={userData.address.zipcode} />
                    </tbody>
                </table>
            </Stack>
            <Stack flex={3} sx={{marginBottom:"50px",position:"relative"}} gap={1}>
                <MapContainer center={userData.address.geo} />
                <Stack direction={"row"} justifyContent="end" gap={2}>
                    <Typography sx={{fontSize:"1rem",color:"#9A9A9A"}} variant='caption'>Lat:&nbsp;<Typography sx={{fontSize:"1rem",fontWeight:"600",color:"#545454"}} variant='caption'>{userData.address.geo.lat}</Typography></Typography>
                    <Typography sx={{fontSize:"1rem",color:"#9A9A9A"}} variant='caption'>Long:&nbsp;<Typography sx={{fontSize:"1rem",fontWeight:"600",color:"#545454"}} variant='caption'>{userData.address.geo.lng}</Typography></Typography>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
    )
}