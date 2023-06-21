import "./Reservation.css";
import dest1 from "../../images/destination-1.jpg";

const Reservations = () => {
  return (
    <div className="container reservation-tab ">
      <h1>Reservations</h1>
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              href="#tab-1"
              role="tab"
              data-bs-toggle="tab"
            >
              Upcoming
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              href="#tab-2"
            >
              Past
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="#tab-3"
              role="tab"
              data-bs-toggle="tab"
            >
              Rejected
            </a>
          </li>
        </ul>
        <div className="tab-content reservation">
          <div id="tab-1" className="tab-pane active" role="tabpanel">
            <div className="row reservation-row">
              <div className="col-2 d-flex justify-content-center ">
                <img
                  src={dest1}
                  alt=""
                  className="reservation-image"
                />
              </div>
              <div className="col-8 d-flex flex-column justify-content-between">
                <div>
                <h5><strong>Heading</strong></h5>
                </div>
                <div className="d-flex justify-content-lg-start reservation-content">
                  <div>
                    <span>
                      <strong>Check In:</strong>
                    </span>
                    <span>Text</span>
                  </div>
                  <div>
                    <span>
                      <strong>Check In:</strong>
                    </span>
                    <span>Text</span>
                  </div>
                  <div>
                    <span>
                      <strong>Check In:</strong>
                    </span>
                    <span>Text</span>
                  </div>
                </div>
                <div>
                  <span className="text-bold">By:</span>
                  <span className="text-bold">Harry potter</span>
                </div>
              </div>
              <div className="col-2 align-items-center d-flex flex-row justify-content-around">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ marginRight: 5 + "px" }}
                >
                  Approve
                </button>
                <button className="btn btn-secondary" type="button">
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane" role="tabpannel"></div>
          <div id="tab-3" className="tab-pane" role="tabpannel"></div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
