

const ErrorMessage = ({item}) =>{
    // let foodList = ["Dal", "Green Vegetables", "Roti", "Milk", "Salad"];

    return <>{item.length === 0 && <h3> I am still hungry.</h3>}</>;      
        
};
export default ErrorMessage;