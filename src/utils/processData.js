const processData = (data) => {
    const items = data.tickets;
    const users = data.users;
  
    const status = ["Backlog", "Todo", "In progress", "Done", "Cancelled"].map(
      (status) => ({
        title: status,
        tickets: items.filter((item) => item.status === status),
      })
    );
  
    const user = users.map((user) => ({
      title: user.name,
      tickets: items.filter((item) => item.userId === user.id),
    }));
  
    const priorityLevels = [
      { priority: "No priority", level: 0 },
      { priority: "Low", level: 1 },
      { priority: "Medium", level: 2 },
      { priority: "High", level: 3 },
      { priority: "Urgent", level: 4 },
    ];
  
    const priority = priorityLevels.map((level) => ({
      title: level.priority,
      tickets: items.filter((item) => item.priority === level.level),
    }));
  
    return { status, user, priority, users };
  };
  
  export default processData;