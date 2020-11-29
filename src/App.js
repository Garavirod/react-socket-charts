import React, { useState, useEffect } from 'react';
import { AddBandForm } from './components/AddBand';
import { BandList } from './components/BandList';
import { useSocket } from './hooks/useSocket';



function App() {
  
  const [bands, setBands] = useState([]);
  const {socket, online} = useSocket('http://localhost:5000'); 
  /* Emmit new vote to soket */
  const vote = ( id ) => {
    console.log('vote ', id);
    socket.emit('new-vote', id )
  }

  /* Emmit a deleteing */
  const deleteBand = ( id ) =>{
    socket.emit('delete-band', id);
  }

  /* Emmit a name modification */
  const modifyNameBand = ( id, name ) =>{
    socket.emit('change-name-band', {id, name});
  }

  /* Emmit - add new band */
  const addNewBand = ( name ) => {
    socket.emit('add-new-band', {name});
  }

  useEffect(()=>{
    socket.on('current-list', (bands)=>{
      console.log(bands);
      setBands(bands);
    });
  },[socket]);

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
          <BandList
            vote = { vote }
            deleteBand = { deleteBand }
            dataBands = { bands }
            modifyNameBand = { modifyNameBand }
          />
        </div>
        <div className="col-md-4">
          <AddBandForm
            addNewBand = { addNewBand }
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
