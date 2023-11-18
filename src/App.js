import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorPovider } from './contexts/color';
import SelectColors from './components/SelectColors';

function App() {
  return (
    <ColorPovider>
      <div className="App">
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </div>
    </ColorPovider>
  );
}

export default App;
