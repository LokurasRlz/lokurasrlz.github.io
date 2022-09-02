const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'r2kBCF0osBLlU6ownV4b';

const fetchData = (url, CostumSettings = {}) => {
  const response = fetch(url, CostumSettings)
    .then((res) => res.json());
  return response;
};

const addLike = async (id) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  };
  const res = await fetchData(`${baseURL}${appId}/likes/`, settings)
    .catch((err) => err);
  return res;
};

const getLike = async () => {
  const response = await fetch(`${baseURL}${appId}/likes/`);
  const data = await response.json();
  return data;
};

// const updateLikes = () => {
// getLike().then((response) => {
//   response.forEach((element) => {
//     const container = document.querySelector(`#${element.item_id}`);
//    container.children[1].children[1].children[1].innerHTML = `${element.likes} likes`;
//   });
// });
// };

export { getLike, addLike };