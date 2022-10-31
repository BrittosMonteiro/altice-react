const API_URL = "https://jsonplaceholder.typicode.com";
const END_POINT = `${API_URL}/users`;

export async function getUsers() {
  return await fetch(END_POINT, { method: "GET" });
}
