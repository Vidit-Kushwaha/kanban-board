const colors = ["#FF6347", "#808080", "#FFA500", "#1E90FF"];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default getRandomColor;
