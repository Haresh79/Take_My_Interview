import { useContext, useState } from "react"
import { DataContext } from "../contexts/dataContext";
import { Link } from "react-router-dom"


export default function Interview() {

    const { qns, setQns, ans, setAns } = useContext(DataContext);

    const [answer, setAnswer]=useState('');
    const handleTextareaChange = (event) => {
        setAnswer(event.target.value);
    };
    const sendAnswer=()=>{
        setAns(answer);
    };

    const [isDark, setIsDark] = useState(false);

    if (!isDark) {
        return (
            <div className="flex w-full h-auto pb-10 flex-col ">
                <div className="flex justify-around p-5">
                    <h1 className="text-4xl font-semibold">Give Your Interview</h1>
                    <button onClick={() => {
                        setIsDark(true)
                    }}>&#127774;</button>
                </div>
                <div id="qnsDiv" className="flex flex-col px-20">
                    <h1 className="text-2xl text-[#0a6ccc] font-semibold">Questions:</h1>
                    <p className="text-xl font-semibold">{qns}</p>
                    <h1 className="text-2xl text-[#0a6ccc] font-semibold">Answers:</h1>
                    <textarea value={answer} onChange={handleTextareaChange} className="h-80 border-2 bg-transparent border-[#0a6ccc] outline-none rounded-lg px-5 mt-3 py-2"></textarea>
                </div>
                    
                <div className="flex justify-start px-20 py-5 items-center">
                    <Link to='/result'><button onClick={sendAnswer} className="bg-[#0a6ccc] px-6 py-2 text-white rounded-md shadow-md hover:scale-95 hover:shadow">Submit</button></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex w-full h-auto pb-10 flex-col text-white bg-[#0d111e]">
                <div className="flex justify-around p-5">
                    <h1 className="text-4xl font-semibold">Give Your Interview</h1>
                    <button onClick={() => {
                        setIsDark(false)
                    }}>&#127769;</button>
                </div>
                <div id="qnsDiv" className="flex flex-col px-20">
                    <h1 className="text-2xl text-[#0a6ccc] font-semibold">Questions:</h1>
                    <p className="text-xl font-semibold">{qns}</p>
                    <h1 className="text-2xl text-[#0a6ccc] font-semibold">Answers:</h1>
                    <textarea value={answer} onChange={handleTextareaChange} className="h-80 border-2 bg-transparent border-[#0a6ccc] outline-none rounded-lg px-5 mt-3 py-2"></textarea>
                </div>
                <div className="flex justify-start px-20 py-5 items-center">
                    <Link to='/result'><button onClick={sendAnswer} className="bg-[#0a6ccc] px-6 py-2 text-white rounded-md shadow-md hover:scale-95 hover:shadow">Submit</button></Link>
                </div>
            </div>
        )
    }
}