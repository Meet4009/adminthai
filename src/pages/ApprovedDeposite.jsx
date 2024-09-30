import { useEffect, useState } from "react";
import { getApprovedDeposite } from "../API/payment";
import { ApproveDepositeData } from "../components/UI/ApproveDepositeData";

export const ApprovedDeposite = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getApprovedDeposite();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  return (
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
                              <th>User</th>
                              <th>UTR No</th>
                              <th>Mobile no.</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((curEle, index) => {
                              return (
                                <ApproveDepositeData
                                  key={curEle._id}
                                  curEle={curEle}
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
  );
};
