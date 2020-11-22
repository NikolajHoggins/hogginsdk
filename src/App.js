import React from 'react';
import Taskbar from './Components/Taskbar';
import Window from './Components/Window';

function App() {
  return (
    <div className="view">
      <Window>Test window</Window>
      <Taskbar />
    </div>
  );
}

export default App;
