import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./componants/home";
import PostPage from "./componants/postsPage";
import Form from "./componants/form";

function App() {
  const [FormValues, setFormValues] = useState({
    name: "",
    email: "",
  }); // state value

  const [messages, setmessages] = useState([]); // state value

  useEffect(() => {
    getmessages();
  }, []);

  async function getmessages() {
    const response = await fetch("http://localhost:8080/messages");
    const data = await response.json();
    setmessages(data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", FormValues);
    await fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormValues),
    });
    setForm({
      name: "",
      message: "",
    });
    getmessages();
  }

  function handleInputChange(event) {
    setFormValues({
      ...FormValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <nav>
        <Link to="/">
          <div className="homepagenav">
            <h3>home</h3>
          </div>
        </Link>
        <Link to="/form">
          <div className="secondaryPage">
            <h3> new post</h3>
          </div>
        </Link>
        <Link to="/postsPage">
          <div className="secondaryPage">
            <h3>posts page</h3>
          </div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/form"
          element={
            <Form
              FormValues={FormValues}
              FormData={FormData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              setFormValues={setFormValues}
            />
          }
        />
        <Route path="/postsPage" element={<PostPage messages={messages} />} />
      </Routes>
    </>
  );
}

export default App;
