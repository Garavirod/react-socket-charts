import React, { useState, useEffect } from 'react';

export const BandList = (props) =>{
    const { dataBands, vote, deleteBand, modifyNameBand } = props;
    const [bands,setBands] = useState(dataBands);

    useEffect(()=>{
        setBands(dataBands);
    },[dataBands]);

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
        console.log(id, name);
        modifyName(id, name);
    }

    /* Add vote */
    const addVote = ( id ) =>{
        vote(id);
    }

    /* Delete a band */
    const removeBand = ( id ) =>{
        deleteBand(id);
    }

    /* Name modification */
    const modifyName = ( id,name ) => {
        modifyNameBand( id, name);
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