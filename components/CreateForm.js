export default function CreateForm(props) {
    function handleUserInput(e) {
        e.preventDefault();
        var array = props.column
        const inputObject = {
            "location": e.target.location.value,
            "minCustomers": e.target.min_cux.value,
            "maxCustomers": e.target.max_cux.value,
            "avgCookies": e.target.avg_c.value,
            "hourly_sales": [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
        }
        if (props.userInput) {
            props.setUserInput([...props.userInput, inputObject])
            var x = array.map((item, x1) => item += inputObject.hourly_sales[x1])
            props.setcolumn(x)
        }
        else {
            props.setUserInput([inputObject])
            array = inputObject.hourly_sales
            props.setcolumn(inputObject.hourly_sales)
        }
      }

    return (
      <form onSubmit={handleUserInput} className='mx-auto'>
        <div className='flex my-2 mb-4 pt-4'>
          <label className='ml-4 mr-2.5 font-semibold'>Location</label>
          <input className='w-10/12' type="text" name='location' />
        </div>

        <div className='flex'>
          <div className='ml-3 w-1/4'>
            <label className='font-semibold ml-3'>Minimum customers per hour</label>
            <input className='w-5/6 ml-5' type="text" name='min_cux' />
          </div>

          <div className='ml-4 w-1/4'>
            <label className='font-semibold ml-2'>Maximum customers per hour</label>
            <input className='w-5/6 ml-5' type="text" name='max_cux' />
          </div>

          <div className='ml-4 w-1/4'>
            <label className='font-semibold ml-4'>Average cookies per sale</label>
            <input className='w-5/6 ml-4' type="text" name='avg_c' />
          </div>

          <div className='ml-5 mr-5 w-1/4 h-16 bg-emerald-500'>
            <input type="submit" className='w-full h-full font-semibold' value="Create"/>
          </div>
          
        </div>
      </form>
    )

}