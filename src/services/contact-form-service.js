import axios from 'axios';

export const sendContactForm = (name, email, msg) => {
  return new Promise((resolve, reject) => {
    const path = process.env.GATSBY_SEND_EMAIL_API;
    const data = {
      'name': name,
      'email': email,
      'msg': msg
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