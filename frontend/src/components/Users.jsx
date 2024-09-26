import { useState } from "react";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Jatin",
        lastName: "Chary",
        _id: 1
    }]);

    return (
        <>
            <div className="font-bold mt-6 text-lg ">
                Users
            </div>
            <div className="my-2">
                <input 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full px-2 py-1 border rounded border-slate-200"
                />
            </div>
            <div className="text-white">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </>
    );
}

const User = ({ user }) => {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Money</button>
            </div>
        </div>
    );
}

export default Users;
