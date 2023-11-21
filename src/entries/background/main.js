import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

function openPage() {
  console.log("Referenced Here!");

  browser.tabs.create({
    'url': '/src/extension_dev/page.html'
  });
}

browser.browserAction.onClicked.addListener(openPage);