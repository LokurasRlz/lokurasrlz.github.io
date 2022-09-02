const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'r2kBCF0osBLlU6ownV4b';

const addLike = async (id) => {
  const connect = await fetch(`${baseURL}${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
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


export { getLike, addLike };