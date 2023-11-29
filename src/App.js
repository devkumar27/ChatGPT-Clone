

function App() {
  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="chat-history">
          <li>Kuch Bhi!!</li>
        </ul>

        <nav><p>Made by DEV</p></nav>
      </section>

      <section className="main">
        <h1>ChatGPT 3.5</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section"> 
          <div className="input-container">
            <input type="text"></input>
            <div id="submit">Send</div>
          </div>
          <p className="info">
          ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
