import browser from "webextension-polyfill"

const PageContent = () => {
  const handler = () => {
    browser.tabs.create({
      'url': '/src/extension/history_page.html'
    })
  }

  return (
    <div>
      <button type="button" onClick={handler}>
        History Page!!!
      </button>
    </div>
  )
}
export default PageContent
