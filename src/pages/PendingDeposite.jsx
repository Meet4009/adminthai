import { useEffect, useState } from "react";
import {
  getPendingDeposite,
  setApproveDeposite,
  setRejecteDeposite,
} from "../API/payment";

export const PendingDeposite = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getPendingDeposite();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  // Modal
  const [selectedDeposit, setSelectedDeposit] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showDate, setShowDate] = useState();

  const handleActionClick = (row) => {
    const date = new Date(row.createdAt).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setSelectedDeposit(row);
    setShowModal(true);
    setShowDate(date);
  };

  // Approve Deposite
  const handleApproveButton = async () => {
    try {
      await setApproveDeposite(selectedDeposit._id);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  // Rejected Deposite
  const handleRejecteButton = async () => {
    try {
      await setRejecteDeposite(selectedDeposit._id);
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
                                  <th>UTR No</th>
                                  <th>Mobile no.</th>
                                  <th>Date</th>
                                  <th>Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((curEle, no) => {
                                  const curDate = new Date(
                                    curEle.createdAt
                                  ).toLocaleDateString("en-GB", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                  });
                                  return (
                                    <tr key={curEle._id}>
                                      <td>{no + 1}</td>
                                      <td>
                                        {curEle.user_id.name}
                                        <br />
                                        {curEle.user_id.email}
                                      </td>
                                      <td>{curEle.UTR}</td>
                                      <td>{curEle.user_id.mobile_No}</td>
                                      <td>{curDate}</td>
                                      <td>{curEle.amount}</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn mr-1 mb-1 btn-primary btn-sm"
                                          data-toggle="modal"
                                          data-target="#pendingDeposite"
                                          onClick={() => {
                                            handleActionClick(curEle);
                                          }}
                                        >
                                          Action
                                        </button>
                                      </td>
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

        {/* <!-- Modal --> */}
        {showModal && selectedDeposit && (
          <div
            className="modal fade text-left"
            id="pendingDeposite"
            //   tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel17"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel17">
                    pending deposits
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body text-black mb-0">
                  <div className="card mb-0">
                    <div className="card-content">
                      <div className="card-body p-1 pb-0">
                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between">
                            <span>User</span>
                            <span>{selectedDeposit.user_id.name}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Email</span>
                            <span>{selectedDeposit.user_id.email}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Date</span>
                            <span>{showDate}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Amount</span>
                            <span>{selectedDeposit.amount}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>UTR Number</span>
                            <span>{selectedDeposit.UTR}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Status</span>
                            <span>{selectedDeposit.status}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-relief-success mx-1 btn-block"
                    data-dismiss="modal"
                    onClick={handleApproveButton}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn btn-relief-danger mx-1 btn-block mt-0 "
                    data-dismiss="modal"
                    onClick={handleRejecteButton}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <!-- END: Content--> */}
      </div>
    </>
  );
};
