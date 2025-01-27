document.getElementById('copy-button').addEventListener('click', function() {
  var codeText = document.getElementById('code-text');
  var range = document.createRange();
  range.selectNode(codeText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('Code copied!');
});
// JavaScript Document