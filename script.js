function display(val)  {
    document.getElementById("result").value += val;
}
function solution() {
    let a =document.getElementById("result").value
    let b = eval(a)
    document.getElementById("result").value = b
}
function clear() {
    document.getElementById("result").value =""
}
function attributes(arr,fun) {
    var line;
    line = document.createElement("div");
    line.setAttribute('class','col-3');
    var line1;
    line1 = document.createElement("input");
    line1.classList.add('button');
    line1.setAttribute('type','button');
    line1.setAttribute('value',arr[0]);
    line1.setAttribute('id',arr[1]);
    line.setAttribute('onclick',fun);
    line.appendChild(line1);
    return line
}

var x = document.createElement("h1");
var title =documet.createTextNode("calculator");
x.appendChild(title);
document.body.appendChild(x);

var q = document.createElement("div");
q.classList.add('container');
q.style.backgroundColor='#fff';
q.style.borderRadius=`25px`;

var q2 = document.createElement("div");
q2.classList.add('row');
q2.style.border = '3px solid #fff';
q2.style.padding = '5px';
q2.style.height = 'auto';
q2.style.fontSize = '40px';
q2.style.borderRadius = '25px';

var q3 = document.createElement("div");
q3.setAttribute('class', 'col-9');
var q4 = document.createElement("input");
q4.setAttribute('type', 'text');
q4.setAttribute('id','result');
q3.append(q4);

var q5 = document.createElement('div');
q5.setAttribute('class','col-3');
var q6 = document.createElement('input');
q6.classList.add('button');
q6.setAttribute('type','button');
q6.setAttribute('value','C');
q6.setAttribute('id','clear');
q6.setAttribute('onclick','clr()');
q5.appendChild(q6);
q2.appendChild(q3);
q2.appendChild(q5);


var q7 = document.createElement('div');
q7.setAttribute('class','row');
q7.classList.add('row');
q7.style.border = '3px solid #fff';
q7.style.padding = '5px';
q7.style.height = 'auto';
q7.style.fontSize = '40px';
q7.style.borderRadius = '25px';
var num1=set_att(['1','one'], "disp('1')");
var num2=set_att(['2','two'], "disp('2')");
var num3=set_att(['3','three'], "disp('3')");
var divide=set_att(['/','divide'], "disp('/')");
q7.appendChild(num1);
q7.appendChild(num2);
q7.appendChild(num3);
q7.appendChild(divide);

var q8 = document.createElement('div');
q8.setAttribute('class','row');
q8.classList.add('row');
q8.style.border = '3px solid #fff';
q8.style.padding = '5px';
q8.style.height = 'auto';
q8.style.fontSize = '40px';
q8.style.borderRadius = '25px';
var num4=set_att(['4','four'], "disp('4')");
var num5=set_att(['5','five'], "disp('5')");
var num6=set_att(['6','six'], "disp('6')");
var subract=set_att(['-','minus'], "disp('-')");
q8.appendChild(num4);
q8.appendChild(num5);
q8.appendChild(num6);
q8.appendChild(subract);

var q9 = document.createElement('div');
q9.setAttribute('class','row');
q9.classList.add('row');
q9.style.border = '3px solid #fff';
q9.style.padding = '5px';
q9.style.height = 'auto';
q9.style.fontSize = '40px';
q9.style.borderRadius = '25px';
var num7=set_att(['7','seven'], "disp('7')");
var num8=set_att(['8','eight'], "disp('8')");
var num9=set_att(['9','nine'], "disp('9')");
var additition=set_att(['+','plus'], "disp('+')");
q9.appendChild(num7);
q9.appendChild(num8);
q9.appendChild(num9);
q9.appendChild(additition);

var q10 = document.createElement('div');
q10.setAttribute('class','row');
q10.classList.add('row');
q10.style.border = '3px solid #fff';
q10.style.padding = '5px';
q10.style.height = 'auto';
q10.style.fontSize = '40px';
q10.style.borderRadius = '25px';
var dotted=set_att(['.','dot'], "disp('.')");
var num0=set_att(['0','zero'], "disp('0')");
var equvalent=set_att(['=','equal'], "solve()");
var mul=set_att(['*','multiply'], "disp('*')");
q10.appendChild(dotted);
q10.appendChild(num0);
q10.appendChild(equvalent);
q10.appendChild(mul);
q.appendChild(q2);
q.appendChild(q7);
q.appendChild(q8);
q.appendChild(q9);
q.appendChild(q10);
document.body.append(q);






