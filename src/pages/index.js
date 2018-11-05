import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="home-page">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            Powering payments for decentralised applications.
          </h1>
          <div className="page-subtitle">
            Havven enables stable, censorship resistant payments for dApps in
            over 10 currencies. Our stablecoins are backed by a network of over
            eighty thousand collateral holders around the world.
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
