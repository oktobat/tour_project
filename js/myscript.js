var openGnb = document.querySelector('.open-gnb')
var elHeader = document.querySelector('#header')
var elSection = document.querySelector('#section')

function openNav() {
    elHeader.classList.toggle('on')
    // if ( elHeader.classList.contains('on') ) {
    //     elHeader.classList.remove('on')
    // } 
}
openGnb.addEventListener('click', openNav)

function winResize() {
    var winWidth = this.innerWidth
    console.log(this.pageXOffset)
    if ( winWidth > 800 ) {
        elHeader.classList.remove('on')
    }
}


window.addEventListener('resize', winResize)
