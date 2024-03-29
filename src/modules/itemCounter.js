const movieCounter = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const dataList = await response.json();
  const total = dataList.length;
  return total;
};

export default movieCounter;