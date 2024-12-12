document.getElementById("saveBtn").addEventListener("click", () => {
  const affirmations = document
    .getElementById("mantra")
    .value.split("\n");
  chrome.storage.local.set({ affirmations: affirmations }, () => {
    window.close();
  });
});
