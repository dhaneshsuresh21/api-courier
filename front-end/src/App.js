import react from 'react';
import React from 'react';
import { useState } from 'react';
import ApiCourier from './components/ApiCourier';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  // dark 🌙
  const [theme, setTheme] = useState("Light 💡");

  return (
    <ThemeContext.Provider value={{theme, setTheme}} >
      <div className={`h-screen mx-0 my-0 App bg-${theme === "Light 💡" ? "white" : "black"}`}>
        <ApiCourier />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
