import { useState } from "react";

const PetListing = () => {
  const [featuredPets, SetfeaturedPets] = useState([]);
  fetch(`http://localhost:5000/petlist`)
    .then((res) => res.json())
    .then((data) => {
      SetfeaturedPets(data);
    })
    .catch((error) => {
      console.log(error);
    });
    
  return (
    <div>
      <h1>pet listing</h1>
    </div>
  );
};

export default PetListing;