import React, { useState } from 'react';

export const AddBandForm = (props) => {
    const { addNewBand } = props;
    const [value,setValue] = useState('');

    /* Senddata to socket */
    const newInstanceBand = ( e ) =>{
        e.preventDefault();
        console.log(value);
        if(value.trim().length>0){
            addNewBand(value);
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
                    onChange = { (ev)=>setValue(ev.target.value) }
                />
            </form>
        </React.Fragment>
    )
}