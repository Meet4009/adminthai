export const ApprovedWithdrawalData = ({ curWithdraw, no }) => {
  const date = new Date(curWithdraw.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {curWithdraw.user_id.name}
        <br />
        {curWithdraw.user_id.email}
      </td>
      <td>{curWithdraw.upi_id}</td>
      <td>{curWithdraw.user_id.mobile_No}</td>
      <td>{date}</td>
      <td>{curWithdraw.amount}</td>
      <td>{curWithdraw.action_status}</td>
    </tr>
  );
};
