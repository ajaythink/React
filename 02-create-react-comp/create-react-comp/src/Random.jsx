function Random(){
    let min = 10;
    let max = 20;

    let number = Math.random() * 10;
    return <div>
        <h2> This is Random number: {Math.floor(Math.random()*(max - min + 1))+ min} </h2>
        
        <h2 style={{'background-color': '#776691'}}> This is Random number: {Math.floor(Math.random()*(max - min + 1))+ min} </h2>
        
    </div>

}
export default Random;