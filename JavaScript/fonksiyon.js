function sayiUret(){
    console.log(Math.ceil(Math.random()*49))
}
function sayiUret2(){
    return Math.ceil(Math.random()*49)
}
function sayiUret3(a){
    return Math.ceil(Math.random()*a)
}
var i=0
while(i<45){
    i++
    sayiUret()
    console.log(sayiUret2()," ",sayiUret3(i))
}