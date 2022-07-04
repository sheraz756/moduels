function onClick(){
    let oddEven = document.querySelector("#oddEven").value;

    if (oddEven%2===0)
    {
        document.querySelector("#result").innerHTML = "this is even number:" + oddEven;
    }
    else{
        document.querySelector("#result").innerHTML = "this is odd number:" + oddEven;
        
    }
}