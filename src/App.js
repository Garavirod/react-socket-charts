import React, { useContext } from 'react';
import { SocketContext } from './context/SocketContext';
import { BandList } from './components/BandList';
import { AddBandForm } from './components/AddBand';



function App() {
  
  /* Extract from coentext 'online' */
  const {online} =  useContext(SocketContext)
  return (
    <div className="container">
      <div className="alert">
        <p>
          Server status:
          {
            (online) ? (
              <span className="text-success ml-2">Online</span>
            ) : 

            (
              <span className="text-danger ml-2">Offline</span>
            )
          }                  
        </p>
      </div>
      <h1>Graphic Bands</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <BandList/>
        </div>
        <div className="col-md-4">
          <AddBandForm/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
