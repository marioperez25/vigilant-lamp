export function copyTextToClipboard(text:string) {
  navigator
  .clipboard
  .writeText(text)
  .then( () => alert(`Text "${text}" was copied to the clipboard`))
  .catch(error => console.error(error));
}