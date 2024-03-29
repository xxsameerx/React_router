import React from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
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
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={data.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${data.type}`}>{data.type}</i>
            <h3>{data.name}</h3>
            <h4>${data.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink to="." end>
            Details
          </NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        {/* <Outlet context={{ data }} /> */}
      </div>
    </section>
  );
}
