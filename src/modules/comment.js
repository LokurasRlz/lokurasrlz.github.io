const baseurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appID = 'cls83OiphUzpXXPvLSa9';

const postComment = async (_id, _name, _comment) => {
  const response = await fetch(`${baseurl}${appID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movieId: _id,
      username: _name,
      comment: _comment,
    }),
  });
  const post = await response.text();
  return post;
};

const getComments = async (_id) => {
  const response = await fetch(`${baseurl}${appID}/comments?movieId=${_id}`);
  const comments = await response.json();
  return comments;
};

export {
  postComment,
  getComments,
};