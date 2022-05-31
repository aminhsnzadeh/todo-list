let _head = document.getElementById('head')
let _dec = document.getElementById('desc')
let _lists = document.getElementById('lists')
let _number = document.getElementsByClassName('listChild').length
let _parent = document.getElementById('todo')
let _info = document.getElementById('info')
function list() {
    if (_head.value == 0) {
        alert('Please Fill the inputs')
    } else if (_dec.value.length <= 50) {
        _number++
        _lists.innerHTML += '<div class="listChild"><article><h2>'+ _number + '. '+  _head.value +'</h2><p>- '+ _dec.value +'</p></article><span id="closing" class="bi-x"></span></div>'
        _head.value = ''
        _dec.value = ''
    } else {
        alert('Description must be 50 or lower characters.')
    }
    let _close = document.querySelectorAll('#closing')
    for (let i = 0; i<_close.length; i++) {
        _close[i].onclick = function() {
            this.parentNode.remove()
        }
    }
}
function _transforms() {
    _parent.classList.toggle('activepar')
    _info.classList.toggle('activeinfo')
}
function _closetrans() {
    _parent.classList.remove('activepar')
    _info.classList.remove('activeinfo')
}