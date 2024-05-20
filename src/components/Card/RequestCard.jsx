// import { Table } from "@mui/material";
import { Table } from "antd";
import React from "react";
import "../../App.css";

import PageItems from "../../RequestData.js";

function RequestCard() {
  console.log(PageItems, "PageItems");

  const columns = [
    { title: "", dataIndex: "image", key: "image" },
    { title: "Name / Email", dataIndex: "nameEmail", key: "nameEmail" },
    { title: "Type", dataIndex: "typeRequest", key: "typeRequest" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Date", dataIndex: "dateRequest", key: "dateRequest" },
    { title: "", dataIndex: "action", key: "action" },
  ];

  const dataSource = [];

  PageItems?.forEach((item) => {
    let { id, image, displayName, type, status, date } = item;
    dataSource.push({
      key: id,
      image: image,
      nameEmail: displayName,
      typeRequest: type,
      status: (
        <>
          <div>
            {status?.id === 2 ? (
              <>
                {" "}
                <span className="new-text-success">
                  {status && status.value.toLowerCase() === "active"
                    ? "Active"
                    : ""}
                </span>{" "}
              </>
            ) : (
              <>
                {status?.id === 1 ? (
                  <>
                    {" "}
                    <span className="new-text-pending">
                      {" "}
                      {status && status.value.toLowerCase() === "pending"
                        ? "Pending"
                        : ""}
                    </span>{" "}
                  </>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </>
      ),
      dateRequest: date,
      action: (
        <>
          <div className="arrowButton">
            <img
              src={require("../../Assets/WallXIcon/arrowRight.svg").default}
              alt="add"
              className="icon-img"
            />
          </div>
        </>
      ),
    });
  });

  return (
    <div className="requestCard">
      <div className="requestCardContainer">
        {/* Recent Request  */}
        <h2>Recent Requests</h2>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default RequestCard;
