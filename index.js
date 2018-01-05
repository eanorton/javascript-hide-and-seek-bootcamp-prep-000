function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
 }
 
 function deepestChild() {
   const lis = document.getElementById('grand-node').querySelectorAll('ul.ranked-list li')
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
}
