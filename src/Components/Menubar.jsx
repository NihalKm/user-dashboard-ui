import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function Menubar ({selectedMenu,setSelectedMenu}) {
    const menus = ["Profile","Posts","Gallery","ToDo"];

    return (   
        <Stack flex={0.15} divider={<Divider sx={{margin:"0 30px",backgroundColor:"white",opacity:0.3}} orientation="horizontal" flexItem />} sx={{minWidth:"200px",backgroundImage:"linear-gradient(#3B58C8,#5D3CC8)",borderRadius:"25px",alignItems:"center",justifyContent:"center"}}>
        {
            menus.map(menu=>(
                <Stack className={selectedMenu===menu && "active"} key={menu} sx={{width:"100%",justifyContent:"center",alignItems:"start",margin:"2% 0"}}>
                    {selectedMenu===menu && "active" && <div className="shape"/>}
                    <Typography py={0.8} variant="caption" sx={{padding:"0 30px",cursor:selectedMenu!==menu ? "pointer" : "default",opacity:selectedMenu!==menu && 0.3,color:"white",fontWeight:"400",fontSize:"1rem"}} onClick={()=>setSelectedMenu(menu)} >{menu}</Typography>
                    {/* <div style={{position:"absolute",top:"-7.3px",right:"-22.8px",width:"50px"}}>
                        <svg viewBox="0 0 80 100">
                            <path d="M 43.485 7.794 L 43.59 58.256 C 39.821 52.184 34.272 51.242 28.933 50.613 L 28.933 14.599 C 40.24 13.238 40.658 10.411 43.59 7.585" fill="white" />
                        </svg>
                    </div> */}
                    <div className="arrow" style={{display:selectedMenu!==menu && "none"}}></div>
                    {/* <IconButton className="arrowButton" sx={{display:selectedMenu!==menu && "none",padding:"0px",".MuiSvgIcon-root":{fontSize:"14px",position:"absolute",bottom:"6px",left:"184px",color:"#BDC5D4"}}}><NavigateNext/></IconButton> */}
                </Stack> 
            ))
        }
    </Stack>
    )
}