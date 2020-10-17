var b=prompt("Boyunuzu Giriniz(Metre Cin)==>")
var k=prompt("Kilonuzu Giriniz==>")
b=parseFloat(b)
k=parseFloat(k)
//23
if(k/(b*b)<18.5){
    console.log("İdeal Kilonun Altındasınız")
}
if(18.5<k/(b*b)<25){
    console.log("İdeal Kilodasınız")
}
if(25<k/(b*b)<30){
    console.log("İdeal Kilonun Üzerindesiniz")
}
if(k/(b*b)>30){
    console.log("İdeal Çok Kilonun Üzerindesiniz")
}