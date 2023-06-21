import "./Transactions.css";

const Transactions = () => {
  return (
    <div className="container transaction-tab ">
      <h1>Transactions</h1>
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              href="#tab-1"
              role="tab"
              data-bs-toggle="tab"
            >
              Completed
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              href="#tab-2"
            >
              Upcoming
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              href="#tab-3"
              role="tab"
              data-bs-toggle="tab"
            >
              Gross Earning
            </a>
          </li>
        </ul>
        <div className="tab-content transaction">
          <div id="tab-1" className="tab-pane active" role="tabpanel">
            <div className="row transaction-content">
              <div className="col-10 d-flex flex-column ">
                {/* <div className="Id-flex justify-content-lg-start transaction-content"> */}
                <div className="d-flex ">
                  <span>
                    <strong>Transaction Title</strong>
                  </span>
                </div>
                <div>
                  <span>20 June 2023 3:00PM</span>
                </div>
              </div>
              <div className="col-2 align-items-center d-flex flex-row justify-content-around pl-4 pr-4">
                <span>€</span>
                <span> 100</span> EURO
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane" role="tabpannel">
            <div className="row transaction-content">
              <div className="col-10 d-flex flex-column ">
                {/* <div className="Id-flex justify-content-lg-start transaction-content"> */}
                <div className="d-flex ">
                  <span>
                    <strong>Upcoming Title</strong>
                  </span>
                </div>
                <div>
                  <span>20 June 2023 3:00PM</span>
                </div>
              </div>
              <div className="col-2 align-items-center d-flex flex-row justify-content-around pl-4 pr-4">
                <span>€</span>
                <span> 100</span> EURO
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane" role="tabpannel">
            <table class="table">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
