import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-gray-700 text-white p-4 text-4xl text-center">
        User ID: {userid}
      </div>
    </>
  );
}

export default User;
