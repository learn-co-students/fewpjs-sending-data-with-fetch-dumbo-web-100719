// Add your code here
function submitData(name, email){
  return fetch('http://localhost:3000/users', {
      method:'POST',
      headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
       },
      body: JSON.stringify({
          'name': name,
          'email': email 
      })
    })
    .then(r => r.json())
    .then(responseObj => {
        document.body.innerHTML = responseObj[ "id" ]
    })
    .catch(function(error){
        alert("Error!");
        document.body.innerHTML = error.message
    })
}