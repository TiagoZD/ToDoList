const DuplicateColumn = ({ text, active }) => {
  const columns = JSON.parse(localStorage.getItem("columns"));

  const column = {
    id: JSON.parse(localStorage.getItem("columns")).length,
    text: text,
    active: active
  };

  const columnList = [...columns, column];
  localStorage.setItem("columns", JSON.stringify(columnList));
};
export default DuplicateColumn;
