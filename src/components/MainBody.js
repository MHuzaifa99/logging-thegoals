import React from "react";
import GoalCard from "./GoalCard";
import { useState } from "react";
import InputBody from "./InputBody";

function MainBody(){
    const golazo = ['I want to become an astronaut', 'I will sacrifice my life for Pakistan'];
    const done = ['I want to become a teacher', 'I will sacrifice my life for Hindustan'];

    const [goal, setGoal] = useState('')
    const [goalType, setGoalType] = useState(false)
    const [inQueue, setInQueue] = useState([])
    const [completed, setCompleted] = useState([])



    const listGoals = inQueue.map((goal, index) => <GoalCard key={index} goal={goal} />);
    const listCompletedGoals = completed.map((goal, index) => <GoalCard key={index} goal={goal} />);
  


    return (<>
        <section className='inputBody'>
        {/* Input to Write A Goal */}
        <div className='goalInput'>
          <h4 style={{color: "black"}}>Type a goal here:</h4>
          <input type='text' value={goal} onChange={(e) => setGoal(e.target.value)} className='input' placeholder='I want to be...'></input>
          <input type='checkbox' value={goalType} onChange={(e)=> setGoalType(!goalType)}></input> <p style={{display: "inline", marginTop: '20px', marginLeft: '5px'}}>If goal completed</p>
        </div>
        {/* Button to Process Input */}
        <div className='btnInput'>
          <button onClick={() => {
            if(goal) goalType ? setCompleted([...completed, goal]):setInQueue([...inQueue, goal])}} className='btn'>Sumbit!</button>
        </div>
        <hr/>
      </section>
        <section className='mainBody'>
        {/* Total Goals Generated From Input */}
        <div className='goals'>
          <h3 className='h3'>Goals In Queue</h3>
          <hr/>
          <ul className='goalsList'>
          {listGoals}
          </ul>
        </div>
        {/* Goals Which Are Completed Out Of Total Goals */}
        <div className='goalsCompleted'>
          <h3 className='h3'>Goals Completed</h3>
        <hr/>
        <ul className='goalsList'>
          {listCompletedGoals}
          </ul>
        </div>
      </section>
      </>
    )
}

export default MainBody