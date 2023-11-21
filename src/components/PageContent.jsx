import { useState } from "react";
import "./PageContent.css";
import logo from "~/assets/logo.svg";
import browser from "webextension-polyfill";

function PageContent(props) {
  const imageUrl = new URL(logo, import.meta.url).href;

  const [count, setCount] = useState(0);
  

  const handler = () => {
    browser.tabs.create({
      'url': '/src/extension/history_page.html'
    })
  }

  return (
    <div>
      <img src={imageUrl} height="45" alt="" />
      <h1>{props.children}</h1>
      <button type="button" onClick={handler}>
        Press to Open Page!!!
      </button>
    </div>
  );
}

export default PageContent;
