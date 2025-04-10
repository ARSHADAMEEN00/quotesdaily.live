import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../../server/store/app";

function Home() {
  const dispatch = useDispatch();
  const dashLoading = useSelector((state) => state.app.quotes);

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  console.log(dashLoading);

  return <div>Home</div>;
}

export default Home;
