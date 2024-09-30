import { logout } from "../../API/auth";

export const Header = ({ name }) => {
  // Logout button
  const handleLogoutBtn = async () => {
    try {
      const data = await logout();
      console.log("resresres", data);
    } catch (error) {
      console.log(error);
    }

    localStorage.removeItem("user_details");
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      {/* <!-- BEGIN: Header--> */}
      <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow pt-0">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile">
              <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                {/* <!-- main manu toggle button --> */}
                <ul className="nav navbar-nav">
                  <li className="nav-item mobile-menu d-xl-none mr-auto">
                    <a
                      className="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="#"
                    >
                      <i className="ficon feather icon-menu"></i>
                    </a>
                  </li>
                </ul>
                <h1 className="brand-text mb-0 text-bold-700">
                  <a href="/">{name}</a>
                </h1>
              </div>
              <ul className="nav navbar-nav float-right">
                {/* <!-- minimize & maximize --> */}
                {/* <li className="nav-item d-none d-lg-block">
                  <a className="nav-link nav-link-expand">
                    <i className="ficon feather icon-maximize"></i>
                  </a>
                </li> */}

                {/* <!-- Search --> */}
                {/* <li className="nav-item nav-search">
                  <a className="nav-link nav-link-search">
                    <i className="ficon feather icon-search"></i>
                  </a>
                  <div className="search-input">
                    <div className="search-input-icon">
                      <i className="feather icon-search primary"></i>
                    </div>
                    <input
                      className="input"
                      type="text"
                      placeholder="Explore Vuexy..."
                      //   tabindex="-1"
                      data-search="template-list"
                    />
                    <div className="search-input-close">
                      <i className="feather icon-x"></i>
                    </div>
                    <ul className="search-list search-list-main"></ul>
                  </div>
                </li> */}

                {/* <!-- notification --> */}
                {/* <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon feather icon-bell"></i>
                    <span className="badge badge-pill badge-primary badge-up">
                      5
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <div className="dropdown-header m-0 p-2">
                        <h3 className="white">5 New</h3>
                        <span className="notification-title">
                          App Notifications
                        </span>
                      </div>
                    </li>
                    <li className="scrollable-container media-list">
                      <a
                        className="d-flex justify-content-between"
                        // href="javascript:void(0)"
                      >
                        <div className="media d-flex align-items-start">
                          <div className="media-left">
                            <i className="feather icon-plus-square font-medium-5 primary"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="primary media-heading">
                              You have new order!
                            </h6>
                            <small className="notification-text">
                              Are your going to meet me tonight?
                            </small>
                          </div>
                          <small>
                            <time
                              className="media-meta"
                              //   datetime="2015-06-11T18:29:20+08:00"
                            >
                              9 hours ago
                            </time>
                          </small>
                        </div>
                      </a>
                      <a
                        className="d-flex justify-content-between"
                        // href="javascript:void(0)"
                      >
                        <div className="media d-flex align-items-start">
                          <div className="media-left">
                            <i className="feather icon-download-cloud font-medium-5 success"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="success media-heading red darken-1">
                              99% Server load
                            </h6>
                            <small className="notification-text">
                              You got new order of goods.
                            </small>
                          </div>
                          <small>
                            <time
                              className="media-meta"
                              //   datetime="2015-06-11T18:29:20+08:00"
                            >
                              5 hour ago
                            </time>
                          </small>
                        </div>
                      </a>
                      <a
                        className="d-flex justify-content-between"
                        // href="javascript:void(0)"
                      >
                        <div className="media d-flex align-items-start">
                          <div className="media-left">
                            <i className="feather icon-alert-triangle font-medium-5 danger"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="danger media-heading yellow darken-3">
                              Warning notifixation
                            </h6>
                            <small className="notification-text">
                              Server have 99% CPU usage.
                            </small>
                          </div>
                          <small>
                            <time
                              className="media-meta"
                              //   datetime="2015-06-11T18:29:20+08:00"
                            >
                              Today
                            </time>
                          </small>
                        </div>
                      </a>
                      <a
                        className="d-flex justify-content-between"
                        // href="javascript:void(0)"
                      >
                        <div className="media d-flex align-items-start">
                          <div className="media-left">
                            <i className="feather icon-check-circle font-medium-5 info"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="info media-heading">
                              Complete the task
                            </h6>
                            <small className="notification-text">
                              Cake sesame snaps cupcake
                            </small>
                          </div>
                          <small>
                            <time
                              className="media-meta"
                              //   datetime="2015-06-11T18:29:20+08:00"
                            >
                              Last week
                            </time>
                          </small>
                        </div>
                      </a>
                      <a
                        className="d-flex justify-content-between"
                        // href="javascript:void(0)"
                      >
                        <div className="media d-flex align-items-start">
                          <div className="media-left">
                            <i className="feather icon-file font-medium-5 warning"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="warning media-heading">
                              Generate monthly report
                            </h6>
                            <small className="notification-text">
                              Chocolate cake oat cake tiramisu marzipan
                            </small>
                          </div>
                          <small>
                            <time
                              className="media-meta"
                              //   datetime="2015-06-11T18:29:20+08:00"
                            >
                              Last month
                            </time>
                          </small>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item p-1 text-center"
                        // href="javascript:void(0)"
                      >
                        View all notifications
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <!-- Profile --> */}
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <div className="user-nav d-sm-flex d-none">
                      <span className="user-name text-bold-600">John Doe</span>
                      <span className="user-status">Available</span>
                    </div>
                    <span>
                      <img
                        className="round"
                        src="../app-assets/images/portrait/small/avatar-s-11.jpg"
                        alt="avatar"
                        height="40"
                        width="40"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <i className="feather icon-user"></i> Edit Profile
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogoutBtn}
                    >
                      <i className="feather icon-power"></i> Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- search result --> */}
      <ul className="main-search-list-defaultlist d-none">
        <li className="d-flex align-items-center">
          <a className="pb-25" href="#">
            <h6 className="text-primary mb-0">Files</h6>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="../app-assets/images/icons/xls.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Two new item submitted</p>
                <small className="text-muted">Marketing Manager</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;17kb
            </small>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="../app-assets/images/icons/jpg.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">52 JPG file Generated</p>
                <small className="text-muted">FontEnd Developer</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;11kb
            </small>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="../app-assets/images/icons/pdf.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">25 PDF File Uploaded</p>
                <small className="text-muted">Digital Marketing Manager</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;150kb
            </small>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="../app-assets/images/icons/doc.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Anna_Strong.doc</p>
                <small className="text-muted">Web Designer</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;256kb
            </small>
          </a>
        </li>
        <li className="d-flex align-items-center">
          <a className="pb-25" href="#">
            <h6 className="text-primary mb-0">Members</h6>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="../app-assets/images/portrait/small/avatar-s-8.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">John Doe</p>
                <small className="text-muted">UI designer</small>
              </div>
            </div>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="../app-assets/images/portrait/small/avatar-s-1.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Michal Clark</p>
                <small className="text-muted">FontEnd Developer</small>
              </div>
            </div>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="../app-assets/images/portrait/small/avatar-s-14.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Milena Gibson</p>
                <small className="text-muted">Digital Marketing Manager</small>
              </div>
            </div>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="../app-assets/images/portrait/small/avatar-s-6.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Anna Strong</p>
                <small className="text-muted">Web Designer</small>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <ul className="main-search-list-defaultlist-other-list d-none">
        <li className="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">
          <a className="d-flex align-items-center justify-content-between w-100 py-50">
            <div className="d-flex justify-content-start">
              <span className="mr-75 feather icon-alert-circle"></span>
              <span>No results found.</span>
            </div>
          </a>
        </li>
      </ul>

      {/* <!-- BEGIN: Main Menu--> */}
      <div
        className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto">
              <a className="navbar-brand" href="/">
                <img
                  className="pl-50"
                  src="../app-assets/images/logo/thb_logo.svg"
                  alt="logo"
                />
                <h2 className="brand-text mb-0">Thai Lottery</h2>
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom"></div>
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li
              className={name === "Dashboard" ? `nav-item active` : `nav-item`}
            >
              <a href="/">
                <i className="fas fa-tachometer-alt"></i>
                <span className="menu-title" data-i18n="Email">
                  Dashboard
                </span>
              </a>
            </li>
            <li
              className={
                name === "User With Balance" ? `nav-item active` : `nav-item`
              }
            >
              <a href="/user">
                <i className="fas fa-user"></i>
                <span className="menu-title" data-i18n="User">
                  User
                </span>
              </a>
            </li>
            <li
              className={
                name === "All Lotteries" ? `nav-item active` : `nav-item`
              }
            >
              <a href="/alllotteries">
                <i className="fa-solid fa-ticket"></i>
                <span className="menu-title" data-i18n="Chat">
                  All lotterys
                </span>
              </a>
            </li>
            <li
              className={
                name === "All Winners" ? `nav-item active` : `nav-item`
              }
            >
              <a href="/allwinner">
                <i className="fas fa-trophy"></i>
                <span className="menu-title" data-i18n="Todo">
                  All Winner
                </span>
              </a>
            </li>
            <li
              className={
                name === "Choose to Winner" ? `nav-item active` : `nav-item`
              }
            >
              <a href="/choosewinner">
                <i className="fas fa-users"></i>
                <span className="menu-title" data-i18n="Calender">
                  Choose to winner
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" data-target="#deposite">
                <i className="fas fa-plus-circle"></i>
                <span className="menu-title" data-i18n="Ecommerce">
                  Diposite
                </span>
              </a>
              <ul className="menu-content" id="deposite">
                <li className={name === "Pending deposits" ? "active" : ""}>
                  <a href="/pendingdeposite">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Shop">
                      Pending Diposite
                    </span>
                  </a>
                </li>
                <li className={name === "Approved Deposits" ? "active" : ""}>
                  <a href="/approveddeposite">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Details">
                      Approved Diposite
                    </span>
                  </a>
                </li>
                <li className={name === "Rejected Deposits" ? "active" : ""}>
                  <a href="/rejecteddeposite">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Wish List">
                      Rejected Diposite
                    </span>
                  </a>
                </li>
                <li className={name === "All Deposits" ? "active" : ""}>
                  <a href="/alldeposits">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Checkout">
                      All Diposite
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" data-target="#withdraw">
                <i className="fas fa-minus-circle"></i>
                <span className="menu-title" data-i18n="Ecommerce">
                  withdrawals
                </span>
              </a>
              <ul className="menu-content" id="withdraw">
                <li className={name === "Pending withdrawals" ? "active" : ""}>
                  <a href="/pendingwithdrawals">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Shop">
                      Pending withdrawals
                    </span>
                  </a>
                </li>
                <li className={name === "Approved withdrawals" ? "active" : ""}>
                  <a href="/approvedwithdrawals">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Details">
                      Approved withdrawals
                    </span>
                  </a>
                </li>
                <li className={name === "Rejected withdrawals" ? "active" : ""}>
                  <a href="/rejectedwithdraw">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Wish List">
                      Rejected withdrawals
                    </span>
                  </a>
                </li>
                <li className={name === "All withdrawals" ? "active" : ""}>
                  <a href="/allwithdraw">
                    <i className="feather icon-circle"></i>
                    <span className="menu-item" data-i18n="Checkout">
                      All withdrawals
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- END: Main Menu--> */}
      {/* <!-- END: Header--> */}
    </>
  );
};
