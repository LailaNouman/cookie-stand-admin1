import { useState } from 'react';
import { Head, Header, Footer, CreateForm, ReportTable } from "./";
import { hours } from "../data";

export default function CookieStandAdmin() {
    const [userInput, setUserInput] = useState();
    const [column, setcolumn] = useState(hours.length);

    return (
        <div>
            <Head/>
            <Header/>
            <main>
                <div className='bg-emerald-300 h-48 mx-44 my-8 rounded'>
                    <p className='text-center font-semibold text-2xl pt-4'>Create Cookie Stand</p>
                    <CreateForm
                        userInput = {userInput}
                        setUserInput = {setUserInput}
                        column = {column}
                        setcolumn = {setcolumn}
                        hours = {hours}/>
                </div>
                <ReportTable
                    userInput = {userInput}
                    column = {column}
                    hours = {hours}/>
            </main>
            <Footer userInput = {userInput}/>
        </div>
    )
}