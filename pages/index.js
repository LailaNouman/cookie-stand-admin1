import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [userInput, setUserInput] = useState({});

  function handleUserInput(e){
    e.preventDefault();

    const inputObject = {
      "location": e.target.location.value,
      "minCustomers": e.target.min_cux.value,
      "maxCustomers": e.target.max_cux.value,
      "avgCookies": e.target.avg_c.value,
    }

    setUserInput(inputObject)
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Cookie stand page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex justify-between bg-emerald-500 p-4'>
        <h1 className=" text-2xl font-semibold">
          Cookie Stand Admin
        </h1>
      </header>

      <main className="">
        <div className='bg-emerald-300 h-48 mx-44 my-8 rounded'>
          <p className='text-center font-semibold text-2xl pt-4'>Create Cookie Stand</p>
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
                <label className='font-semibold ml-3'>Maximum customers per hour</label>
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
        </div>

        <p className='text-center'>Report table coming soon...</p>
        <br />
        <p className='text-center'>{JSON.stringify(userInput)}</p>

      </main>

      <footer className="bg-emerald-500 p-4 mt-11">
        <p>&copy;2022</p>
      </footer>

    </div>
  )
}