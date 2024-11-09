// -> Airo Signature
// Airo Function
// import React, { useState, useEffect} from 'react';
// // let time = new Date();
// const CurrentTime =() =>{
//     const [currentTime, setCurrentTime] = useState(new Date());
//     useEffect(() =>{
//         const intervalId = setInterval(()=={
//             setCurrentTime(new Date());
//         }, 1000);
        
//         return () => clearInterval(intervalId);
//     },[]);
//     return(
//         <h1>This is the current time: {currentTime.toLocaleDateString()}-{currentTime.toLocaleTimeString()}</h1>
//     );
    

//     // return <h1> This is the current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()} </h1>
// }
// export default CurrentTime;
import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <h1>This is the current time: {currentTime.toLocaleDateString()}-{currentTime.toLocaleTimeString()}</h1>
  );
};

export default CurrentTime;
