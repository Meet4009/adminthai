import { useEffect, useState } from "react";
import { getLotteriesData } from "../API/lottery";

export const AllLotteries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getLotteriesData();
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
                              <th>Name</th>
                              <th>Price</th>
                              <th>Date</th>
                              <th>Total Draw</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((curEle, index) => {
                              const date = new Date(
                                curEle.activeLotteryDraw.drawDate
                              ).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              });
                              return (
                                <tr key={curEle._id}>
                                  <td>{index + 1}</td>
                                  <td>{curEle.name}</td>
                                  <td>{curEle.price}</td>
                                  <td>{date}</td>
                                  <td>{curEle.totalDraw}</td>
                                  <td>{curEle.activeLotteryDraw.status}</td>
                                </tr>
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
