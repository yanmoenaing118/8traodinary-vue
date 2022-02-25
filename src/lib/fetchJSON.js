export default async function fetchJSON(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
}
