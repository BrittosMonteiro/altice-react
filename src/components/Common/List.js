import { useEffect, useState } from "react";
import DialogUser from "../Dialog/DialogUser";
import DialogLetter from "../Dialog/DialogLetters";

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
              <DialogUser profile={letter} />
              <DialogLetter letters={letter.posts} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
