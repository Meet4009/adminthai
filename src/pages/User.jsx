import { ShowUser } from "../components/UI/ShowUserData";
import { useEffect, useState } from "react";
import { getUserData } from "../API/lottery";

export const User = () => {
  document.title = "User";

  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getUserData();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  // console.log(data);

  return (
    <>
      <div
        className="vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static"
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col="2-columns"
      >
        {/* <!-- BEGIN: Content--> */}
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper">
            <div className="content-body">
              {/* <!-- Zero configuration table --> */}
              <section id="basic-datatable">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-content">
                        <div className="card-body card-dashboard">
                          <div className="table-responsive">
                            <table className="table zero-configuration text-center">
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>Name</th>
                                  <th>Email-Mobile</th>
                                  <th>Country</th>
                                  <th>Joined At</th>
                                  <th>Balance</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((curUser, index) => {
                                  return (
                                    <ShowUser
                                      key={curUser._id}
                                      curUser={curUser}
                                      no={index}
                                    />
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!--/ Zero configuration table --> */}
            </div>
          </div>
        </div>
        {/* <!-- END: Content--> */}
      </div>
    </>
  );
};
