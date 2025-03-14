import React, { useState, useEffect } from "react";
import '../styles/Editor.css';

function Editor({ markdown, onMarkdownChange }) {
  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case '1': 
          onMarkdownChange(markdown + '# ');
          e.preventDefault(); 
          break;
        case '2': 
          onMarkdownChange(markdown + '## ');
          e.preventDefault();
          break;
        case 'b': 
          onMarkdownChange(markdown + '**Bold Text**');
          e.preventDefault();
          break;
          case 'b': 
          onMarkdownChange(markdown + '***Bold Italics***');
          e.preventDefault();
          break;
        case 'i': 
          onMarkdownChange(markdown + '*Italics*');
          e.preventDefault();
          break;
        case 'l': 
          onMarkdownChange(markdown + '[Link](https://)');
          e.preventDefault();
          break;
        case 'k': 
          onMarkdownChange(markdown + '```\nBlock Code\n```');
          e.preventDefault();
          break;
          case '6': 
          onMarkdownChange(markdown + '`code`');
          e.preventDefault();
          break;
        case 'v': 
          onMarkdownChange(markdown + '- One\n- Two\n- Three\n ');
          e.preventDefault();
          break;
        case 'o': 
          onMarkdownChange(markdown + '1.');
          e.preventDefault();
          break;
        case 's': 
          onMarkdownChange(markdown + '~~Зачёркнутый текст~~');
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="editor-container">
      <h2>Markdown Editor</h2>
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => onMarkdownChange(e.target.value)}
        onKeyDown={handleKeyDown} 
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