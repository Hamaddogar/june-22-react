function myfunction(event) {
    event.preventDefault() // it  prevent to refresh browser that why we use this one
    console.log("event.preventDefault() avoid to prevent refresh browser ")

    let firstName = document.getElementById("uname").value;
    let lastName = document.getElementById("lname").value;
    let city = document.getElementById("city").value;
    let gender = document.querySelector("input[name='gender']:checked").value
    const my_Data = { firstName, lastName, city, gender }
    const array=[]
     array.push(my_Data)

    localStorage.setItem("Muhammad_info",JSON.stringify(array))
    









}