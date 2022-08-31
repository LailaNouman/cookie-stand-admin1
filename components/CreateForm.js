import axios from 'axios';

const url = 'https://cookiestandapi.herokuapp.com/api/v1/cookie_stands/'

export default function CreateForm(props) {
    function handleUserInput(e) {
        e.preventDefault();

        const inputObject = {
            "location": e.target.location.value,
            "minimum_customers_per_hour": e.target.min_cph.value,
            "maximum_customers_per_hour": e.target.max_cph.value,
            "average_cookies_per_sale": e.target.avg_cps.value,
            "hourly_sales": [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            "owner": 1
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${props.tokens.access}`
            }
        }

        axios.post(url, inputObject, config).then(res => props.setUserInput([...props.userInput, res.data]))

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