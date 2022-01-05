//patient and provider profiles
const form = document.querySelector("#newuser") 
const patientBtn = document.querySelector(".patientBtn") 
const doctorBtn = document.querySelector(".doctorBtn") 
const firstQuestion = document.querySelector(".firstQuestion") 
const patientQuestions = document.querySelector(".patientQuestions") 
const doctorQuestions = document.querySelector(".doctorQuestions") 

//Patient API POST Section
// Helper function that accepts a `review` object, sends a POST request & returns the result
const patient = (patient) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch('/api/patient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patient),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });
    
 //Provider API POST Section
    const provider = (provider) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch('/api/provider', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
   patientForm.addEventListener('submit', (e) => {
      e.preventDefault();

   providerForm.addEventListener('submit', (e) => {
      e.preventDefault();

  // Create a new object from the input values
  const newPatient = {
    id: reviewInput.value.trim(),
    name: reviewInput.value.trim(),
    email: reviewInput.value.trim(),
    allergies: reviewInput.value.trim(),
    height: reviewInput.value.trim(),
    weight: reviewInput.value.trim(),
    provider_id: reviewInput.value.trim(),
    treatment_plan: reviewInput.value.trim(),
  };

  const newProvider = {
    id: reviewInput.value.trim(),
    name: reviewInput.value.trim(),
    patient_id: reviewInput.value.trim(),
    email: reviewInput.value.trim(),
    phone: reviewInput.value.trim(),
    specialty: reviewInput.value.trim(),
  };

  // Call our postPatient & postProvider method to make a POST request with our `newReview` object.
  postPatient(newPatient)
    .then((data) => alert(`Patient added! Patient ID: ${data.body.patient_id}`))
    .catch((err) => console.error(err));

  postProvider(newProvider)
    .then((data) => alert(`Provider added! Provider ID: ${data.body.provider_id}`))
    .catch((err) => console.error(err));
   })
});
