function findAllLoadMoreBtns() {
  return document.querySelectorAll('button[class*="ajax-pagination-btn"]')
}

function clickAllLoadMoreBtns() {
var allBtns = findAllLoadMoreBtns()
allBtns.forEach(function(e) {
  e.click()
})
return allBtns.length
}

function hideAllElems(elemArr) {
elemArr.forEach(function(e) {
  e.style.display = "none"
})
}

function findAllCommitGroups() {
return [...document.querySelectorAll('div[data-test-selector="pr-timeline-commits-list"]')].map(d => d.parentNode)
}

function findAllActions() {
return [...document.querySelectorAll('.timeline-comment-group')].map(d => d.parentNode)
}

function hideAllCommitGroups() {
hideAllElems(findAllCommitGroups())
}

function clear() {
button = document.getElementById('clear_btn')
button.classList.add('disabled')
button.innerHTML = "Limpando......"
if (clickAllLoadMoreBtns() > 0) {
  setTimeout(clear, 100)
} else {
  hideAllCommitGroups()
  hideAllElems(findAllActions())
  button.innerHTML = "Exibindo somente comentarios do time"
}
}

function bOnPullRequestConversation() {
onPR = window.location.pathname.split('/')[3] == "pull"
onConvTab = document.querySelector('a.tabnav-tab.selected').text.includes('Conversation')
return onPR && onConvTab
}

function addClearButton() {
var button = document.createElement('button')
button.id = "clear_btn"
button.innerHTML = "Exibir apenas comentarios do time"
button.onclick = clear
button.className = 'btn btn-sm btn-outline'
button.style.marginBottom = '10px'

discussDiv = document.getElementById('discussion_bucket')
discussDiv.insertBefore(button, discussDiv.firstChild)
}

if (bOnPullRequestConversation()) {
  addClearButton()
}