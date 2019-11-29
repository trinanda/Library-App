import Axios from 'axios';

// const GetLibrary = () => {
//   Axios.get('http://10.10.10.7:3020/').then(res => {
//     const library = res.data;
//     console.log(library);
//     return library;
//   });
//   //   return {name: '123'};
// };

function GetLibrary() {
  return Axios.get('http://10.10.10.7:3020/')
    .then(response => {
      return response;
    })
    .catch(err => {
      throw err;
    });
}

// function GetUser(userId) {
//   Axios.get('http://10.10.10.7:3020/' + userId).then(res => {
//     const user = res.data;
//     console.log(user);
//     return user;
//   });
//   //   return {name: '123'};
// }

const GetUser = userId => {
  Axios.get('http://10.10.10.7:3020/' + userId).then(res => {
    const user = res.data;
    console.log(user);
    return user;
  });
  //   return {name: '123'};
};

export {GetLibrary, GetUser};
