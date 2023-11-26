import pkg from "../package.json";

const manifest = {
  browser_action: {
    default_popup: "src/entries/popup/index.html",
  },
  permissions: ["*://*/*", "history"],
};

export function getManifest() {
  return {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 2,
    ...manifest,
  };
}
