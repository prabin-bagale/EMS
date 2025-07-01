import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id='tasklist' className=' overflow-x-auto h-[50%] flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask  key={idx}/>
        }
        if (elem.NewTask) {
          return <NewTask  key={idx}/>
        }
        if (elem.complete) {
          return <CompleteTask  key={idx}/>
        }
        if (elem.failed) {
          return <FailedTask  key={idx}/>
        }
        
      })}
     
     
    
      
    </div>
  )
}

export default TaskList
