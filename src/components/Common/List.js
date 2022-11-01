import { useEffect, useState } from "react";
import DialogUser from "../Dialog/DialogUser";
import DialogLetter from "../Dialog/DialogLetters";
const API_URL = "https://jsonplaceholder.typicode.com";

export default function List() {

  /**
   * Initial state for letters, which will contain both users and posts data
   */
  const [letters, setLetters] = useState([]);

  /**
   * Initial state for errors, which will be displayed on screen an error occur.
   */
  const [lettersError, setLettersError] = useState("");

  /**
   * This useEffect is used to load all users and posts API content.
   * After fetching all users, it's going to search and push for all posts related to each found user.
   * Then, it will populate letters useState, so it can be displayed on screen
   */
  useEffect(() => {
    const API_URL_USERS = `${API_URL}/users`;
    const API_URL_POSTS = `${API_URL}/posts`;

    const fetchUsers = async () => {
      try {
        const res = await fetch(API_URL_USERS);
        const userDocs = await res.json();
        for (let user of userDocs) {
          try {
            const resPost = await fetch(`${API_URL_POSTS}/?userId=${user.id}`);
            const postDocs = await resPost.json();
            user.posts = postDocs;
          } catch (err) {}
        }
        setLetters(userDocs);
      } catch (err) {
        console.log(err.message);
        setLettersError(
          "An error has occured. Where're trying to load your items. Please, come back later."
        );
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {letters.length > 0 ? (
        <ul className="list gap-4">
          {letters.map((letter) => (
            <li
              className="list-item row align-items-center justify-content-between pa-4 border-radius-soft font-light font-md"
              key={letter.id}
            >
              {letter.name}
              <div className="row gap-2">
                <DialogUser profile={letter} />
                {letter.posts.length > 0 ? (
                  <DialogLetter letters={letter.posts} />
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data pa-4 border-radius-sm font-light font-sm text-center">
          {lettersError}
        </p>
      )}
    </>
  );
}
