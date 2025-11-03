import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Contexts/useAuth";

const PrductCard = ({ prduct }) => {
  const { prductId, prductName, price, rating, image } = prduct;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (user) {
      navigate(`/prducts/${prductId}`);
    } else {
      navigate("/Signin", { state: { from: `/prducts/${prductId}` } });
    }
  };

  return (
    <div className="border rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={prductName}
        className="rounded-xl mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-lg font-bold">{prductName}</h3>
      <p className="text-gray-600">Rating: ⭐ {rating}</p>
      <p className="font-semibold">Price: ${price}</p>
      <button
        onClick={handleViewDetails}
        className="mt-3 bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700"
      >
        View Details
      </button>
    </div>
  );
};

export default PrductCard;
