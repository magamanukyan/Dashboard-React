import { groupNumber, ordersData } from "../../data";
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";

import css from "./Order.module.css";

const Order = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./logo.png" alt="logo" />
        <span>Orders today</span>
      </div>
      <div className={`${css.stat} grey-container`}>
        <span>Amount</span>
        <span> ${groupNumber(4560)} </span>
      </div>
      <div className={css.orders}>
        {ordersData.map((order, i) => (
          <div key={i} className={css.order}>
            <div>
              <span>{order.name}</span>
              <span>{order.change}</span>
            </div>
            <div>
              <span>{order.type}</span>
              <span>Items: {order.items}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={css.orderChart}>
        <span>Split by orders</span>
        <OrdersPieChart/>
      </div>
    </div>
  );
};

export default Order;
