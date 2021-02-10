import React from 'react'

const DataItems = ({ datum }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col cardHolder">
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top" src="..." alt="User image" />
                                <div className="card-body">
                                    {/* <h5 className="card-title">{datum.username}</h5> */}
                                    <p>
                                        <strong>Name: </strong>{datum.name}
                                    </p>
                                    <p>
                                        <strong>Email: </strong>{datum.email}
                                    </p>
                                    <p>
                                        <strong>Phone: </strong>{datum.phone}
                                    </p>
                                    <p>
                                        <strong>Email: </strong>{datum.email}
                                    </p>
                                    <p>
                                        <strong>Address: </strong>{`${datum.address.suite}, ${datum.address.street}, ${datum.address.city}`}
                                    </p>
                                    <p>
                                        <strong>Website: </strong>{datum.website}
                                    </p>
                                    <p>
                                        <strong>Company: </strong>{datum.company.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataItems
