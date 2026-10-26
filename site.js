"use strict";
const copyButton = document.querySelector("[data-copy-hash]");
if (copyButton) copyButton.addEventListener("click", async () => {
  const status = document.querySelector("[data-copy-status]");
  try {
    await navigator.clipboard.writeText(document.querySelector("#sha256").textContent.trim());
    status.textContent = "SHA-256 已复制";
  } catch {
    status.textContent = "请选中上方校验值手动复制";
  }
});
