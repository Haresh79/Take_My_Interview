import { Link } from "react-router-dom"
import axios from 'axios'
import config from "../../config";
import "../App.css"
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";

export default function(){

    const {qns, setQns, ans, setAns} = useContext(DataContext);

    // const [jobRole, setJobRole] = useState(null);
    // const [jobDesc, setJobDesc] = useState(null);

    const fetchQuestions = async () => {
        // setJobRole(document.getElementById('jobRole').value)
        // setJobDesc(document.getElementById('jobDesc').value)

        const jobRole=document.getElementById('jobRole').value;
        const jobDesc=document.getElementById('jobDesc').value;

        if (jobRole!=null && jobDesc!=null) {
            console.log(jobDesc)
            console.log(jobRole)
            try {
                console.log('Loading...');
                const res = await axios({
                    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${config.API_KEY}`,
                    method: "post",
                    data: {
                        'contents':[
                            {'parts':[{'text':`Generate only some technical Interview questions with question count and in new line one after one, if job role is ${jobRole} and job description is ${jobDesc}`}]},
                        ],
                    },
                });
    
                setQns(res.data['candidates'][0]['content']['parts'][0]['text']);
            
            } catch (error) {
                console.error(error)
            }
        }else{
            alert('Give required informations')
        }
    }

    return(
        <div id="inputForm" className="bg-[#0d111e] w-full h-screen flex justify-center items-center">
            <form className="bg-white w-1/3 p-10 rounded-lg flex flex-col gap-5">
                <div className="flex flex-col">
                    <label>Enter your name.</label>
                    <input type="text" className="border-2 rounded-md px-3 py-1 mt-2 border-[#0a6ccc] outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Enter the job title.</label>
                    <input required type="text" id='jobRole' className="border-2 rounded-md px-3 py-1 mt-2 border-[#0a6ccc] outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Enter the job description.</label>
                    <input required type="text" id="jobDesc" className="border-2 h-24 rounded-md px-3 py-1 mt-2 border-[#0a6ccc] outline-none"/>
                </div>
                <div className="flex">
                    <button className="bg-transparent mb-10 border-[#0a6ccc] border-2 px-6 mt-5 py-2 text-xl rounded-full hover:bg-transparent text-[#0a6ccc]"><Link to='/'>Cancel</Link></button>
                    <button onClick={()=>{
                        fetchQuestions()
                    }} className="bg-[#0a6ccc] mb-10 border-[#0a6ccc] border-2 px-6 mt-5 py-2 text-xl text-white rounded-full ml-5"><Link to='/interview'>Start</Link></button>
                </div>
            </form>
        </div>
    )
}