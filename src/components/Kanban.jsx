import React, { useEffect, useState, useMemo } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Card from "./Card";
import Order from "../utils/Order";
import useFetch from "../hooks/useFetch";

const Kanban = () => {
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") || "title"
  );

  useEffect(() => {
    localStorage.setItem("ordering", ordering);
    localStorage.setItem("grouping", grouping);
  }, [ordering, grouping]);

  const { data, loading, error } = useFetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );

  useEffect(() => {
    if (grouping === "priority") {
      setOrdering("title");
    }
  }, [grouping]);

  const groupedData = useMemo(() => {
    if (!data) {
      return [];
    }

    return data[grouping].map((group) => ({
      ...group,
      tickets: Order(group.tickets, ordering),
    }));
  }, [grouping, ordering, data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="page">
      <Navbar
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
      <div className="board">
        {groupedData.map((group, index) => {
          const user =
            grouping === "user"
              ? data.users.find((u) => u.name === group.title)
              : null;
          const isAvailable = user?.available ?? null;

          return (
            <div
              className="group-column"
              key={`${grouping}-${group.title}-${index}`}
            >
              <Title
                title={group.title}
                grouping={grouping}
                count={group.tickets.length}
                available={isAvailable}
              />
              {group.tickets.map((item) => {
                const assignedUser = data.users.find(
                  (u) => u.id === item.userId
                );
                return (
                  <Card
                    key={item.id}
                    ticket={item}
                    grouping={grouping}
                    user={assignedUser}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kanban;
