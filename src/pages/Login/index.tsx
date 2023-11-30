import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "../../components";
import { useAppDispatch } from "../../hooks/redux";
import { setUserName } from "../../redux/slices/username.slice";
import "./style.css";
export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setUserName(username.trim()));
    history.push("/posts");
  }

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit} className="standard-form">
        <h1>Welcome to CodeLeap network!</h1>
        <Input
          placeholder="John doe"
          label="Please enter your username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Button uppercase disabled={!username}>
          Enter
        </Button>
      </form>
    </main>
  );
};
