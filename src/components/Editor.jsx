import React from 'react';
import '../styles/Editor.css';

function Editor({ markdown, onMarkdownChange }) {
  return (
    <div className="editor-container">
      <h2>Markdown Editor</h2>
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => onMarkdownChange(e.target.value)}
        placeholder="Start writing Markdown here...
Example:
# Header
## Subtitle
- List
**Bold text**
*Italics*
~~Strikethrough text~~
[Link](https://example.com)"
      />
    </div>
  );
}

export default Editor;