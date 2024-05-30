import React from 'react'

const View = () => {
    return (
        <div>
            <div className="col-12 col-lg-6 ">
                <h2 className="d-flex justify-content-center " >View Data</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
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
                                    <td>{value.company}</td>
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