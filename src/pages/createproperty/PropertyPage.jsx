import React from "react";
import CreatePropertyForm from "../../components/propertyform/CreatePropertyForm.jsx";
import "./propertypage.css";



const CreatePropertyPage = () => {
  const handlePropertyCreate = (propertyData) => {
    // Handle the creation of the property
    // You can send the property data to the server or perform any other necessary actions
    console.log('Property created:', propertyData);
  };

  return (
    <div>
      <h1>Create Property</h1>
      <CreatePropertyForm onCreate={handlePropertyCreate} />
    </div>
  );
};

export default CreatePropertyPage;