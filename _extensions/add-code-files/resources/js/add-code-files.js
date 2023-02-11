
// Changing Code summary text
document.querySelectorAll('div[data-code-filename]').forEach(div => {
  let filename = div.getAttribute('data-code-filename');
  let summary = div.querySelector('summary');
  summary.innerText = filename;
  
})