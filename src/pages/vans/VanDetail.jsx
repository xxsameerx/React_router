import React from "react";
import { useParams } from "react-router-dom";
import vansData from "./vanData";
import { Link } from "react-router-dom";
export default function VanDetails() {
  const { vanId } = useParams();

  function getProductDetails(products, vanId) {
    return products.find((product) => product.uuid === vanId);
  }

  const data = getProductDetails(vansData, vanId);

  if (!data) {
    return <div>Van not found!</div>;
  }
  return (
    <>
      <>
        <h1>Van Details</h1>
        <ul style={{ listStyle: "none" }}>
          <div>
            <img style={{ width: "70%" }} src={data.imageUrl} alt={data.name} />
          </div>
          <h3> {data.name}</h3>
          <li>Type: {data.type}</li>
          <li>Price: ${data.price}/day</li>
          <li>
            <strong style={{ color: "red", fontWeight: "lighter" }}>
              {data.description}
            </strong>
          </li>
          <li
            style={{
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <Link to="/vans">Go Back</Link>
          </li>
        </ul>
      </>
    </>
  );
}
