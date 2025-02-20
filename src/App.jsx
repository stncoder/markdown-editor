import React, { useState } from "react";
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';
import './styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="app">
    <h1>Markdown Editor</h1>
    <Toolbar markdown={markdown} setMarkdown={setMarkdown} />
    <div className="editor-preview-container">
      <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
      <Preview markdown={markdown} />
    </div>
  </div>
  );
}

export default App;