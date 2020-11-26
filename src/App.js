import React from 'react';
import { AddBandForm } from './components/AddBand';
import { BandList } from './components/BandList';
function App() {
  return (
    <div className="container">
      <div className="alert">
        <p>
          Server status:
          <span className="text-success ml-2">Online</span>
          <span className="text-danger ml-2">Offline</span>
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
