import React from 'react';
import './App.css';

function GoalCard({ goal }) {
  return (
    <div className='goalCard'>
      <li>{goal}</li>
    </div>
  );
}

function App() {
  const golazo = ['I want to become an astronaut', 'I will sacrifice my life for Pakistan'];
  const done = ['I want to become a teacher', 'I will sacrifice my life for Hindustan'];

  const listGoals = golazo.map((goal, index) => <GoalCard key={index} goal={goal} />);
  const listCompletedGoals = done.map((goal, index) => <GoalCard key={index} goal={goal} />);

  return (
    <>

    {/* Navbar */}
    <nav className='navbar'>
      <h1>Logged Goals</h1>
      <h5 style={{display: "inline"}}>.com</h5>
    </nav>


    <section className='inputBody'>
      {/* Input to Write A Goal */}
      <div className='goalInput'>
        <h4>Type a goal here:</h4>
        <input type='text' className='input' placeholder='I want to be...'></input>
      </div>
      {/* Button to Process Input */}
      <div className='btnInput'>
        <button className='btn'>Sumbit!</button>
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

    <footer className='footer'>
      <p>@Created by Umair Bin Salman, Huzaifa and Ozaib Khatri</p>
    </footer>
    </>
  );
}

export default App;
