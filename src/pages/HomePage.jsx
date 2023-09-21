import React from "react";
import { useGetPostsQuery } from "../api/apiSlice";

const HomePage = () => {
  const { data, isLoading, isError } = useGetPostsQuery();
  console.log(data);

  return <main>HomePage</main>;
};

export default HomePage;
