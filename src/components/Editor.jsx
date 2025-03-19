import React from "react";
import '../styles/Editor.css';

function Editor({ markdown, onMarkdownChange }) {
  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      const { selectionStart, selectionEnd } = e.target;
      const selectedText = markdown.slice(selectionStart, selectionEnd);

      const modifyText = (newText) => {
        const beforeText = markdown.slice(0, selectionStart);
        const afterText = markdown.slice(selectionEnd);
        onMarkdownChange(beforeText + newText + afterText);
        e.preventDefault();
      };

      switch (e.key.toLowerCase()) {
        case '1':
          modifyText(selectedText ? `# ${selectedText}` : '# ');
          break;
        case '2':
          modifyText(selectedText ? `## ${selectedText}` : '## ');
          break;
        case 'b':
          modifyText(selectedText ? `**${selectedText}**` : '**Bold Text**');
          break;
        case 'i':
          modifyText(selectedText ? `*${selectedText}*` : '*Italics*');
          break;
        case 'l':
          modifyText(selectedText ? `[${selectedText}](https://)` : '[Link](https://)');
          break;
        case 'k':
          modifyText(selectedText ? `\`\`\`\n${selectedText}\n\`\`\`` : '```\nBlock Code\n```');
          break;
        case '6':
          modifyText(selectedText ? `\`${selectedText}\`` : '`code`');
          break;
        case ';':
          modifyText(selectedText ? `- ${selectedText.split('\n').join('\n- ')}` : '- One\n- Two\n- Three\n');
          break;
        case 'o':
          modifyText(selectedText ? `1. ${selectedText}` : '1.');
          break;
        case 's':
          modifyText(selectedText ? `~~${selectedText}~~` : '~~Strikethrough Text~~');
          break;
        default:
          return; // Не предотвращаем стандартное поведение для других комбинаций
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