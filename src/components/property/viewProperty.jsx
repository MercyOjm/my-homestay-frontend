import ImageGallery from "../imageGallery/imageGallery";
import "./viewProperty.css";

const ViewProperty = () => {
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
              <h4>Well Furnished Flat</h4>
              <span className="text-muted">100 Small Street, LA, USA</span>
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
              <span>3 Bedrooms</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-bath"></i>
              <span>1 Bathroom</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-car"></i>
              <span>Car Parking</span>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center facility">
              <i className="fa fa-paw"></i>
              <span>Pets Allowed</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Heading</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                in reiciendis sunt, quidem sint dolorum at maxime consequatur
                porro, molestiae ab soluta maiores repudiandae enim nulla
                doloribus atque aliquam amet?
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h6 className="text-uppercase text-muted">Standard</h6>
                <h4 className="display-6 fw-bold">$15</h4>
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
      <div className="row">
        <div className="col-6">
          <div className="row "></div>
          <div className="row ">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="col-6">
          <div className="row "></div>
          <div className="row ">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProperty;
