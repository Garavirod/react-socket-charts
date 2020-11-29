import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const AddBandForm = () => {
    const [value,setValue] = useState('');
    
    /* Extract from context 'socket' */
    const { socket } = useContext(SocketContext);

    /* Senddata to socket */
    const newInstanceBand = ( e ) =>{
        e.preventDefault();
        // console.log(value);
        if(value.trim().length>0){
            socket.emit('add-new-band', {name:value});
            setValue('');
        }
    }

    return(
        <React.Fragment>
            <h3>Add band</h3>
            <form onSubmit = { newInstanceBand } >
                <input 
                    type="text" 
                    name="" id=""
                    className="form-control"
                    placeholder="Add new band.."
                    value = { value }
                    onChange = { (ev) =>setValue(ev.target.value) }
                />
            </form>
        </React.Fragment>
    )
}