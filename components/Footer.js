export default function Footer(props) {
    return (
      <footer className="bg-emerald-500 p-4 mt-11">
            {props.userInput ?
                <p><span className="text-black font-blod text-2xl">{props.userInput.length} Locations World Wide</span></p>
                :
                <p className="font-bold"> Locations World Wide </p>
            }

        </footer>
    )
}