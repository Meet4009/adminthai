import { useState } from "react";
import { Form, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { setUserData } from "../../API/lottery";

export const SingleUserData = () => {
  document.title = "user-details";
  const userData = useLoaderData();
  const navigate = useNavigate();
  const { data } = userData;
  const { id } = useParams();
  // console.log(id);

  const [userName, setUserName] = useState(data.data.user.name);
  const [userEmail, setUserEmail] = useState(data.data.user.email);
  const [userMobile, setUserMobile] = useState(data.data.user.mobile_No);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      const payload = {
        name: userName,
        email: userEmail,
        mobile_No: userMobile,
      };

      console.log("payload", payload);

      await setUserData(id, payload);
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <>
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
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">
                            {data.data.balance}
                          </h2>
                          <p>Balance</p>
                        </div>
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="fas fa-dollar-sign text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">
                            {data.data.totalDeposit}
                          </h2>
                          <p>deposits</p>
                        </div>
                        <div className="avatar bg-rgba-success p-50">
                          <div className="avatar-content">
                            <i className="feather icon-log-in text-success font-medium-5"></i>
                          </div>
                          {/* <NavLink to="userdepositehistory.html"
                          >
                            <div className="avatar-content">
                              <i className="feather icon-log-in text-success font-medium-5"></i>
                            </div>
                          </NavLink> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">
                            {data.data.totalwithdraw}
                          </h2>
                          <p>Wiithdraws</p>
                        </div>
                        <div className="avatar bg-rgba-danger p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-log-out text-danger font-medium-5"></i>
                          </div>
                          {/* <NavLink to="userAllWithdraw.html">
                            <div className="avatar-content">
                              <i className="feather icon-log-out text-danger font-medium-5"></i>
                            </div>
                          </NavLink> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">
                            {data.data.ticket}
                          </h2>
                          <p>Tickets</p>
                        </div>
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="bi bi-ticket  text-warning font-medium-5"></i>
                          </div>
                          {/* <NavLink to="userTickets.html">
                            <div className="avatar-content">
                              <i className="bi bi-ticket  text-warning font-medium-5"></i>
                            </div>
                          </NavLink> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- // Statistics Card section end--> */}

              <section id="basic-horizontal-layouts">
                <div className="row match-height">
                  <div className="col-md-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">User Update</h4>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <Form
                            onSubmit={handleFormSubmit}
                            className="form form-horizontal"
                          >
                            <div className="form-body">
                              <div className="row">
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>First Name</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="text"
                                          id="fname-icon"
                                          className="form-control"
                                          name="name"
                                          placeholder="First Name"
                                          defaultValue={userName}
                                          onChange={(e) =>
                                            setUserName(e.target.value)
                                          }
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-user"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>Last Name</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="text"
                                          id="fname-icon"
                                          className="form-control"
                                          name="last-name"
                                          placeholder="Last Name"
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-user"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>Email</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="email"
                                          id="contact-icon"
                                          className="form-control"
                                          name="email"
                                          placeholder="Mobile"
                                          defaultValue={userEmail}
                                          onChange={(e) =>
                                            setUserEmail(e.target.value)
                                          }
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-mail"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>Mobile No</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="number"
                                          id="pass-icon"
                                          className="form-control"
                                          name="mobile_No"
                                          placeholder="Mobile No"
                                          defaultValue={userMobile}
                                          onChange={(e) =>
                                            setUserMobile(e.target.value)
                                          }
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-phone"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-8 offset-md-5">
                                  <button
                                    type="submit"
                                    className="btn btn-primary mr-1 mb-1"
                                  >
                                    Submit
                                  </button>
                                  <button
                                    type="reset"
                                    className="btn btn-outline-warning mr-1 mb-1"
                                  >
                                    Reset
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* <!-- END: Content--> */}
      </div>
    </>
  );
};
