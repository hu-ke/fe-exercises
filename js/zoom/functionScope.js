// var a = 1
// function test() {
// 	var a = 2
// 	function b() {
// 		console.log(a)
//     }	
// 	b()
// }
// test()

var a = 1
function b() {
	console.log(a)
}	

function test() {
	var a = 2
	b()
}
test()

