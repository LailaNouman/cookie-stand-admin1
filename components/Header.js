export default function Header(props) {
    return (
        <header className='flex justify-between bg-emerald-500 p-4'>
            <h1 className=" text-2xl font-semibold">
                Cookie Stand Admin
            </h1>
            <button className="float-right text-black bg-white rounded w-20">Overview</button>
        </header>
    )
}