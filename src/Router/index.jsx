import { createBrowserRouter } from "react-router-dom";
import { getSingleUserDetails } from "../API/lottery";
import { SingleUserData } from "../components/UI/ShowSingleUserData";
import { AllWinner } from "../pages/AllWinner";
import { ChooseWinner } from "../pages/ChooseToWinner";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { User } from "../pages/User";
import ProtectedRoute from "./ProtectedRoute";
import { PendingDeposite } from "../pages/PendingDeposite";
import { Header } from "../components/layout/Header";
import { ApprovedDeposite } from "../pages/ApprovedDeposite";
import { RejectedDeposits } from "../pages/RejectedDeposits";
import { AllDeposits } from "../pages/AllDeposits";
import { PendingWithdrawals } from "../pages/PendingWithdrawals";
import { ApprovedWithdrawals } from "../pages/ApprovedWithdrawals";
import { RejectedWithdrawals } from "../pages/RejectedWithdrawals";
import { AllWithdrawals } from "../pages/AllWithdrawals";
import { AllLotteries } from "../pages/AllLotteriesPage";

const Router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Header name="Dashboard" />
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <Header name="User With Balance" />
            <User />
          </ProtectedRoute>
        ),
        // loader: userApiData,
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
            <Header name="User Profile" />
            <SingleUserData />
          </ProtectedRoute>
        ),
        loader: getSingleUserDetails,
      },
      {
        path: "/alllotteries",
        element: (
          <ProtectedRoute>
            <Header name="All Lotteries" />
            <AllLotteries />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allwinner",
        element: (
          <ProtectedRoute>
            <Header name="All Winners" />
            <AllWinner />
          </ProtectedRoute>
        ),
      },
      {
        path: "/choosewinner",
        element: (
          <ProtectedRoute>
            <Header name="Choose to Winner" />
            <ChooseWinner />
          </ProtectedRoute>
        ),
      },
      // Dropdown menu "DEPOSITE"
      {
        path: "/pendingdeposite",
        element: (
          <ProtectedRoute>
            <Header name="Pending deposits" />
            <PendingDeposite />
          </ProtectedRoute>
        ),
      },
      {
        path: "/approveddeposite",
        element: (
          <ProtectedRoute>
            <Header name="Approved Deposits" />
            <ApprovedDeposite />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rejecteddeposite",
        element: (
          <ProtectedRoute>
            <Header name="Rejected Deposits" />
            <RejectedDeposits />
          </ProtectedRoute>
        ),
      },
      {
        path: "/alldeposits",
        element: (
          <ProtectedRoute>
            <Header name="All Deposits" />
            <AllDeposits />
          </ProtectedRoute>
        ),
      },

      // Dropdown menu "WITHDRAWALS"
      {
        path: "/pendingwithdrawals",
        element: (
          <ProtectedRoute>
            <Header name="Pending withdrawals" />
            <PendingWithdrawals />
          </ProtectedRoute>
        ),
      },
      {
        path: "/approvedwithdrawals",
        element: (
          <ProtectedRoute>
            <Header name="Approved withdrawals" />
            <ApprovedWithdrawals />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rejectedwithdraw",
        element: (
          <ProtectedRoute>
            <Header name="Rejected withdrawals" />
            <RejectedWithdrawals />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allwithdraw",
        element: (
          <ProtectedRoute>
            <Header name="All withdrawals" />
            <AllWithdrawals />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default Router;
