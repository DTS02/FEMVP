export function PostData(type, userData) {
    let BaseURL = 'http://677674ab417e.ngrok.io/users/signup';
 

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}

export function PostDataLogin(type, userData) {
  let BaseURL = 'http://677674ab417e.ngrok.io/users/login';


  return new Promise((resolve, reject) =>{
  
       
      fetch(BaseURL+type, {
          method: 'POST',
          body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });


    });
}

