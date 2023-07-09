import { useState, useEffect } from "react";
import "./payments.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelect = (method) => {
    setPaymentMethod(method);
    setShowDropdown(false);
  };

  const paymentMethods = ["Credit Card", "Paypal", "Bank Transfer"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotalPrice = () => {
    // Your calculation logic here
    const basePrice = 100;
    const cleaningFee = 50;
    const serviceFee = 10;
    const total = basePrice + cleaningFee + serviceFee;
    return total;
  };

  return (
    <div className="container ">
      <h1 className="text-center text-success my-5">Confirm and Pay</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Your Trip</h4>
            <div className="card" style={{ width: "100%" }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Dates{" "}
                  <span
                    className="btn btn-primary px-2"
                    style={{ marginLeft: "71%" }}
                  >
                    Edit
                  </span>
                </li>
                <li className="list-group-item">
                  Start-date:{" "}
                  <span class="px-2" style={{ marginLeft: "54%" }}>
                    06-07-2023
                  </span>
                </li>
                <li className="list-group-item">
                  End-date:{" "}
                  <span class="px-2" style={{ marginLeft: "55%" }}>
                    06-07-2023
                  </span>
                </li>
                <li className="list-group-item">
                  Guests{" "}
                  <span
                    className="btn btn-primary px-2"
                    style={{ marginLeft: "69%" }}
                  >
                    Edit
                  </span>
                </li>
                <li className="list-group-item">
                  Number of guest{" "}
                  <span className="px-2" style={{ marginLeft: "56%" }}>
                    6
                  </span>
                </li>
                <li className="list-group-item">
                  Extra people{" "}
                  <span className="px-2" style={{ marginLeft: "64%" }}>
                    2
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Price Details</h4>
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://www.airbnb.com/rooms/10006546"
                className="card-img-top"
                alt="booking-image"
              />
              <div className="card-body">
                <h5 className="card-title">Ribeira Charming Duplex</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Price <span style={{ marginLeft: "65%" }}>€ 100</span>
                </li>
                <li className="list-group-item">
                  Cleaning Fee <span style={{ marginLeft: "52%" }}>€ 50</span>
                </li>
                <li className="list-group-item">
                  Service Fee <span style={{ marginLeft: "55%" }}>€ 10 </span>
                </li>
                <li className="list-group-item">
                  Total:{" "}
                  <span style={{ marginLeft: "65%" }}>
                    € {calculateTotalPrice()}{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="payment-form">
            <label htmlFor="paymentInput">Payment Method:</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
                value={paymentMethod}
                onChange={handleInputChange}
                placeholder="Select payment method"
              />
              <button
                class="btn btn-primary btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownToggle}
              >
                Payment options
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                {showDropdown && (
                  <div className="payment__dropdown-menu">
                    {paymentMethods.map((method) => (
                      <div
                        key={method}
                        className="payment__dropdown-item"
                        onClick={() => handleDropdownSelect(method)}
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>
            <h5 style={{ marginTop: "100px" }}>Cancellation Policy</h5>
            <h6 style={{ marginTop: "20px" }}>
              Free cancellation until 24 hours before check-in
            </h6>
            <div
              class="container-md bg-secondary border border-end-0 bg-opacity-10"
              style={{ marginTop: "20px" }}
            >
              <h4>Add to your booking</h4>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I'm interested in booking a flight to my destination.
                </label>
                <p>
                  Skip the stress of searching - we’ll add flight options
                  (provided by bookMe.com) to your destination in your booking
                  confirmation.{" "}
                </p>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Want to book a taxi or shuttle ride in advance?{" "}
                </label>
                <p>
                  Avoid surprises - get from the airport to your accommodation
                  easily. We’ll add taxi options to your booking confirmation{" "}
                </p>
              </div>
            </div>

            <p style={{ marginTop: "25px" }}>
              By selecting the button below, I agree to the updated terms of
              service, payment terms of service, and acknowledge the privacy
              policy.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Request to book
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Booking confirmation
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h5>Your booking has been successfully confirmed!</h5>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      OK
                    </button>
                    {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
