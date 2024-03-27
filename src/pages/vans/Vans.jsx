import React from "react";
import vansData from "./vanData";
import { Link } from "react-router-dom";

export default function Vans() {
  return (
    <>
      <ul>
        {vansData.map(({ uuid, name, price, imageUrl, type }) => (
          <li
            style={{
              listStyle: "none",
              margin: "2rem",
            }}
            key={uuid}
          >
            <div
              style={{
                border: "3px inset pink",
                padding: "1rem",
                display: "flex",
                margin: "3rem",
              }}
            >
              <Link to={`/vans/${uuid}`}>
                <img style={{ width: "300px" }} src={imageUrl} alt="" />
              </Link>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontWeight: "bold" }}>{name}</h3>
                <p>${price}/day</p>
                <i
                  style={{
                    fontStyle: "italic",
                    color: "red",
                    fontSize: "20px",
                    fontWeight: "normal",
                    backgroundColor: "yellow",
                  }}
                >
                  {type}
                </i>
              </div>
            </div>
          </li>
        ))}
      </ul>
      ;
    </>
  );
}
