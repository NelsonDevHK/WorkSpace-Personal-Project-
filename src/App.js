import { useState } from 'react';
import './App.css';
import Background from './Components/Background'
import { Form } from './Components/Form';
import SoundWave from './Components/Soundwave'
import { Youtube } from './Components/Youtube';

function App() {
  const [youtubeLink, setYoutubeLink] = useState(null);
  var working = false;
  if(youtubeLink){
    working = !working;
    var sound = <SoundWave />;
  }
  else{
    var youtubeBar = <Form setYoutubeLink={setYoutubeLink}/>;
    var enter = <Youtube YoutubeLink={youtubeLink}/>;
  }
  
  return (
    <div className="App">
      <h1 className='Logo'>NELSON IN WONDERLAND</h1>
      <Background GetWorking={working} />
      {sound}
      {youtubeBar}
      {enter}
    </div>
  );
}

export default App;


