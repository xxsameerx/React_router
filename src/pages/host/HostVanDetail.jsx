import React from "react";
import { useParams, Link } from "react-router-dom";
import vansData from "../vans/vanData";

export default function HostVanDetail() {
  const { hostVanId } = useParams();

  function getProductDetails(products, Id) {
    return products.find((product) => product.uuid === Id);
  }
  const data = getProductDetails(vansData, hostVanId);

  if (!data) {
    return <div>Van not found!</div>;
  }

  return (
    <>
      <h1>Van Details</h1>
      <div
        style={{
          backgroundColor: "ffe6e6",
          display: "flex",
          margin: "5rem 4rem",
          width: "80%",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ marginRight: "2rem" }}>
          <img style={{ width: "100%" }} src={data.imageUrl} alt={data.name} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>{data.name}</h3>
            <p>Type: {data.type}</p>
            <p>Price: ${data.price}/day</p>
          </div>
          <strong style={{ color: "red", fontWeight: "lighter" }}>
            {data.description}
          </strong>
          <div></div>
        </div>
        <nav>
          <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
            <li style={{ marginRight: "1rem" }}>
              <Link to={`/details/${data.uuid}`}>Details</Link>
            </li>
            <li style={{ marginRight: "1rem" }}>
              <Link to={`/pricing/${data.uuid}`}>Pricing</Link>
            </li>
            <li>
              <Link to={`/photos/${data.uuid}`}>Photos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
