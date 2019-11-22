
document.addEventListener("DOMContentLoaded",(event) => {
    console.log(event)

    submitData('diego','email')
})

function submitData(name,email){
    let docBody = document.querySelector('body')
    const url = 'http://localhost:3000/users'
   return fetch(url, {
         method:'POST',
         headers: { 
            'Content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
        name: name,
        email: email
    })
    })
    .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
        // docBody.innerText = object.id
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
}