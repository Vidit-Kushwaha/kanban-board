import React from "react";
import Tag from "./Tag";
import getUserInitials from "../utils/getUserInitials";
import getRandomColor from "../utils/getRandomColor";

const Card = ({ ticket, grouping, user }) => {
  const { id, status, title, priority, tag } = ticket;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__id">{id}</div>
        {grouping !== "user" && (
          <div className="card__user">
            <div
              className="card__user-icon"
              style={{ backgroundColor: getRandomColor() }}
            >
              {getUserInitials(user.name)}
            </div>
            <div
              className={user.available ? "active-user" : "inactive-user"}
            ></div>
          </div>
        )}
      </div>
      <div className="card__body">
        {grouping !== "status" && (
          <img
            src={`/icons/status/${status}.svg`}
            alt={`${status} status icon`}
          />
        )}
        <span>{title}</span>
      </div>
      <div className="card__footer">
        {grouping !== "priority" && (
          <div className="card__footer-priority">
            <img
              src={`/icons/priority/${priority}.svg`}
              alt={`Priority ${priority}`}
            />
          </div>
        )}
        <div className="card__footer-tags">
          {tag.map((t, index) => (
            <Tag key={index} tag={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
