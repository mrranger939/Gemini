import React from "react";
import { marked } from "marked";

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
marked.setOptions({
    highlight: function (code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(code, { language: validLanguage }).value;
    },
    langPrefix: 'hljs language-', // Apply proper language class prefix for hljs styles
  });
const MarkdownRenderer = ({ markdownContent }) => {
  
  const htmlContent = marked(markdownContent);
    console.log(htmlContent)
  return (
    <div>
     
      <p style={{color:'white'}} dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
    </div>
  );
};

export default MarkdownRenderer
