import { useEffect, useState } from "react";
// hiteshchoudhary
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ajaythink")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <div
        className="text-center bg-gray-700 text-white text-3xl p-4 
       flex justify-center items-center m-4"
      >
        <div className=" border border-white/50 p-2 rounded-xl m-3">
          Github followers: {data.followers}
        </div>
        <img
          className="rounded-2xl w-24 h-24 text-center shadow-2xl"
          src={data.avatar_url}
          alt="github profile"
        />
      </div>
    </div>
  );
}

export default Github;