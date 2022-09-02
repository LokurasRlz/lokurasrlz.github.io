const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'r2kBCF0osBLlU6ownV4b';

//const fetchData = (url, CostumSettings = {}) => {
  //const response = fetch(url, CostumSettings)
  //  .then((res) => res.json());
 // return response;
//};

const addLike = async (id) => {
  const connect = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  //const response = await connect.text();
  //return response;
  return connect;
};

const getLike = async () => { 
  const connect = await fetch(`${baseURL}${appId}/likes/`);
  try { 
    const response = await connect.json();
  return response;
  } catch  {
    return ; 
  }
  
};

//const updateLikes = () => {
  //getLike(appId).then((response) => {
 //   response.forEach((element) => {
 //     const container = document.querySelector(`#${element.item_id}`);
  //    container.getElementsByClassName('.like2')[0].innerHTML = `${element.likes} likes`;
  //  });
 // });
//};

//const getLike = async () => {
 // const response = await fetch(`${baseURL}${appId}/likes/`);
 // const data = await response.json();
 // return data;
//};

export { getLike, addLike };