import React from 'react';
import { marked } from 'marked';
import '../styles/Preview.css';

function Preview({ markdown }) {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown || '') }}
      />
    </div>
  );
}

export default Preview;