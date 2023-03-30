function onCopy(e) {
  console.log(e);
  // chrome.storage.sync.set({})
}

document.addEventListener('copy', onCopy, true);