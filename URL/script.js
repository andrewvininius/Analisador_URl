const urlInput = document.getElementById("url");
const analyzeButton = document.getElementById("analyzeButton");
const analysisResult = document.getElementById("analysisResult");

analyzeButton.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (isValidURL(url)) {
    analysisResult.textContent = `URL is valid: ${url}`;
  } else {
    analysisResult.textContent = `Invalid URL: ${url}`;
  }
});

function isValidURL(url) {
  const urlPattern = /^(http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
}
