import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER } from '../redux/action/crudAction';
import Header from '../components/Header';


const View = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.crud.users);

    useEffect(() => {
        dispatch(GET_USER());
    },[])
    return (
        <div>
            <Header/>
            <div className="col-12 col-lg-6 mx-auto">
                <h2 className="d-flex justify-content-center " >View Data</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            Object.entries(data).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.message}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View