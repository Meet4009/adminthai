export const RejectedDepositeData = ({ curEle, no }) => {
  const date = new Date(curEle.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {curEle.user_id.name}
        <br />
        {curEle.user_id.email}
      </td>
      <td>{curEle.UTR}</td>
      <td>{curEle.user_id.mobile_No}</td>
      <td>{date}</td>
      <td>{curEle.amount}</td>
      <td>{curEle.action_status}</td>
    </tr>
  );
};
