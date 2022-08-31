import axios from 'axios';

export default function ReportTable(props) {
    let hours = 0

    function deleteRow(id) {
        axios.delete(`${props.url}${id}/`, props.config)
        props.setUserInput(props.userInput.filter(item => item.id != id))
    }

    return (
        <>
        {props.userInput ?
            <div className="mx-8">
            <table className="text-sm text-left bg-emerald-500">
                <thead className="text-l font-bold bg-emerald-500">
                <tr>
                <th className="py-3 px-6 text-black"> Location</th>
                {props.hours.map(item => {
                    return (
                        <th className="py-3 px-6 text-black">{item}</th>
                            )
                })}
                        <th className="py-3 px-6 text-black">Totals</th>
                </tr>
                </thead>
                <tbody>
                {props.userInput.map((item, x) => {
                    var id = item.id
                    // hours = 0
                    return (
                    <tr className="bg-emerald-300 border-b" id={item.id}>
                    <th className="py-4 px-6 font-bold text-black">
                    <div className="">
                    {item.location}
                    <div className="float-right text-red-500">
                    <button onClick={() => deleteRow(id)}> delete </button>
                    </div>
                    </div>
                    </th>
                    {item.hourly_sales.map(hour => {
                    hours += hour
                    return (
                    <td className="py-4 px-6 font-bold"> {hour} </td>
                    )
                    })}
                    <td className="py-4 px-6 font-bold"> {hours / (x + 1)} </td>
                    </tr>
                    )
                    })}
                    </tbody>
                    <tfoot>
                    <th className="py-3 px-6">Totals</th>
                    {props.column.map(item => {
                        return (
                        <td class="py-4 px-6 font-bold">{item}</td>
                        )
                    })}
                    <td class="py-4 px-6 font-bold"> {hours} </td>
                    </tfoot>
                    </table>
                </div>
                :
                <h2 className="text-2xl font-bold text-center">No Cookie Stands Available</h2>
            }

        </>
    )
}