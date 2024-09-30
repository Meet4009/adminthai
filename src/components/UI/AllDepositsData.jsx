export const AllDepositsData = ({ curDepo, no }) => {
  const date = new Date(curDepo.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  console.log(curDepo);

  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {curDepo.user_id.name}
        <br />
        {curDepo.user_id.email}
      </td>
      <td>{curDepo.UTR}</td>
      <td>{curDepo.user_id.mobile_No}</td>
      <td>{date}</td>
      <td>{curDepo.amount}</td>
      <td>{curDepo.action_status}</td>
    </tr>
  );
};
