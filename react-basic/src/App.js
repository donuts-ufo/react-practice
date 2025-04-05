import Article from "./components/Article.jsx";

function App() {
  return (
    <div>
      <Article
        title={"react入門1"}
        content={"今日のトピックはpropsの受け渡しについて"}
      />
      <Article
        title={"react入門2"}
        content={"今日のトピックはuseStateについて"}
      />
      <Article
        title={"react入門3"}
        content={"今日のトピックはuseEffectについて3"}
      />
    </div>
  );
}

export default App;