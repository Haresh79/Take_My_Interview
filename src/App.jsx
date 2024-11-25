import Home from "./components/Home"
import Interview from "./components/Intertview"
import Result from "./components/Result"
import InputForm from "./components/InputForm"
import './index.css'
import { Route, Routes } from "react-router"
import DataProvider from "./contexts/dataContext"
import Tutorial from "./components/Tutorial"


export default function App(){
  return (
    <>
      <DataProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/input" element={<InputForm/>} />
        <Route path="/interview" element={<Interview/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/tutorial" element={<Tutorial/>} />
      </Routes>
      </DataProvider>
    </>
  )
}


