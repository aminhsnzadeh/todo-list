let _head = document.getElementById('head')
let _dec = document.getElementById('desc')
let _number = document.getElementsByClassName('listChild').length
let _flag = ''
function list() {
    if (_head.value == 0) {
        alert('Please Fill the inputs')
    } else if (_dec.value.length <= 50) {
        _number+=1
        document.getElementById('lists').innerHTML += '<li class="listChild"><article><h2>'+ _number +'.'+  _head.value +'</h2><p>- '+ _dec.value +'</p></article><span onclick="_edit(this)" class="bi-clipboard"></span><span onclick="_close(this)" id="closing" class="bi-x"></span></li>'
        _head.value = null
        _dec.value = null
    } else {
        alert('Description must be 50 or lower characters.')
    }
}
function _edit(self) {
    _flag = self
    let _tempf = self.previousElementSibling.firstChild.innerHTML
    let _tempd = self.previousElementSibling.lastChild.innerHTML
    _head.value = _tempf
    _dec.value = _tempd
    document.getElementById('change').style.display = 'block'
    document.getElementById('sub').style.display = 'none'
    document.getElementById('closeInfo').style.display = 'none'
}
function _change() {
    _flag.previousElementSibling.firstChild.innerHTML = _head.value
    _flag.previousElementSibling.lastChild.innerHTML = _dec.value
    document.getElementById('change').style.display = 'none'
    document.getElementById('sub').style.display = 'block'
    document.getElementById('closeInfo').style.display = 'block'
    _head.value = null
    _dec.value = null
}
function _close(self) {
    self.parentElement.remove()
}
function _transforms() {
    document.getElementById('todo').classList.toggle('activepar')
    document.getElementById('info').classList.toggle('activeinfo')
}
function _closetrans() {
    document.getElementById('todo').classList.remove('activepar')
    document.getElementById('info').classList.remove('activeinfo')
}