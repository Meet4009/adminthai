import { useEffect, useState } from "react";
import { getChooseWinnerData } from "../API/lottery";
import { getWinnerSpace, setLoser, setWinner } from "../API/payment";

export const ChooseWinner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getChooseWinnerData();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  // Modal
  const [selectRow, setSelectRow] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [prices, setPrices] = useState([]);
  const [selectedPrice, setSelecetdPrices] = useState([]);
  const handleActionClick = (row) => {
    setSelectRow(row);
    setShowModal(true);
  };

  // Loser button
  const handleLoserButton = async () => {
    try {
      await setLoser(selectRow._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Winner button
  const hadleWinnerBtn = async () => {
    try {
      let res = await getWinnerSpace(selectRow.lottery_draw_id);
      setPrices(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWinnerSpace = async (priceObj) => setSelecetdPrices(priceObj);

  const handleWinnerConfirm = async () => {
    let payload = {
      lottery_price_id: selectedPrice._id,
    };
    await setWinner(selectRow._id, payload);

    window.location.reload();
  };

  if (data === undefined) {
    return true;
  }

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
                            <thead className="">
                              <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Ticket Number</th>
                                <th>Mobile</th>
                                <th>Country</th>
                                <th>Date</th>
                                <th>Result</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((curEle, index) => {
                                const date = new Date(
                                  curEle.createdAt
                                ).toLocaleDateString("en-GB", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                });
                                return (
                                  <tr key={curEle._id}>
                                    <td>{index + 1}</td>
                                    <td>{curEle.user_id.name}</td>
                                    <td>{curEle.ticketNumber}</td>
                                    <td>{curEle.user_id.mobile_No}</td>
                                    <td>{curEle.user_id.country}</td>
                                    <td>{date}</td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn mr-1 mb-1 btn-primary btn-sm"
                                        data-toggle="modal"
                                        data-target="#primary"
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
      {showModal && selectRow && (
        <div
          className="modal fade text-left"
          id="primary"
          // tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel160"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header bg-primary white">
                <h4 className="modal-title" id="myModalLabel160">
                  Ticket Number : {selectRow.ticketNumber}
                </h4>
              </div>
              <div className="modal-body  text-center text-black py-5">
                <p className="h1">Tell Us Your Decision</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-relief-success mx-1 btn-block"
                  data-toggle="modal"
                  data-target="#winner"
                  data-dismiss="modal"
                  onClick={hadleWinnerBtn}
                >
                  Winner
                </button>
                <button
                  type="button"
                  className="btn btn-relief-danger mx-1 btn-block mt-0 "
                  data-dismiss="modal"
                  onClick={handleLoserButton}
                >
                  Losser
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="modal fade text-left"
        id="winner"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel160"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header bg-primary white">
              <h4 className="modal-title" id="myModalLabel160">
                Ticket Number : {selectRow.ticketNumber}
              </h4>
            </div>
            <div className="modal-body text-black mb-0">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title">Select Price</h4>
                </div>
                <div className="card-content">
                  <div className="card-body p-1 pb-0">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between bg-primary text-white">
                        <span> Price No</span>
                        <span>winning Price </span>
                        <span>Person </span>
                      </li>
                      {prices.map((curEle) => (
                        <li
                          className="list-group-item d-flex justify-content-between"
                          key={curEle._id}
                          onClick={() => handleWinnerSpace(curEle)}
                        >
                          <span>{curEle.priceNumber} Price</span>
                          <span>{curEle.price}</span>
                          <span>{curEle.totalPerson}</span>
                        </li>
                      ))}
                    </ul>

                    {Object.keys(selectedPrice).length > 0 && (
                      <div className="d-flex justify-content-between pb-0 px-1 pt-1">
                        <span className="h3">
                          {selectedPrice.priceNumber}th Price
                        </span>
                        <span className="h3">
                          {selectedPrice.totalPerson - selectedPrice.fill_space}{" "}
                          Person
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-relief-success mx-1 btn-block"
                data-dismiss="modal"
                onClick={handleWinnerConfirm}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-relief-danger mx-1 btn-block mt-0 "
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END: Content--> */}
    </div>
  );
};
