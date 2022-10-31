const API_URL = "https://jsonplaceholder.typicode.com";
const END_POINT = `${API_URL}/posts`;

export async function getPostsByUserId(id) {
  return await fetch(`${END_POINT}/?userId=${id}`, { method: "GET" });
}
