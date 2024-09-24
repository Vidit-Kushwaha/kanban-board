import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const settingsIcon = "/icons/settings.svg";
const down = "/icons/down.svg";

const Navbar = ({ grouping, ordering, setGrouping, setOrdering }) => {

  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const handleGroupingChange = (e) => {
    const newGrouping = e.target.value;
    setGrouping(newGrouping);
  };

  const handleOrderingChange = (e) => {
    const newOrdering = e.target.value;
    setOrdering(newOrdering);
  };

  return (
    <div className="navbar">
      <div className="navbar__display-container">
        <button className="navbar__display" onClick={() => setIsOpen(!isOpen)}>
          <img src={settingsIcon} alt="Settings" />
          <span>Display</span>
          <img src={down} alt="Toggle dropdown" />
        </button>
        {isOpen && (
          <div className="navbar__display-settings" ref={ref}>
            <div className="navbar__display-setting">
              <label htmlFor="grouping-select" className="navbar__display-setting-label">Grouping</label>
              <select
                id="grouping-select"
                value={grouping}
                onChange={handleGroupingChange}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="navbar__display-setting">
              <label htmlFor="ordering-select" className="navbar__display-setting-label">Sorting</label>
              <select
                id="ordering-select"
                value={ordering}
                onChange={handleOrderingChange}
              >
                <option value="title">Title</option>
                {grouping !== "priority" && (
                  <option value="priority">Priority</option>
                )}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
