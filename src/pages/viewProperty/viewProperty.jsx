import PropertyMap from "../../components/googlemap/map";
import {useAuthDispatch, useAuthState } from "../../contexts";
import { propertyView } from "../../contexts/action";
import { useEffect, useState } from "react";
import ImageGallery from "../../components/imageGallery/imageGallery";
import Reviews from "../../components/reviews/reviews";
import "./viewProperty.css";

const ViewProperty = () => {
  const details = useAuthState();

  const dispatch = useAuthDispatch();

  useEffect(() => {
    try {
       propertyView(dispatch, "64a044dc888b736f2659d832");
    } catch (error) {
      console.error(error);
    }
  }, []);
console.log(details.property)
  return (
    <div className="container-md mt-5">
      {/* section  for images */}
      <div className="row">
        <ImageGallery></ImageGallery>
      </div>

      {/* sectio for property info */}
      <div className="row mt-5 justify-content-around">
        <div className="col-8 d-flex flex-column justify-content-around">
          <div className="row ">
            <div className="col-10">
              <h4>{details.property.name}</h4>
              <span className="text-muted">{details.property.address.street}-{details.property.address.street_number}, {details.property.address.postal_code}, {details.property.address.city}, {details.property.address.country}     </span>
            </div>
            <div className="col-2 d-flex justify-content-around align-items-center">
              <a>
                <i className="fa fa-heart fs-3"></i>
              </a>
              <a>
                <i className="fa fa-share-alt fs-3"></i>
              </a>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-bed"></i>
              <span>Bedrooms {details.property.bedrooms}</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-bath"></i>
              <span>Bathrooms {details.property.bathrooms}</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
            <i class="fa fa-building"></i>
              <span>{details.property.room_type}</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-paw"></i>
              <span>Pets Allowed</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Summary</h5>
              <p>
                {details.property.summary}
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h6 className="text-uppercase text-muted">Standard</h6>
                <h4 className="display-6 fw-bold">€{details}</h4>
                <hr></hr>
                <ul className="list-unstyled">
                  <li className="d-flex mb-2 text-muted">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="d-flex mb-2 text-muted">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="d-flex mb-2 text-muted">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                </ul>
              </div>
              <a href="" className="btn btn-primary d-block w-100">
                Button
              </a>
            </div>
            <div className="card-footer">
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <span>
                    <l className="fa fa-building mr-2"></l>
                  </span>
                  <span>Property enquiry</span>
                </li>
                <li>
                  <span>
                    <l className="fa fa-phone mr-2"></l>
                  </span>
                  <span>Contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* section for amenities */}
      <div className="row mt-5">
        <div className="col-6">
          <h4>Offered Amenities</h4>

          <ul className="list-unstyled d-flex row mt-4">
            <li className="col-6">
              <span>
                <l className="fa fa-building mr-2"></l>
              </span>
              <span>Property enquiry</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h4>Safety and Hygiene</h4>

          <ul className="list-unstyled d-flex row mt-4">
            <li className="col-6">
              <span>
                <l className="fa fa-building mr-2"></l>
              </span>
              <span>Property enquiry</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
            <li className="col-6">
              <span>
                <l className="fa fa-phone mr-2"></l>
              </span>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          <PropertyMap></PropertyMap>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <Reviews reviewScore= {details.property.review_scores} reviews={details.property.reviews}></Reviews>
        </div>
      </div>
    </div>
  );
};
export default ViewProperty;
