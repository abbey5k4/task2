import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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

  const { Meta } = Card;
  return (
    <div>
      <Card
        // style={{ width: 300 }}
        cover={<div className="imgHolder"><img alt="example" src={image} style={{width: "200px", height: "200px"}}/></div>}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        className="card"
      >
        <div className="card-body">
          <p>
            <strong>Name: </strong>
            {datum.name}
          </p>
          {/* <p>
            <strong>Email: </strong>
            {datum.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {datum.phone}
          </p> */}
          <p>
            <strong>Email: </strong>
            {datum.email}
          </p>
          {/* <p>
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
          </p> */}
        </div>
      </Card>
    </div>
  );
};

export default DataItems;
