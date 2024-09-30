import { NavLink } from "react-router-dom";

export const ShowUser = ({ curUser, no }) => {
  const date = new Date(curUser.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const { balance, country, email, mobile_No, name, _id } = curUser;
  return (
    <>
      <tr>
        <td>{no + 1}</td>
        <td>{name}</td>
        <td>
          {email}
          <br />
          {mobile_No}
        </td>
        <td>{country}</td>
        <td>{date}</td>
        <td>{balance}</td>
        <td>
          <NavLink to={`/user/${_id}`}>
            <button type="button" className="btn mr-1 mb-1 btn-primary btn-sm">
              Details
            </button>
          </NavLink>
        </td>
      </tr>
    </>
  );
};
