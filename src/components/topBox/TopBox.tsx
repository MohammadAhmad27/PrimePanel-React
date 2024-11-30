import { topDealUsers } from "../../data";
import "./topBox.scss";

export default function TopBox() {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div key={user.id} className="listItem">
            <div className="user">
              {" "}
              <img src={user.img} alt={user.username} />
              <div className="userTexts">
                <p className="username">{user.username}</p>
                <p className="email">{user.email}</p>
              </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
