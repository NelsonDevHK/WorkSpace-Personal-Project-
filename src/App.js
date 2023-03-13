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
  
  return (
    <div className="App">
      <h1 className='Logo'>Nelson in WonderLand</h1>
      <Background GetWorking={working} />
      {sound}
      <Form setYoutubeLink={setYoutubeLink}/>
      <Youtube YoutubeLink={youtubeLink}/>
    </div>
  );
}

export default App;


