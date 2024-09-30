import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../API/auth";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      const loginData = {
        email: username,
        password,
      };

      let res = await loginAuth(loginData);
      localStorage.setItem("user_details", JSON.stringify(res.data.data));
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="vertical-layout vertical-menu-modern 1-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page"
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col="1-column"
      >
        {/* <!-- BEGIN: Content--> */}
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <section className="row flexbox-container ml-4">
                <div className="col-xl-8 col-11 d-flex justify-content-center">
                  <div className="card bg-authentication rounded-0 mb-0">
                    <div className="row m-0">
                      <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                        <img
                          src="../../app-assets/images/pages/login.png"
                          alt="branding logo"
                        />
                      </div>
                      <div className="col-lg-6 col-12 p-0">
                        <div className="card rounded-0 mb-0 px-2">
                          <div className="card-header pb-1">
                            <div className="card-title">
                              <h4 className="mb-1 mt-1">Login</h4>
                            </div>
                          </div>
                          <p className="px-2">
                            Welcome back, please login to your account.
                          </p>
                          <div className="card-content">
                            <div className="card-body pt-1">
                              <form
                                onSubmit={handleFormSubmit}
                                action="/dashboard"
                              >
                                <fieldset className="form-label-group form-group position-relative has-icon-left">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="user-name"
                                    placeholder="Username"
                                    required
                                    value={username}
                                    onChange={(e) =>
                                      setUserName(e.target.value)
                                    }
                                  />
                                  <div className="form-control-position">
                                    <i className="feather icon-user"></i>
                                  </div>
                                  <label htmlFor="user-name">Username</label>
                                </fieldset>

                                <fieldset className="form-label-group position-relative has-icon-left">
                                  <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="user-password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                  <div className="form-control-position">
                                    <i className="feather icon-lock"></i>
                                  </div>
                                  <label htmlFor="user-password">
                                    Password
                                  </label>
                                </fieldset>
                                <div className="form-group d-flex justify-content-between align-items-center">
                                  <div className="text-left">
                                    <fieldset className="checkbox">
                                      <div className="vs-checkbox-con vs-checkbox-primary">
                                        <input type="checkbox" />
                                        <span className="vs-checkbox">
                                          <span className="vs-checkbox--check">
                                            <i className="vs-icon feather icon-check"></i>
                                          </span>
                                        </span>
                                        <span className="">Remember me</span>
                                      </div>
                                    </fieldset>
                                  </div>
                                  <div className="text-right">
                                    <a href="#" className="card-link">
                                      Forgot Password?
                                    </a>
                                  </div>
                                </div>
                                <div className="text-center">
                                  {/* <!-- <a href="auth-register.html" className="btn btn-outline-primary float-left btn-inline">Register</a> --> */}
                                  <button
                                    type="submit"
                                    className="btn btn-primary  btn-inline"
                                    // onClick={handleGoDashboard}
                                  >
                                    Login
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="login-footer">
                            <div className="divider"></div>
                          </div>
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
