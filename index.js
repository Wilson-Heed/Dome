 const game = document.querySelector('.start2')

game.addEventListener('mouseover', tart)

 function tart(){
    game.innerHTML='Enjoy'
    alert('Begin Game')
 }


// X SECTION
const X = document.querySelector('.but12')

X.addEventListener('click', showsymbol)

function showsymbol(){
    X.innerHTML='O'
}


const Y = document.querySelector('.but122')

Y.addEventListener('click', showsymboll)

function showsymboll(){
    Y.innerHTML='O'
}

const Z = document.querySelector('.but1222')

Z.addEventListener('click', showsymbolll)

function showsymbolll(){
    Z.innerHTML='O'
}

const A = document.querySelector('.but12222')

A.addEventListener('click', showsymbollll)

function showsymbollll(){
    A.innerHTML='O'
}

const B = document.querySelector('.but122222')

B.addEventListener('click', showsymbolllll)

function showsymbolllll(){
    B.innerHTML='X'
}



// O SECTION
const O = document.querySelector('.buto22')

O.addEventListener('click', show)

function show(){
    O.innerHTML='X'
}


const P = document.querySelector('.buto222')

P.addEventListener('click', shows)

function shows(){
    P.innerHTML='X'
}

const Q = document.querySelector('.buto2222')

Q.addEventListener('click', showss)

function showss(){
    Q.innerHTML='X'
}

const R = document.querySelector('.buto22222')

R.addEventListener('click', showsss)

function showsss(){
    R.innerHTML='X'
}

