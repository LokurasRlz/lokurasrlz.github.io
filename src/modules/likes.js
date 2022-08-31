const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'r2kBCF0osBLlU6ownV4b';

const setLike = async (id) => {
  const connect = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const response = await connect.text();
  return response;
};

const getLike = async () => {
  const connect = await fetch(`${baseURL}${appId}/likes/`);
  const response = await connect.json();
  return response;
};

//const updateLikes = () => {
 // getLike(appId).then((response) => {
 //   response.forEach((element) => {
 //     const container = document.querySelector(`#${element.item_id}`);
 //     container.children[1].children[1].innerHTML = `${element.likes} likes`;
//    });
//  });
//};

export { getLike, setLike };