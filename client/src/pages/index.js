import React from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";

// home page
const Home = () => {
  return (
    <Layout>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </Layout>
  );
};

export default Home;
