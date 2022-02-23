import './App.css';
import { FaBeer } from 'react-icons/fa';
import Button from './components/button/Button'
import './styles/tailwind.css';
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className='flex space-x-8'>
        <h1 className='text-xl font-light m-10 text-neutral-text'>Button Demo</h1>
      </div>
      <div className='flex space-x-8 m-10'>
        <Button type={'btn-primary'} title={"Primary Button"} />  
        <Button type={'btn-secondary'} title={"Secondary Button"}/>  
        <Button type={'btn-disabled'} title={'Disabled Button'}/>
        <Button type={'btn-tertitary'} title={<FaBeer />}/>   
        {/* <input type="checkbox" class="appearance-none border-2 checked:bg-action-bg border-action-border h-4 w-4 rounded-3xl" /> */}
      </div>
    </div>
  );
}

export default App;
