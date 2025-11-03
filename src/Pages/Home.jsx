import React, { useEffect, useState } from "react";
import HeroSwiper from "../Components/HeroSwiper";
import { Link } from "react-router";
import PrductCard from "../Components/PrductCard";

const Home = () => {
  const [prducts, setPrducts] = useState([]);

  useEffect(() => {
    fetch("/prduct.json")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setPrducts(topRated);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSwiper />
      <h2 className="text-3xl font-bold text-center mb-6 mt-8">Popular Prducts</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {prducts.map((prduct) => (
          <PrductCard key={prduct.prductId} prduct={prduct} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/services">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
