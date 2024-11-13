import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const fetchuser = async () => {
    try {
      const token = localStorage.getItem("token");
      const resopnse = await axios.get("/api/", {
        headers: {
          Authorization: "Bearer ${token}",
        },
      });
      if (resopnse.status !== 201) {
        navigate("/login")
      }
    } catch (err) {
        navigate("/login")
        console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return <div>Home</div>;
};

export default Home;
