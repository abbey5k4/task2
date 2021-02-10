import React, { useState, useEffect } from 'react';
import axios from "axios";

const DataItems = ({ datum }) => {
    
    const [ image, setImage ] = useState("");
      useEffect(() => {
          const getImg = async() => {
              const res = await axios.get(`https://avatars.dicebear.com/v2/avataaars/${datum.username}.svg?options[mood][]=happy`)
              console.log(res.config.url)
              setImage(res.config.url);
          }
          getImg()
      }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col cardHolder">
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top" src={image} alt="User image" />
                                <div className="card-body">
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
