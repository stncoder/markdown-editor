import React, { useState } from "react";
import '../styles/Toolbar.css';

function Toolbar({ markdown, setMarkdown }) {
  const [showHeadings, setShowHeadings] = useState(false); 
  const [showLists, setShowLists] = useState(false); 
  const addFormatting = (syntax) => {
    setMarkdown(markdown + syntax);
  };

  const handleHeadingClick = (level) => {
    const heading = '#'.repeat(level) + ' ';
    addFormatting(heading);
    setShowHeadings(false);
  };

  const handleListClick = (type) => {
    let listSyntax = '';
    switch (type) {
      case 'unordered':
        listSyntax = '- One\n- Two\n- Three\n ';
        break;
      case 'ordered':
        listSyntax = '1. One\n2. Two\n3. Three\n';
        break;
        default:
        break;
    }
    addFormatting(listSyntax);
    setShowLists(false);
  };

  return (
    <div className="toolbar">
      <button onClick={() => addFormatting('# ')}>Header</button>
      <div className="dropdown">
        <button onClick={() => setShowHeadings(!showHeadings)}>Subheader</button>
        {showHeadings && (
          <div className="dropdown-content">
            <button onClick={() => handleHeadingClick(2)}>Subheader 1 (##)</button>
            <button onClick={() => handleHeadingClick(3)}>Subheader 2 (###)</button>
            <button onClick={() => handleHeadingClick(4)}>Subheader 3 (####)</button>
            <button onClick={() => handleHeadingClick(5)}>Subheader 4 (#####)</button>
            <button onClick={() => handleHeadingClick(6)}>Subheader 5 (######)</button>
          </div>
        )}
      </div>
      <button onClick={() => addFormatting('**Bold text**')}>Bold</button>
      <button onClick={() => addFormatting('*Italics*')}>Italics</button>
      <button onClick={() => addFormatting('***Bold-Italic***')}>Bold-Italics</button>
      <button onClick={() => addFormatting('~~Strikethrough text~~')}>Strikethrough text</button>
      <div className="dropdown">
        <button onClick={() => setShowLists(!showLists)}> List </button>
        {showLists && (
          <div className="dropdown-content">
            <button onClick={() => handleListClick('unordered')}>Unordered List (-)</button>
            <button onClick={() => handleListClick('ordered')}>Ordered List (1.)</button>
          </div>
        )}
      </div>
      <button onClick={() => addFormatting('[Link](https://)')}>Link</button>
      <button onClick={() => addFormatting('![Link](https://)')}>Image Link</button>
      <button onClick={() => addFormatting('`\nCode\n`')}>Code</button>
      <button onClick={() => addFormatting('```\nBlock \nCode\n```')}>Block Code</button>
      <button onClick={() => addFormatting('---')}>Line</button>
    </div>
  );
}

export default Toolbar;