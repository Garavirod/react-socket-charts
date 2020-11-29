import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandList = () =>{
    
    const [bands,setBands] = useState([]);
    const {socket} = useContext(SocketContext);

    useEffect(()=>{
        socket.on('current-list', (bands)=>{            
            setBands(bands);
        })
        return () => socket.off('current-list');
    },[socket]);

    const changeName = ( event,id ) =>{
        const newName = event.target.value;
        setBands( bands => bands.map( band => {
            if(band.id === id ){
                band.name = newName;
            }
            return band;
        }));
    }

    const outFocus = (id, name) =>{
        socket.emit('change-name-band', {id, name});
    }

    /* Add vote */
    const addVote = ( id ) =>{
        socket.emit('new-vote', id );
    }

    /* Delete a band */
    const removeBand = ( id ) =>{
        socket.emit('delete-band', id);
    }

    const createRows = () =>{
        return (
            bands.map((b)=>(
                <tr key={b.id}>
                    <td>
                        <button 
                            className="btn btn-success"
                            onClick={()=>addVote(b.id)}
                        >Vote +</button>
                    </td>
                    <td>
                        <input 
                            value={b.name}
                            type="text" 
                            name="" 
                            onChange={(event)=>changeName(event, b.id)}                            
                            className="form-control"
                            onBlur={()=>outFocus(b.id, b.name)}
                        />
                    </td>
                    <td>{b.votes}</td>
                    <td>
                        <button 
                            className="btn btn-danger"
                            onClick = {()=>removeBand(b.id)}
                        >Delte</button>
                    </td>
                </tr>
            ))
        )
    }

    return(
        <React.Fragment>
            <h3>Bandlist</h3>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Vote</th>
                        <th>Name</th>
                        <th>N° votes</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
        </React.Fragment>
    )
}