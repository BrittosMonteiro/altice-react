import { useEffect, useState } from "react";
import { User, EnvelopeSimple } from "phosphor-react";

export default function List() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";
    const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

    const fetchUsers = async () => {
      try {
        const res = await fetch(API_URL_USERS);
        const userDocs = await res.json();
        for (let user of userDocs) {
          try {
            const resPost = await fetch(`${API_URL_POSTS}/?userId=${user.id}`);
            const postDocs = await resPost.json();
            user.posts = postDocs;
          } catch (err) {
            console.log(err);
          }
        }
        setLetters(userDocs);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <ul className="list gap-4">
        {letters.map((letter) => (
          <li
            className="list-item row align-items-center justify-content-between pa-4 border-radius-soft font-light font-md"
            key={letter.id}
          >
            {letter.name}
            <div className="row gap-2">
              <button
                className="btn-icon"
                onClick={() => {
                  console.log("User", letter.id);
                }}
              >
                <User className="icon-sm icon-white-1" />
              </button>
              <button
                className="btn-icon"
                onClick={() => {
                  console.log("Letter", letter.id);
                }}
              >
                <EnvelopeSimple className="icon-sm icon-white-1" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}