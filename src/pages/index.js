import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from '../components/slider';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
