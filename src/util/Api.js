//The link provided is not working. I will try to solve the problem without the link. https://raw.githubusercontent.com/courseraap/capstone/main/api.js
const fetchAPI = (date) => {
  // Simulează apelul API pentru a obține orele disponibile
  const availableTimes = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];
  return availableTimes;
};

const submitAPI = (formData) => {
  // Simulează trimiterea datelor formularului la API
  console.log("Form data submitted:", formData);
  return true;
};

export { fetchAPI, submitAPI };
