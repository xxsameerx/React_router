import React from "react";
import vansData from "../vans/vanData";
import { Link } from "react-router-dom";

export default function HostVans() {
  const recievedData = vansData.filter(({ hostId }) => hostId == 123);

  return (
    <>
      <h1>Your listed vans</h1>
      <ul>
        {recievedData.map(({ uuid, name, price, imageUrl }) => (
          <li
            style={{
              listStyle: "none",
              margin: "2rem",
            }}
            key={uuid}
          >
            <div
              style={{
                padding: "1rem",
                display: "flex",
                margin: "3rem",
                backgroundColor: "ffe6e6",
              }}
            >
              <Link to={`/host/hostvan/${uuid}`}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={imageUrl}
                  alt=""
                />
              </Link>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontWeight: "bold" }}>{name}</h3>
                <p>${price}/day</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
