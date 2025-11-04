import './App.css';
import { FaBeer } from 'react-icons/fa';
import Button from './components/button/Button'
import './styles/tailwind.css';
import './App.css'
import Chip from'./components/chip-mcp/Chip'
import DesignPage from './pages/DesignPage';
import Toggle from './components/toggle/Toggle';
import React from 'react';

function App() {
  const [showDesignPage, setShowDesignPage] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  const [toggle1, setToggle1] = React.useState('off');
  const [toggle2, setToggle2] = React.useState('on');
  const [toggle3, setToggle3] = React.useState('off');
  const [toggle4, setToggle4] = React.useState('on');

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (showDesignPage) {
    return (
      <>
        <div className='absolute top-4 left-4 z-10 flex gap-4'>
          <Button type={'btn-secondary'} title={'Back'} onClick={() => setShowDesignPage(false)} />
          <Button type={'btn-secondary'} title={theme === 'light' ? '🌙 Dark' : '☀️ Light'} onClick={toggleTheme} />
        </div>
        <DesignPage />
      </>
    );
  }

  return (
    <div className='container'>
      <div className='flex space-x-8 items-center'>
        <h1 className='text-xl font-light m-10 text-neutral-text'>Button Demo</h1>
        <Button type={'btn-secondary'} title={theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'} onClick={toggleTheme} />
      </div>
      <div className='flex space-x-8 m-10'>
        <Button type={'btn-primary'} title={"Open Design Page"} onClick={() => setShowDesignPage(true)} />  
        <Button type={'btn-secondary'} title={"Secondary Button"}/>  
        <Button type={'btn-disabled'} title={'Disabled Button'}/>
        <Button type={'btn-tertitary'} title={<FaBeer />}/>   
        <Chip type={'chip-mcp'} title={"Chip MCP"} interactive={true}/>
        <Chip type={'chip-mcp'} title={"Chip MCP"} interactive={true} sentiment={'success'} />
        <Chip type={'chip-mcp'} title={"Chip MCP"} interactive={true} sentiment={'action'} />
      </div>
      <div className='flex flex-col space-y-4 m-10'>
        <h2 className='text-xl font-light text-neutral-text'>Toggle Components</h2>
        <div className='flex space-x-8 items-center'>
          <div className='flex flex-col gap-2'>
            <span className='text-sm text-neutral-text-weak'>Regular - OFF</span>
            <Toggle size="regular" value={toggle1} onChange={(isOn) => setToggle1(isOn ? 'on' : 'off')} />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-sm text-neutral-text-weak'>Regular - ON</span>
            <Toggle size="regular" value={toggle2} onChange={(isOn) => setToggle2(isOn ? 'on' : 'off')} />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-sm text-neutral-text-weak'>Small - OFF</span>
            <Toggle size="small" value={toggle3} onChange={(isOn) => setToggle3(isOn ? 'on' : 'off')} />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-sm text-neutral-text-weak'>Small - ON</span>
            <Toggle size="small" value={toggle4} onChange={(isOn) => setToggle4(isOn ? 'on' : 'off')} />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-sm text-neutral-text-weak'>Disabled</span>
            <Toggle size="regular" value="on" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
