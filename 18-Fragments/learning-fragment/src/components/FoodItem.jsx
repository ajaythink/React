import Item from "./Item";
const FoodItem = ({item}) => {
  // let foodList = ["Dal", "Green Vegetables", "Roti", "Milk", "Salad"];
  return (
    <ul className="lsit-group">
      {item.map((item) => (
        <Item key={item} foodI={item}></Item>
      ))}
    </ul>
  );
}; 
export default FoodItem;
