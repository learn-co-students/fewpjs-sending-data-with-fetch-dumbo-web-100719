const body = document.querySelector('body')

const formSubmit = dogForm => {
	dogForm.addEventListener("submit", e => {
		e.preventDefault()
    let dogName = e.target.dogName.value
    let dogBreed = e.target.dogBreed.value
    debugger
    postData(dogName,dogBreed)
    dogForm.reset()
		
	});
};

// Add your code here
const renderForm = () =>{
  let dogForm = document.createElement('form')
  let dogLabel1 = document.createElement('label')
  dogLabel1.innerText = 'Dog Name: '

  let dogInput1 = document.createElement('input')
  dogInput1.type = 'text'
  dogInput1.name = 'dogName'
  dogInput1.id = 'dogName'

  dogLabel1.append(dogInput1)
 

  let dogLabel2 = document.createElement('label')
  dogLabel2.innerText = 'Dog Breed: '

  let dogInput2 = document.createElement('input')
  dogInput2.type = 'text'
  dogInput2.name = 'dogBreed'
  dogInput2.id = 'dogBreed'

  dogLabel2.append(dogInput2)
  

  let submitBtn = document.createElement('input')
  submitBtn.type = 'submit'
  submitBtn.name = 'submit'
  submitBtn.id = 'submit'
  submitBtn.value = 'Submit'

  dogForm.append(dogLabel1, dogLabel2, submitBtn)
  body.append(dogForm)
  formSubmit(dogForm)

  
}

renderForm()


const postData = async(dogName, dogBreed) =>{
  const res = await fetch('http://localhost:3000/dogs',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      dogName: dogName ,
      dogBreed: dogBreed 

    })
  })
  const data = await res.json()
  console.log('data: ', data)
}

