export const Appbar = ({ user }) => {
   
    return (
        <header className="shadow h-14 flex justify-between items-center px-4">
            <div>
                PayTM App
            </div>
            <div className="flex items-center">
                <div className="mr-4">
                    {/* {user.firstName} */}
                    jatin
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center">
                    <span className="text-xl">
                        {/* {user.firstName[0]} */}
                        J
                    </span>
                </div>
            </div>
        </header>
    );
}
