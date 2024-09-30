import { allWinner } from "../API/lottery";
import { useEffect, useState } from "react";
import { ShowLottery } from "../components/UI/ShowLottery";

export const AllWinner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await allWinner();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  return (
    <div
      className="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static "
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
                                <th>User</th>
                                <th>Lottery</th>
                                <th>Date</th>
                                <th>Ticket Number</th>
                                <th>Price No</th>
                                <th>Win Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((curLottery, index) => {
                                return (
                                  <ShowLottery
                                    key={curLottery.ticketNumber}
                                    curLottery={curLottery}
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
  );
};
