import React from 'react';

export const BandList = () =>{

    const createRows = () =>{
        return (
            <tr>
                <td>
                    <button className="btn btn-success">Vote +</button>
                </td>
                <td>
                    <input type="text" name="" id="" className="form-control"/>
                </td>
                <td>23</td>
                <td>
                    <button className="btn btn-danger">Delte</button>
                </td>
            </tr>
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