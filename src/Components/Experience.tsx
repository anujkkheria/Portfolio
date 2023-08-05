import React,{useState} from 'react'
import {Tabs,Tab} from '@mui/material'
const Experience:React.FC = () => {
  const jobDetails = [
    { name : "cognizant",
      Role : "Intern",
      Technology:"Informatica MDM STIBO, MySQL",
      Summary:"worked with INformatica ETL tools on Extracting Transforming and Loading data,\n Worked On STIBO product management tool"
  },
  {
    name: "Insight Delivered",
    Role:"Software Developer",
    Technology:"TypeScript, React-TS, NodeJS, Figma",
    Summary:"Worked on the development of product meant to ease the work of CFO's forcasting Company Expences, which helped multi-Billions companies."
  }
]
const [index,setIndex]=useState<number>(0)

    return (
        <div className="container flex gap-3 mt-2">
            <Tabs value={index} 
            sx={{backgroundColor:"#f5f5f5", width:'30%',height:"90vh" }}
            orientation="vertical"
            onChange={(_event,value)=>setIndex(value)}
            >
                {jobDetails.map((job,index)=>{return(
                    <Tab key={index} label={job.name}/>
                )})}
            </Tabs>
            <div className={`w-[90vw] flex flex-col items-center justify-start text-white gap-2`} >
                <h2 className='text-2xl text-white'>
                {jobDetails[index].name}
                </h2>
                <h3>
                    {jobDetails[index].Technology}
                </h3>     
                <p>
                  {jobDetails[index].Summary}
                </p>        
            </div>
        </div>

  )
}

export default Experience
