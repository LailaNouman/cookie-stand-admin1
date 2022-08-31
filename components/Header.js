export default function Header(props) {
    return (
        <header className='flex justify-between bg-emerald-500 p-4'>
            <h1 className=" text-2xl font-semibold">
                Cookie Stand Admin
            </h1>
            <div className="mr-80 h-7 rounded">
                <button className="float-right text-black bg-white rounded w-20">Overview</button>
                <button className="float-right text-black mr-5 font-bold bg-green-700 rounded w-20 h-full hover:bg-green-500">
                    Sign Out
                </button>
                <div className="float-right text-black mr-5 font-bold bg-white rounded w-20 h-full text-center">
                    {props.username}
                </div>
            </div>
        </header>
    )
}