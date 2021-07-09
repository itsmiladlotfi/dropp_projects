
async function notifyCustomer() {
  const customer = getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const movies = getTopMovies();
    console.log('top movies: ', movies);
     sendEmail(customer.email, movies);
    console.log('Email sent to you...');
  }
}
notifyCustomer();


function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'milad', 
        isGold: true, 
        email: 'milad@gmail.com' 
      });
    }, 4000);  
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}