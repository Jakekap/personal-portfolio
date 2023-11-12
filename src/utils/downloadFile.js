export default function downloadFile(url, name) {
  const aTag = document.createElement('a')
  aTag.href = url
  aTag.download = name
  document.body.appendChild(aTag)
  aTag.click()
  aTag.remove()
}
