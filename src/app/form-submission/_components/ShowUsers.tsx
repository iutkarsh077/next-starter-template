"use client";

import { GetUserInfo } from "../../../../actions/FormSubmit";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface IData {
  fname: string;
  email: string;
  address: string;
  createdAt: Date;
  maths: number;
  english: number;
}

const ShowUsers = () => {
  const [userInfo, setUserInfo] = useState<IData[] | null>(null);
  const router = useRouter()
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await GetUserInfo();
        if (res.status === false) {
          throw new Error(res.message);
        }
        console.log(res);
        setUserInfo(res.data);
      } catch (error) {
        const message =
          error && error instanceof Error
            ? error.message
            : "Something went wrong, Please try again!";
        console.log(message);
        toast.error(message, {
          position: "bottom-right",
        });
      }
    };
    getUserDetails();
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("userdetails");
    window.location.reload()
  }

  // console.log(userInfo);
  return (
    <div className="h-full w-full">
      <ToastContainer />
      <table className="w-full h-auto">
        <tr className="border-gray-300 text-white  border-2 h-12 bg-blue-500 ">
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>English</th>
          <th>Maths</th>
        </tr>
        {userInfo?.map((item: IData, index: number) => (
          <tr
            key={index}
            className="text-center hover:bg-gray-100 transition-all duration-300 ease-in-out border-2 border-collapse  border-gray-200"
          >
            <td className="border-2 font-semibold border-gray-200 min-h-12 h-12 max-h-20">
              {item.fname}
            </td>
            <td className="border-2 font-semibold border-gray-200 min-h-12 h-12 max-h-20">
              {item.email}
            </td>
            <td className=" border-2 font-semibold truncate border-gray-200 min-h-12 h-12 max-h-20">
              {item.address}
            </td>
            <td className="border-2 font-semibold border-gray-200 min-h-12 h-12 max-h-20">
              {item.english}
            </td>
            <td className=" border-2 font-semibold border-gray-200 min-h-12 h-12 max-h-20">
              {item.maths}
            </td>
            
          </tr>
        ))}
      </table>

      <button onClick={handleLogout} className="bg-red-600 text-white px-6 rounded-md font-medium hover:bg-red-800 ease-in-out transition-all duration-300 hover:cursor-pointer py-2 mt-5">Logout</button>
    </div>
  );
};

export default ShowUsers;
