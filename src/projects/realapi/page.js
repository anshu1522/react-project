import React, { useEffect, useState } from "react";
import "./page.css";
const Page = () => {
  const [hits, setHits] = useState([]);
  const getImages = async () => {
    try {
      const res = await fetch(
        "https://hn.algolia.com/api/v1/search?query=html"
      );
      const data = await res.json();
      setHits(data.hits);
    } catch (error) {
      console.log("error message",error);
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
    <h2>Total</h2>
       {hits?.map((item) => { 
        return <h1 className="screen">{item?.title}</h1>
   } )}  
    </>
  );
};
export default Page;
