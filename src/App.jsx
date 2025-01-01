import "./App.css";

function App() {
  const openInNewTab = () => {
    const url =
      "https://www.youtube.com/embed/JKccS9k56_I?si=Bx-Kstup48bnj52I&autoplay=1&fs=1";
    window.open(url, "_blank");
  };

  return (
    <>
      <h1>hello</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JKccS9k56_I?si=Bx-Kstup48bnj52I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <button onClick={openInNewTab}>Open Fullscreen in New Tab</button>
    </>
  );
}

export default App;
