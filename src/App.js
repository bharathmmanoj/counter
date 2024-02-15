import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
   <div className='d-flex flex-column p-5 rounded align-items-center justify-content-center w-100' style={{height:"100vh"}}>
    <div className='d-flex flex-column align-items-center justify-content-center p-5 rounded'
    style={{backgroundColor:"white"}}>
      <h2 className='text-primary'>Counter Application</h2>
      <Counter />
    </div>
    
    
   </div>
  )
}

export default App;
