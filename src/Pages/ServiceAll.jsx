import React, { useEffect, useState } from "react";
import PrductCard from "./../Components/PrductCard";
import { Link } from "react-router";
import MyContainerLayout from "../Components/MyContainerLayout";

const ServiceAll = () => {
  const [prducts, setPrducts] = useState([]);

  useEffect(() => {
    fetch("/prduct.json")
      .then((res) => res.json())
      .then((data) => setPrducts(data));
  }, []);

  return (
    <MyContainerLayout className="mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">All prducts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {prducts.map((prduct) => (
          <prductCard key={prduct.prductId} prduct={prduct} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </MyContainerLayout>
  );
};

export default ServiceAll;
