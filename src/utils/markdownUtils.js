import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
});

export const parseMarkdown = (markdown) => {
  return marked(markdown);
};