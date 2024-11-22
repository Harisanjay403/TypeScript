import './App.css';

const App =()=> {
  return (
    <>
     <h1 className="heading">Taskify</h1>
     
     <div className="input-container">
        <input type="text" className='input-element'/>
        <button type='submit' className='submit-button'> Add</button>
     </div>
    </>
  );
}

export default App;
