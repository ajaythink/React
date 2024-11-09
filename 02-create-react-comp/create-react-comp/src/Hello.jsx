function Hello(){
    const myName = "Ajay Kumar"
    let number = 234;
    let fullName = () =>{
        return 'Ajay Prajapati';
    }
    return <h3>
        Message Number: {number} 
        Hello, This is the whold World is Goal.
        Who is learning best course, {myName} This is variable, {fullName()} this is function.
    </h3>
}
export default Hello;