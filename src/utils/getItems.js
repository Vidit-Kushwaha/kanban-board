let DATA = {};

await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
  .then((response) => response.json())
  .then((data) => {
    let items = data.tickets;
    let users = data.users;

    const status = ["Backlog", "Todo", "In progress", "Done", "Cancelled"].map(
      (e) => {
        return {
          title: e,
          tickets: items.filter((item) => {
            return item.status === e;
          }),
        };
      }
    );

    const user = users.map((e) => {
      return {
        title: e.name,
        tickets: items.filter((item) => {
          return item.userId === e.id;
        }),
      };
    });

    const priority = [
      { priority: "No priority", level: 0 },
      { priority: "Low", level: 1 },
      { priority: "Medium", level: 2 },
      { priority: "High", level: 3 },
      { priority: "Urgent", level: 4 },
    ].map((e) => {
      return {
        title: e.priority,
        tickets: items.filter((item) => {
          return item.priority === e.level;
        }),
      };
    });

    DATA = { status: status, user: user, priority: priority, users: users };
  })
  .catch(() => {
    DATA = { status: [], user: [], priority: [], users: [] };
  });

export default DATA;
