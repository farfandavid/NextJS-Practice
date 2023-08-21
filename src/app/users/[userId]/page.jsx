"use client"
import { useParams } from "next/navigation";

function User() {
  const params = useParams();
  return (
    <div>
      user
      <button onClick={() => {
        console.log(params)
      }}>Click</button>
    </div>
  );
}

export default User;