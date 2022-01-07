import React, {useEffect, useState} from "react";  


const TimeInterval = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval (interval);
    }, []);

return(
    <div>
    <h5>Time Interval:</h5>
    <div style={{}}> {seconds} </div>
    </div>
)
}
export default TimeInterval;

