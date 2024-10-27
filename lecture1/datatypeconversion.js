let randomvar="ram"
console.log(typeof(randomvar))
console.log(randomvar)
// let changedvar=Number(randomvar)
// console.log(typeof(changedvar))
// console.log(changedvar)
//"32"=>32
//"32ram"=>NAN
//"ram"=>NAN
//undefined=>NAN

let changedvar=Boolean(randomvar)
console.log(typeof(changedvar))
console.log(changedvar)
// undefined=>false
//5=>true
//0=>true
//"23"=>true
//"0"=>true
//"ram"=>true