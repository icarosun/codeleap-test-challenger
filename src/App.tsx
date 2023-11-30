import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadPosts } from "./actions/posts";
import { POSTS_LOCALSTORAGE_KEY } from "./constants";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { LoginPage, PostsPage } from "./pages";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts">
            <PostsPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
