import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";

const DataItems = ({ datum }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const getImg = async () => {
      const res = await axios.get(
        `https://avatars.dicebear.com/v2/avataaars/${datum.username}.svg?options[mood][]=happy`
      );
      //   console.log(res.config.url)
      setImage(res.config.url);
    };
    getImg();
  }, []);
  return (
    <div className="container">
      <Row>
        <Col xs={24} sm={24} md={6} lg={12} xl={24}>
          <Row>
            <Col xs={24} sm={24} md={6} lg={12} xl={6}>
              <img className="card-img" src={image} alt="User image" />
            </Col>
            <Col xs={24} sm={24} md={6} lg={12} xl={15}>
              <div className="card-body">
                <p>
                  <strong>Name: </strong>
                  {datum.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {datum.email}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {datum.phone}
                </p>
                <p>
                  <strong>Email: </strong>
                  {datum.email}
                </p>
                <p>
                  <strong>Address: </strong>
                  {`${datum.address.suite}, ${datum.address.street}, ${datum.address.city}`}
                </p>
                <p>
                  <strong>Website: </strong>
                  {datum.website}
                </p>
                <p>
                  <strong>Company: </strong>
                  {datum.company.name}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DataItems;
