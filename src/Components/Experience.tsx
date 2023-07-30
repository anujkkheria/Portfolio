import React,{useState} from 'react'
import {Tabs,Tab} from '@mui/material'
const Experience:React.FC = () => {
  const jobDetails = [
    { name : "cognizant",
      bcolor: "#000048",
      Role : "Intern",
      Technology:"Informatica MDM STIBO, MySQL",
      Summary:"worked with INformatica ETL tools on Extracting Transforming and Loading data,\n Worked On STIBO product management tool"
  },
  {
    name: "Insight Delivered",
    bcolor:"#29265b",
    Role:"Software Developer",
    Technology:"TypeScript, React-TS, NodeJS, Figma",
    Summary:"Worked on the development of product meant to ease the work of CFO's forcasting Company Expences, which helped multi-Billions companies."
  }
]
const [index,setIndex]=useState<number>(0)

    return (
        <div className="container flex mt-2">
            <Tabs value={index} 
            orientation="vertical"
            onChange={(_event,value)=>setIndex(value)}
            sx={{width:"30%"}}
            >
                {jobDetails.map((job,index)=>{return(
                    <Tab key={index} label={job.name}/>
                )})}
            </Tabs>
            <div className={`w-[90vw] flex flex-col items-center justify-start gap-2`} >
                <h2 className='text-2xl' style={{color:`${jobDetails[index].bcolor}`}}>
                {jobDetails[index].name}
                </h2>
                <h3>
                    {jobDetails[index].Technology}
                </h3>             
            </div>
        </div>

  )
}

export default Experience
