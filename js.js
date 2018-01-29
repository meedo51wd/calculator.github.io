function compute(obj)
   {obj.expr.value = eval(obj.expr.value)}
var one = '1'
var two = '2'
var three = '3'
var four = '4'
var five = '5'
var six = '6'
var seven = '7'
var eight = '8'
var nine = '9'
var zero = '0'
var dbzero = '00'
var fifty = '50'
var onehand = '100'
var fivehand = '500'
var onethus = '1000'
var plus = '+'
var minus = '-'
var multiply = '*'
var divide = '/'
var decimal = '.'
function enter(obj, string)
   {obj.expr.value += string}
function clear(obj)
   {obj.expr.value = ''}