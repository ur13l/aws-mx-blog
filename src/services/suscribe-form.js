import axios from 'axios';

export const sendSuscribeForm = (email) => {
  return new Promise((resolve, reject) => {
    const path = process.env.GATSBY_SUSCRIBE_API;
    const data = {
      'email': email,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.post(path, data, config).then(result => {
      if (result && result.status === 200) {
        resolve(true);
      } else {
        reject(null);
      }
    }).catch(error => {
      reject(null);
    });
  });
}
