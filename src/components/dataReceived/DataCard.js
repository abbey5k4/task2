import React from "react";
import Spinner from "../ui/Spinner";
import DataItems from "./DataItems";

import { Row, Col } from "antd";

const DataCard = ({ isLoading, data }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <Row gutter={16}>
        {data.map((datum) => (
          <Col xs={24} sm={24} md={8} lg={8} xl={6} className="column">
            <DataItems datum={datum} key={datum.id}></DataItems>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DataCard;
