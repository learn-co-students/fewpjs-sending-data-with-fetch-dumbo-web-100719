// Add your code here
let submitData = (aName, anEmail) => {

let formData = {
    name: aName,
    email: anEmail
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let newH3 = document.createElement("h3")
    newH3.innerText = object.id
    document.body.append(newH3)
  })
  .catch(function(error) {
    alert("Uhoh!");
    let newH4 = document.createElement("h4")
    newH4.innerText = error.message
    document.body.append(newH4)
  })

}

submitData("nick", "nic@nic.com")