import { Post } from "./Post";
import { Header } from "./components/header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Roberto Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti error perspiciatis illum, tempora assumenda sit sint dolore illo necessitatibus in ea laudantium nulla reprehenderit. Nam eum sint facilis delectus."
          />
          <Post author="Felipe" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
