const DuplicateCard = ({ text, active, columnId }) => {
  const cards = JSON.parse(localStorage.getItem("cards"));

  const card = {
    id: JSON.parse(localStorage.getItem("cards")).length,
    text: text,
    active: active,
    columnId: columnId
  };

  const cardList = [...cards, card];
  localStorage.setItem("cards", JSON.stringify(cardList));
};
export default DuplicateCard;
