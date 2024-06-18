import { useState } from "react";
import "./articles.css";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../services/articleservices";
import { Button } from "reactstrap";

export const NewArticle = ({currentUser}) => {
  const [newArticle, setNewArticle] = useState({
    url: "",
    title: "",
    synopsis: "",
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const article = {
        title: newArticle.title,
        synopsis: newArticle.synopsis,
        url: newArticle.url,
        timestamp: Date(),
        userId: currentUser.id
    }
    createArticle(article).then(() => {
        navigate("/articles")
    })

  }

  return (
    <div className="form">
      <form className="article-form">
        <h2>New Article</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Article Title"
            onChange={(event) => {
              const articleCopy = { ...newArticle };
              articleCopy.title = event.target.value;
              setNewArticle(articleCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Summary of Article"
            onChange={(event) => {
              const articleCopy = { ...newArticle };
              articleCopy.synopsis = event.target.value;
              setNewArticle(articleCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="URL"
            onChange={(event) => {
              const articleCopy = { ...newArticle };
              articleCopy.url = event.target.value;
              setNewArticle(articleCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <Button onClick={handleSave}>
            Submit New Article
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
