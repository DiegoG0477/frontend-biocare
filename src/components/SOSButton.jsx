import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

export default function SOSButton(){
    const navigate = useNavigate();
    return(
        <Button label={'SOS'} onClick={()=>{
            navigate('/sos')
        }} style={{
            backgroundColor: 'red',
            margin: "auto",
            marginTop: '20px',
            borderRadius: '20px',
            width: '5rem'
        }}/>
    )
}
