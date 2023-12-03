import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

function Qrcode() {
const location=useLocation()
const [qr, setQr] = useState("");
 
useEffect(()=>{
    generateQrCode(location.pathname)
},[location])

const generateQrCode=(url)=>{
   QRCode.toDataURL(url,{
    width:100,
    margin:2,
    color:{
        dark:'#335383FF',
        light:'#EEEEEEFF'
    }
   },
   (err,url)=>{
      if(err)
      return console.error(err);
      setQr(url)
   }
   )
}

return(
    <div className="qr-code">
        {qr && (
            <>
              <img src={qr} alt="qr" />
              <Button
               variant="contained"
               color="success"
               href={qr}
               download="qrcode.png"
              >
                Download
              </Button>
            </>
        )}
    </div>
)

}

export default Qrcode