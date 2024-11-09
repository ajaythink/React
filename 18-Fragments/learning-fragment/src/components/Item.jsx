// const Item = (props) => {
//   return (
//     <li className="list-group-itme">
//       {props.foodList}
//     </li>
//   );
// };
// export default Item;

//function destructuring
// const Item = (props) =>{
//     let {foodList} = props;
//     return(
//         <li className = "List-group-item">
//             {foodList}
//         </li>
//     )
// }
// export default Item;

//function destructuring as place of props
// const Item = ({foodList}) => {
//   return <li className="List-group kg-item"><span className="kg-span">{foodList}</span></li>;
// };
// export default Item;

// after css module add
// import styles from "./Item.module.css";
// const Item = ({foodList}) => {
//   return <li className={`${styles["kg-item"]} list-group-item`}><span className={styles["kg-span"]}>{foodList}</span></li>;
// };
// export default Item;


const Item = (props) => {

  return <><li key={props.foodI} className="list-group-item">{props.foodI}</li>
  </>
};

export default Item;