// import { NavLink } from "react-router-dom";
import { dashboard } from "../API/lottery";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await dashboard();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  return (
    <>
      {/* BEGIN: body */}
      <div
        className="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static "
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col="2-columns"
      >
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper">
            <div className="content-body">
              {/* <!-- Statistics card section start --> */}
              <section id="statistics-card">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start ">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0 ">
                            {data.totalUsers}
                          </h2>
                          <br />
                          <p>Total User</p>
                        </div>
                        <div className="avatar bg-rgba-primary p-50 m-50">
                          <div className="avatar-content">
                            <i className="feather icon-users text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">
                            {data.activeUsers}
                          </h2>
                          <br />
                          <p>Active User</p>
                        </div>
                        <div className="avatar bg-rgba-success p-50 m-50">
                          <div className="avatar-content">
                            <i className="feather icon-user-check text-success font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">
                            {data.soldTicket}
                          </h2>
                          <br />
                          <p>Sold Ticket</p>
                        </div>
                        <div className="avatar bg-rgba-warning p-50 m-50">
                          <div className="avatar-content">
                            <i className="bi bi-ticket  text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">
                            {data.soldAmount}
                          </h2>
                          <br />
                          <p>Sold Amount</p>
                        </div>
                        <div className="avatar bg-rgba-danger p-50 m-50">
                          <div className="avatar-content">
                            <i className="fas fa-dollar-sign text-danger font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">{data.winner}</h2>
                          <br />
                          <p>Winner</p>
                        </div>
                        <div className="avatar bg-rgba-primary p-50 m-50">
                          <div className="avatar-content">
                            <i className="bi bi-award text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">
                            {data.winAmount}
                          </h2>
                          <br />
                          <p>Win Amount </p>
                        </div>
                        <div className="avatar bg-rgba-success p-50 m-50">
                          <div className="avatar-content">
                            <span className="material-symbols-outlined text-success">
                              trophy
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">
                            {data.totalDeposits}
                          </h2>
                          <br />
                          <p>Total Deposited</p>
                        </div>
                        <div className="avatar bg-rgba-warning p-50 m-50">
                          <div className="avatar-content">
                            <i className="feather icon-log-in text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card py-1">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div className="ml-50">
                          <h2 className="text-bold-700 mb-0">
                            {data.totalWithdrawals}
                          </h2>
                          <br />
                          <p>Total Withdrawl</p>
                        </div>
                        <div className="avatar bg-rgba-danger p-50 m-50">
                          <div className="avatar-content">
                            <i className="feather icon-log-out text-danger font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- // Statistics Card section end--> */}
            </div>
          </div>
        </div>
        {/* //   <!-- END: Content--> */}
      </div>
    </>
  );
};
