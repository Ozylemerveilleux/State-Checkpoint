import React , {useState} from "react";
import Image from './Pp.webp'  

function Profil () {
    const [fullName , setFullName] = useState ("Mister Holdi COLY");
    const [bio , setBio] = useState ("After my Licence I got my master's degree in audit and management control");
    const [imgsrc , setImgsrc] = useState ('./Pp.webp');
    const [profession , setProfession] = useState ("Profession: I am master financial ingineering");
        return(
            <div>
                <h1> 
                    Name : {fullName} 
                </h1>
                <h1>
                    Bio : {bio}
                </h1>
                <h1>
                    Profession : {profession}
                </h1>
                <img style={{width : '450px'}} src = {Image} alt="Pp" />
            </div>
        );
}
export default Profil;