import React from "react";
import getUserInitials from "../utils/getUserInitials";
import getRandomColor from "../utils/getRandomColor";

const plusIcon = "/icons/plus.svg";
const Inprogress = "/icons/ellipsis.svg";

const priorityCode = {
  "No priority": 0,
  Low: 1,
  Medium: 2,
  High: 3,
  Urgent: 4,
};

const groupIcons = {
  status: (title) => `/icons/status/${title}.svg`,
  priority: (title) => `/icons/priority/${priorityCode[title]}.svg`,
};

const ActionButton = ({ icon, onClick }) => (
  <button className="card__title-right-btn" onClick={onClick}>
    <img src={icon} alt="Action button" />
  </button>
);

const Title = ({ title, grouping, count, available = true }) => {
  const userInitials = React.useMemo(() => getUserInitials(title), [title]);

  const renderLeftSection = () => {
    if (grouping === "user") {
      return (
        <div className="card__user">
          <div
            className="card__user-icon"
            style={{ backgroundColor: getRandomColor() }}
          >
            {userInitials}
          </div>
          <div className={available ? "active-user" : "inactive-user"}></div>
        </div>
      );
    }
    const iconSrc = groupIcons[grouping]?.(title);
    return iconSrc ? <img src={iconSrc} alt={`${grouping} icon`} /> : null;
  };

  return (
    <div className="card__title">
      <div className="card__title-left">
        {renderLeftSection()}
        <span className="group__title">{title}</span>
        <span className="group__count">{count}</span>
      </div>
      {count > 0 && (
        <div className="card__title-right">
          <ActionButton icon={plusIcon} />
          <ActionButton icon={Inprogress} />
        </div>
      )}
    </div>
  );
};

Title.defaultProps = {
  available: true,
};

export default Title;
