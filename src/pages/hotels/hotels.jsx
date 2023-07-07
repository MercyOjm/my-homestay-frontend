// import './hotels.css';

// const HotelPage = () => {
//   return (
//     <div className="hotel-page">
//       <div className="sidebar">
//         <div className="filter-section">
//           <h3>Search By Property Name</h3>
//           <div className="search-input">
//             <input type="text" placeholder="Enter property name" />
//             <button>Search</button>
//           </div>
//         </div>
//         <div className="filter-section">
//           <h3>Filter By</h3>
//           <select>
//             <option value="">All</option>
//             <option value="all-inclusive">All Inclusive</option>
//             <option value="hotel-resort">Hotel Resort</option>
//             <option value="apartment">Apartment</option>
//           </select>
//         </div>
//         <div className="filter-section">
//           <h3>Total Price</h3>
//           <input type="range" min="0" max="2000" step="100" />
//         </div>
//         <div className="filter-section">
//           <h3>Guest Rating</h3>
//           <div className="rating-options">
//             <label>
//               <input type="radio" name="guest-rating" value="bad" />
//               Bad
//             </label>
//             <label>
//               <input type="radio" name="guest-rating" value="good" />
//               Good
//             </label>
//             <label>
//               <input type="radio" name="guest-rating" value="very-good" />
//               Very Good
//             </label>
//             <label>
//               <input type="radio" name="guest-rating" value="wonderful" />
//               Wonderful
//             </label>
//           </div>
//         </div>
//         <div className="filter-section">
//           <h3>Payment Type</h3>
//           <select>
//             <option value="">Any</option>
//             <option value="fully-refundable">Fully Refundable</option>
//             <option value="reserve-now">Reserve Now</option>
//             <option value="pay-later">Pay Later</option>
//           </select>
//         </div>
//         <div className="filter-section">
//           <h3>Property Type</h3>
//           <select>
//             <option value="">Any</option>
//             <option value="hotel-resort">Hotel Resort</option>
//             <option value="apartment">Apartment</option>
//             <option value="house-boat">House Boat</option>
//           </select>
//         </div>
//         <div className="filter-section">
//           <h3>Cities</h3>
//           <select>
//             <option value="">Any</option>
//             <option value="hamburg">Hamburg</option>
//             <option value="munchen">Munchen</option>
//             <option value="berlin">Berlin</option>
//           </select>
//         </div>
//         <div className="filter-section">
//           <h3>Meal Plans Available</h3>
//           <div className="meal-options">
//             <label>
//               <input type="checkbox" value="breakfast-included" />
//               Breakfast Included
//             </label>
//             <label>
//               <input type="checkbox" value="lunch-included" />
//               Lunch Included
//             </label>
//             <label>
//               <input type="checkbox" value="dinner-included" />
//               Dinner Included
//             </label>
//             <label>
//               <input type="checkbox" value="all-inclusive" />
//               All Inclusive
//             </label>
//           </div>
//         </div>
//         <div className="filter-section">
//           <h3>Amenities</h3>
//           <div className="amenities-options">
//             <label>
//               <input type="checkbox" value="sea-view" />
//               Sea View
//             </label>
//             <label>
//               <input type="checkbox" value="pool" />
//               Pool
//             </label>
//             <label>
//               <input type="checkbox" value="pet-friendly" />
//               Pet-Friendly
//             </label>
//           </div>
//         </div>
//       </div>
//       <div className="content">
//         <h2 className='types'>Hotel Types</h2>
//         <div className="hotel-types">
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RizA8tI3h30rnEXK8Yy8MidyMccy_Y8vng&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Luxury Resort</h3>
//               <p>Price Range: $300 - $800 per night</p>
//               <p>Rating: 4.8/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBtSX8xGTK8lpCVcq5uHhq4qNZkg5iet45zh5lN08azz6dP_r4GsrFcdBp4qhuM86KCs&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Budget Hotel</h3>
//               <p>Price Range: $200 - $500 per night</p>
//               <p>Rating: 4.6/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLz9cjmpidHS6O4vC1JnXchw9qlTr8qqmGQ&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Luxury Resort</h3>
//               <p>Price Range: $250 - $600 per night</p>
//               <p>Rating: 4.7/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tiXbxhuOUwEC5Fw36TPm02aEeey4FYm9uQ&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Mountain Lodge</h3>
//               <p>Price Range: $180 - $400 per night</p>
//               <p>Rating: 4.3/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgjOaA_krhDRY61S2o_WblaUC0NN4w1aEHg&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Business Hotel</h3>
//               <p>Price Range: $180 - $400 per night</p>
//               <p>Rating: 4.3/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RVyEYvuBmJX8WO5ZdMZpRJJbSqxolzkt-w&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Historic Hotel</h3>
//               <p>Price Range: $200 - $500 per night</p>
//               <p>Rating: 4.6/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSkWN1mc9QBBgE4-PYeKVhXJqv_-ueSNQVw&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Family-friendly Hotel</h3>
//               <p>Price Range: $150 - $350 per night</p>
//               <p>Rating: 4.4/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H5NV-SBf2_zCZRHWXLq_QsA9LY-Rsj0QYQ&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Ski Resort</h3>
//               <p>Price Range: $250 - $600 per night</p>
//               <p>Rating: 4.7/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGE968cQW2ERLQ4Ib9FkjygbpQx4ZSMlh4Iw&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Urban Hotel</h3>
//               <p>Price Range: $180 - $400 per night</p>
//               <p>Rating: 4.3/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquURlmiC5l1X8cS4WwAXRLJ4-LKSa6egklg&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Resort & Spa</h3>
//               <p>Price Range: $300 - $800 per night</p>
//               <p>Rating: 4.8/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST79HdQY4VhnkUeIB5S9IWSePoEBt2lgC7tg&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Budget Hotel</h3>
//               <p>Price: $100 per night</p>
//               <p>Rating: 4.6/5</p>
//             </div>
//           </div>
//           <div className="hotel-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7n70-Api_9ZQ_gqB0X_4wldthKIgngvI3Sg&usqp=CAU" alt="" className="hotel-image" />
//             <div className="hotel-info">
//               <h3>Budget Hotel</h3>
//               <p>Price Range: $78 per night</p>
//               <p>Rating: 4.2/5</p>
//             </div>

