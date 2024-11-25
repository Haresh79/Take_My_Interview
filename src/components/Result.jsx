import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/dataContext";
import axios from "axios";
import config from "../../config";

export default function Result(){

    

    const {qns, setQns, ans, setAns}=useContext(DataContext);
    console.log(ans);
    const [result, setResult]=useState(5);
    const [feedback, setFeedback]=useState(null);

    const fetchResult=async()=>{
        try {
            const response1 = await axios({
                url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${config.API_KEY}`,
                method:"post",
                data:{
                    'contents':[
                        {'parts':[{'text':`give only a score between 0 to 10 not any thing else from it, if questions are ${qns} and there answers are ${ans}`}]},
                    ],
                }
            });
        
            console.log(response1.data['candidates'][0]['content']['parts'][0]['text']);
            setResult(response1.data['candidates'][0]['content']['parts'][0]['text'])
            
            if(result<=3){
                setFeedback('Unsatisfactory')
                document.getElementById('blueBar').style.width='30%';
            }
            else if(result>=4 && result<=6){
                setFeedback('Average');
                document.getElementById('blueBar').style.width='50%'
            }
            else if(result>=7 && result<=8){
                setFeedback('Good');
                document.getElementById('blueBar').style.width='75%';
            }
            else if(result==9){
                setFeedback('Very Good');
                document.getElementById('blueBar').style.width='90%';
            }
            else{
                setFeedback('Perfect');
                document.getElementById('blueBar').style.width='100%';
            }
        } catch (error) {
            console.error(error);
        }
    }
    fetchResult();
    return(
        <div className="flex w-full h-screen justify-center items-center">
            <div className="flex flex-col text-white gap-8 justify-center items-center rounded-2xl p-10 w-72 h-auto bg-[#0d111e]">
                <h1 className="text-xl font-semibold">Your Score</h1>
                <div className="flex bg-[#464646] justify-start items-center h-1 w-11/12 rounded-lg">
                    <div id='blueBar' className="h-full w-auto bg-[#0a6ccc] rounded-lg"></div>
                </div>
                <p>{feedback}</p>
                <Link to='/'><button className="bg-[#0a6ccc] px-6 py-2 text-white rounded-md shadow-md hover:scale-95 hover:shadow">Cancel</button></Link>
            </div>
        </div>
    )
}