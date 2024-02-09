export default function TableRow ({name,value,width}) {
    
    return (
        <tr style={{margin:""}}>
            <td style={{textAlign:"end",color:"#9A9A9A",fontWeight:"600",width:width&&width}}>{name}&nbsp;&nbsp;:</td>
            {
                value &&
                <td style={{color:"#545454",fontWeight:"700"}}>&nbsp;{value}</td>
            }
        </tr>
    )
}