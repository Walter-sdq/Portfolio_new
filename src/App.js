import './App.css';
import './utils/fontawesome/css/all.min.css'

import Container from './components/container/container';
// import { useEffect } from 'react';

function App() {
  
  // useEffect(() => {
  //   document.documentElement.requestFullscreen().catch((err) => {
  //     console.log('Error attempting to enable full-screen mode:', err);
  //   });
  // }, []);

  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