//             <div className="pagination">
//            <button>1</button>
//            <button>2</button>
//            <button>3</button>
//            <button>4</button>
//            <button>5</button>
//            <button>&gt;</button>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelPage;


import { useEffect, useState } from 'react';
import axios from 'axios';
import './hotels.css'

const HotelPage = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [minBathrooms, setMinBathrooms] = useState('');
  const [maxBathrooms, setMaxBathrooms] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [maxBeds, setMaxBeds] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [amenities, setAmenities] = useState('');
  const [propName, setPropName] = useState('')
  const [filteredProperties, setFilteredProperties] = useState([])

    const fetchData = async () => {
    
      try {
        const response = await axios('http://localhost/4040/api/properties/search', {
          params: {
            minPrice,
            maxPrice,
            minBedrooms,
            maxBedrooms,
            minBathrooms,
            maxBathrooms,
            minBeds,
            maxBeds,
            propertyType,
            amenities,
            propName
        },
        });
        // Process the response or update the state with the filtered properties
        setFilteredProperties(response.data.filteredProps);
  
     
      } catch (error) {
        console.error(error);
      }
    };


  useEffect(()=>{
    fetchData()
  },[])
  const handleSearch = async (e) =>{
    e.preventDefault()

    try {
      const res = await axios.get('http://localhost:4040/api/properties/search',{
        params:{
          minPrice,
          maxPrice,
          minBedrooms,
          maxBedrooms,
          minBathrooms,
          maxBathrooms,
          minBeds,
          maxBeds,
          propertyType,
          amenities,
          propName
        }
      });
      setFilteredProperties(res.data.filteredProps)
    } catch (error) {
      console.error(error)
    }
   

  }

  return (
    <div className='hotel-page'>
      <div className='sidebar'>
      <h2>Property Search</h2>
      <form onSubmit={handleSearch} className='' >
        
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder='Min.price' />
       
        
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder='Max.price'/>
        
          <input type="text" value={propName} onChange={(e) => setPropName(e.target.value)} placeholder='Property name'/>
        
          <input type="number" value={minBedrooms} onChange={(e) => setMinBedrooms(e.target.value)} placeholder='Min.bedrooms'/>
        
         
          <input type="number" value={maxBedrooms} onChange={(e) => setMaxBedrooms(e.target.value)} placeholder='Max.bedrooms'/>
       
     
          <input type="number" value={minBathrooms} onChange={(e) => setMinBathrooms(e.target.value)} placeholder='Min.bathrooms'/>
    
          <input type="number" value={maxBathrooms} onChange={(e) => setMaxBathrooms(e.target.value)} placeholder='Max.bathrooms'/>
      
          <input type="number" value={minBeds} onChange={(e) => setMinBeds(e.target.value)} placeholder='Min.beds'/>
       
          <input type="number" value={maxBeds} onChange={(e) => setMaxBeds(e.target.value)} placeholder='Max.beds'/>
      
        
          <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}placeholder='Type of property(house,cottage..)'/>
       
       
          <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} placeholder='Amenities(Wi-Fi,Parking,...)'/>

        <button type="submit">Search</button>
      </form>
      </div>
      
        <div className='hotel-types'>
         <div className=''>
        {filteredProperties.map((property) => (
          <div className='hotel-card' key={property._id}>
            <img src={property.photos} className="hotel-image" alt="Property" />
            <div className='hotel-info'>
              <h5>{property.name}</h5>
              <p>Price Range: {property.price}</p>
              <p>Property type: {property.property_type} </p>
            </div>
          </div>
       
        ))}
        </div>
      </div>
    </div>
  );
};


export default HotelPage;


