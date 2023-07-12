import React, { useState } from "react";
import PropTypes from "prop-types";
import "./createpropertyform.css";
import { FaCloudUploadAlt, FaPlus, FaCar, FaMinus, FaBroom, FaWifi, FaGlobeAmericas, FaTv, FaBed, FaBath } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

import { MdCloudUpload } from 'react-icons/md';

const CreatePropertyForm = ({ onCreate }) => {
  const [propertyData, setPropertyData] = useState({
    kind: "",
    street: "",
    number: "",
    postal: "",
    city: "",
    state: "",
    country: "",
    description: "",
    detailedDescription: "",
    images: [],
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    maxNights: 0,
    minNights: 0,
    accommodates: 0,
    facilities: {
      washer: false,
      lift: false,
      vacuum: false,
      hairDryer: false,
      wifi: false,
      balcony: false,
      television: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIncrement = (field) => {
    setPropertyData((prevData) => ({
      ...prevData,
      [field]: prevData[field] + 1,
    }));
  };

  const handleDecrement = (field) => {
    setPropertyData((prevData) => ({
      ...prevData,
      [field]: prevData[field] > 0 ? prevData[field] - 1 : 0,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFacilityToggle = (facility) => {
    setPropertyData((prevData) => ({
      ...prevData,
      facilities: {
        ...prevData.facilities,
        [facility]: !prevData.facilities[facility],
      },
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPropertyData((prevData) => ({
      ...prevData,
      images: [...prevData.images, file],
    }));
  };

  const handleImageRemove = (index) => {
    setPropertyData((prevData) => {
      const images = [...prevData.images];
      images.splice(index, 1);
      return {
        ...prevData,
        images,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(propertyData);
  };

  const handleDelete = () => {
    // Handle the delete functionality here
    // This function will be called when the "Delete" button is clicked
  };

  const handleEdit = () => {
    // Handle the edit functionality here
    // This function will be called when the "Edit" button is clicked
  };

  const handleDeactivate = () => {
    // Handle the deactivate functionality here
    // This function will be called when the "Deactivate" button is clicked
  };


  return (
    <div className="form container">
    <form onSubmit={handleSubmit}>
      <h2>What kind of place will you host?</h2>

      <div className="button-row">
      <button type="button" className="property-button">
  <span className="property-button-icon">
    <FaBed />
  </span>
  <span className="property-button-text">Apartment</span>
</button>
<button type="button" className="property-button">
  <span className="property-button-icon">
    <FaCar />
  </span>
  <span className="property-button-text">Resort</span>
</button>
<button type="button" className="property-button">
  <span className="property-button-icon">
    <FaBath />
  </span>
  <span className="property-button-text">Hotel</span>
</button>
<button type="button" className="property-button">
  <span className="property-button-icon">
    <FaGlobeAmericas />
  </span>
  <span className="property-button-text">Villa</span>
</button>

      </div>

      <h2>Where do we find this place?</h2>

      <div className="input-row">
  <div className="details-input">
    <label htmlFor="street">Street</label>
    <input
      type="text"
      id="street"
      name="street"
      placeholder="Enter street"
      value={propertyData.street}
      onChange={handleInputChange}
      required
    />
  </div>

  <div className="details-input">
    <label htmlFor="number">Number</label>
    <input
      type="text"
      id="number"
      name="number"
      placeholder="Enter number"
      value={propertyData.number}
      onChange={handleInputChange}
      required
    />
  </div>
</div>

<div className="input-row">
  <div className="details-input">
    <label htmlFor="postal">Postal Code</label>
    <input
      type="text"
      id="postal"
      name="postal"
      placeholder="Enter postal code"
      value={propertyData.postal}
      onChange={handleInputChange}
      required
    />
  </div>

  <div className="details-input">
    <label htmlFor="city">City</label>
    <input
      type="text"
      id="city"
      name="city"
      placeholder="Enter city"
      value={propertyData.city}
      onChange={handleInputChange}
      required
    />
  </div>

  <div className="details-input">
    <label htmlFor="state">State</label>
    <input
      type="text"
      id="state"
      name="state"
      placeholder="Enter state"
      value={propertyData.state}
      onChange={handleInputChange}
      required
    />
  </div>
</div>

<div className="input-row">
  <div className="details-input">
    <label htmlFor="country">Country</label>
    <input
      type="text"
      id="country"
      name="country"
      placeholder="Enter country"
      value={propertyData.country}
      onChange={handleInputChange}
      required
    />
  </div>
</div>
<h2>Add a description of your place.</h2>
      <div className="input-row">
        <textarea
          name="description"
          placeholder="Short description"
          value={propertyData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-row">
        <textarea
          name="detailedDescription"
          placeholder="Detailed description"
          value={propertyData.detailedDescription}
          onChange={handleInputChange}
          required
        />
      </div>




      <h2>Upload your property pictures</h2>

      <div className="image-upload">
  <label htmlFor="file-input" className="upload-icon">
    <MdCloudUpload />
  </label>
  <div className="upload-input-wrapper">
    <input id="file-input" type="file" />
    <input type="text" className="upload-field" placeholder="" />
  </div>
  <label htmlFor="file-input" className="upload-label">
    Upload
  </label>
</div>

<div className="image-preview">
  <div className="image-item">
    <img src="#" alt="Property 1" />
    <button type="button" className="remove-button">
      <MdClose />
    </button>
  </div>
  <div className="image-item">
    <img src="#" alt="Property 2" />
    <button type="button" className="remove-button">
      <MdClose />
    </button>
  </div>
  <div className="image-item">
    <img src="#" alt="Property 3" />
    <button type="button" className="remove-button">
      <MdClose />
    </button>
  </div>
  <div className="image-item">
    <img src="#" alt="Property 4" />
    <button type="button" className="remove-button">
      <MdClose />
    </button>
  </div>
</div>




 <div>

   

 <h2>Add facilities available at your place.</h2>

 <div className="input-row facilities-row">
  <div className="details-input facility-item">
    <div className="input-with-label">
      <div className="increment-decrement">
        <button
          type="button"
          className="decrement-button round-button"
          onClick={() => handleDecrement("bedrooms")}
        >
          <FaMinus />
        </button>
      </div>
      <div className="input-field">
        <input
          type="number"
          name="bedrooms"
          value={propertyData.bedrooms}
          onChange={handleChange}
          min={0}
          placeholder="Bedrooms"
          style={{
            border: '1px solid transparent',
            backgroundColor: 'white',
            minWidth: '60px',
            maxWidth: '70px',
          }}
        />
        <label className="field-label">Bedrooms</label>
        <div className="increment-decrement">
          <button
            type="button"
            className="increment-button round-button"
            onClick={() => handleIncrement("bedrooms")}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="details-input facility-item">
    <div className="input-with-label">
      <div className="increment-decrement">
        <button
          type="button"
          className="decrement-button round-button"
          onClick={() => handleDecrement("bathrooms")}
        >
          <FaMinus />
        </button>
      </div>
      <div className="input-field">
        <input
          type="number"
          name="bathrooms"
          value={propertyData.bathrooms}
          onChange={handleChange}
          min={0}
          placeholder="Bathrooms"
          style={{
            border: '1px solid transparent',
            backgroundColor: 'white',
            minWidth: '60px',
            maxWidth: '80px',
          }}
        />
        <label className="field-label">Bathrooms</label>
        <div className="increment-decrement">
          <button
            type="button"
            className="increment-button round-button"
            onClick={() => handleIncrement("bathrooms")}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="details-input facility-item">
    <div className="input-with-label">
      <div className="increment-decrement">
        <button
          type="button"
          className="decrement-button round-button"
          onClick={() => handleDecrement("parking")}
        >
          <FaMinus />
        </button>
      </div>
      <div className="input-field">
        <input
          type="number"
          name="parking"
          value={propertyData.parking}
          onChange={handleChange}
          min={0}
          placeholder="Parking"
          style={{
            border: '1px solid transparent',
            backgroundColor: 'white',
            minWidth: '80px',
            maxWidth: '80px',
          }}
        />
        <label className="field-label">Parking</label>
        <div className="increment-decrement">
          <button
            type="button"
            className="increment-button round-button"
            onClick={() => handleIncrement("parking")}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




  <div>
  <div className="input-row">
    <h2>Other Details</h2>
  </div>

  <div className="input-row">
    <div className="details-input">
      <div className="input-with-label">
        <div className="increment-decrement">
          <button
            type="button"
            className="decrement-button round-button"
            onClick={() => handleDecrement("maxNights")}
          >
            <FaMinus />
          </button>
        </div>
        <div className="input-field">
          <input
            type="number"
            name="maxNights"
            value={propertyData.maxNights}
            onChange={handleChange}
            min={0}
            style={{ border: '1px solid transparent', backgroundColor: 'white',minWidth:'100px', maxWidth:'100px' }}
          />
          <label>Max-Nights</label>
          <div className="increment-decrement">
            <button
              type="button"
              className="increment-button round-button"
              onClick={() => handleIncrement("maxNights")}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="details-input">
      <div className="input-with-label">
        <div className="increment-decrement">
          <button
            type="button"
            className="decrement-button round-button"
            onClick={() => handleDecrement("minNights")}
          >
            <FaMinus />
          </button>
        </div>
        <div className="input-field">
          <input
            type="number"
            name="minNights"
            value={propertyData.minNights}
            onChange={handleChange}
            min={0}
            style={{ border: '1px solid transparent', backgroundColor: 'white',minWidth:'100px', maxWidth:'100px' }}
          />
          <label>Min-Nights</label>
          <div className="increment-decrement">
            <button
              type="button"
              className="increment-button round-button"
              onClick={() => handleIncrement("minNights")}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="details-input">
      <div className="input-with-label">
        <div className="increment-decrement">
          <button
            type="button"
            className="decrement-button round-button"
            onClick={() => handleDecrement("accommodates")}
          >
            <FaMinus />
          </button>
        </div>
        <div className="input-field">
          <input
            type="number"
            name="accommodates"
            value={propertyData.accommodates}
            onChange={handleChange}
            min={0}
            style={{ border: '1px solid transparent', backgroundColor: 'white',minWidth:'100px', maxWidth:'100px' }}
          />
          <label>Accommodates</label>
          <div className="increment-decrement">
            <button
              type="button"
              className="increment-button round-button"
              onClick={() => handleIncrement("accommodates")}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>





    
    
  </div>
</div>


<h2>Add amenities available at your place.</h2>

<div className="facilities-row">
  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.washer ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("washer")}
    >
      <div className="property-button-icon">
        <FaCar className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">Washer</span>
    </button>
  </div>

  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.lift ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("lift")}
    >
      <div className="property-button-icon">
        <FaBath className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">Elevator</span>
    </button>
  </div>

  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.vacuum ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("vacuum")}
    >
      <div className="property-button-icon">
        <FaBroom className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">Vacuum Cleaner</span>
    </button>
  </div>

  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.hairDryer ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("hairDryer")}
    >
      <div className="property-button-icon">
        <FaCar className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">Hair Dryer</span>
    </button>
  </div>

  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.wifi ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("wifi")}
    >
      <div className="property-button-icon">
        <FaWifi className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">WiFi</span>
    </button>
  </div>

  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.balcony ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("balcony")}
    >
      <div className="property-button-icon">
        <FaGlobeAmericas className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">Balcony</span>
    </button>
  </div>

  <div className="facility-item">
    <button
      type="button"
      className={`property-button ${propertyData.facilities.television ? 'active' : ''}`}
      onClick={() => handleFacilityToggle("television")}
    >
      <div className="property-button-icon">
        <FaTv className="property-button-icon-svg" />
      </div>
      <span className="property-button-text">Television</span>
    </button>
  </div>
</div>


    </form>
  </div>  
  );
};



CreatePropertyForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreatePropertyForm;
