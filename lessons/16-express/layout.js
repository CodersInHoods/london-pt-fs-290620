const html = (body) =>
  `<html>
  <head>
  <style>
  a{ display: block; }</style> 
  <link rel="stylesheet" href="/styles.css"/>
  </head>
  ${body}
  <script src="/index.js"></script>
  </html>`;
const body = (content) => `<main>${content}</main>`;
const h1 = (content) => `<h1>${content}</h1>`;
const errorDiv = (content) => `<div class="error">${content}</div>`;
const a = (content, to) => `<a href="${to}">${content}</a>`;

module.exports = {
  html,
  body,
  h1,
  a,
  errorDiv,
};
