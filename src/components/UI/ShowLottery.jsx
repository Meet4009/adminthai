export const ShowLottery = ({ curLottery, no }) => {
  console.log(curLottery);
  const { lottery_draw_id, lottery_id, lottery_price_id, user_id } = curLottery;
  const date = new Date(lottery_draw_id.drawDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {user_id.name}
        <br />
        {user_id.mobile_No}
      </td>
      <td>{lottery_id.name}</td>
      <td>{date}</td>
      <td>{curLottery.ticketNumber}</td>
      <td>{lottery_price_id.priceNumber}</td>
      <td>{lottery_price_id.price}</td>
    </tr>
  );
};
