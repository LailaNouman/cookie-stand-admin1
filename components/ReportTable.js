export default function ReportTable(props) {
    var hours = 0
    // var x = 0
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
                {
                props.userInput.map((item, x) => {
                    // hours = 0
                    return (
                        <tr class="bg-emerald-300 border-b">
                            <th class="py-4 px-6 font-bold text-black"> {item.location} </th>
                            {item.hourly_sales.map(hour => {
                                hours += hour
                                return (
                                    <td class="py-4 px-6 font-bold"> {hour} </td>
                                )
                                })}
                                    <td class="py-4 px-6 font-bold"> {hours / (x + 1)} </td>
                        </tr>
                    )
                })
                }
                </tbody>
                <tfoot>
                    <th className="py-3 px-6">Totals</th>
                    {props.column.map(item => {
                        return (
                        <td class="py-4 px-6 font-bold">{item}</td>
                                )
                    })}
                    <td class="py-4 px-6 font-bold">
                                {hours}
                            </td>
                </tfoot>
                </table>
                </div>
                :
                <h2 className="text-2xl font-bold text-center">No Cookie Stands Available</h2>
            }

        </>
    )
}

// props.userInput.map(item => {
//     return (
//     <>
//     <tr>
//     <td className="py-4 px-6 font-bold text-black">{item.location}</td>
//     <td className="py-4 px-7 font-bold text-black">{item.hourly_sales[0]}</td>
//     <td className="py-4 px-7 font-bold text-black">{item.hourly_sales[1]}</td>
//     <td className="py-4 px-7 font-bold text-black">{item.hourly_sales[2]}</td>
//     <td className="py-4 px-7 font-bold text-black">{item.hourly_sales[3]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[4]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[5]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[6]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[7]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[8]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[9]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[10]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[11]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[12]}</td>
//     <td className="py-4 px-8 font-bold text-black">{item.hourly_sales[13]}</td>
//     </tr>
//     </>
//         )
// })
