browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Hello from the background');
});

window.setInterval(() => {
  console.log('Hello, world!');
}, 1000);
