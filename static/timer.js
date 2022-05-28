
const oneSec = 1000,
container = document.getElementById('timer');

let dataHours 	= container.getAttribute('data-hours'),
dataMinutes = container.getAttribute('data-minutes'),
dataSeconds = container.getAttribute('data-seconds'),
  timerEnd 		= container.getAttribute('data-timer-end'),
  timerOnEndMsg = "data-timer-end";

if (dataHours == '' || dataHours == null || dataHours == NaN) {
dataHours = "0";
}
if (dataMinutes == '' || dataMinutes == null || dataMinutes == NaN) {
dataMinutes = "0";
}
if (dataSeconds == '' || dataSeconds == null || dataSeconds == NaN) {
dataSeconds = "0";
}

let hoursSpan = document.createElement('span'),
minutesSpan = document.createElement('span'),
secondsSpan = document.createElement('span'),
separator1 = document.createElement('span'),
separator2 = document.createElement('span'),
separatorValue = ":",
maxmin = 600,
max = 59;
s = parseInt(dataSeconds) > max ? max : parseInt(dataSeconds),
m = parseInt(dataMinutes) > maxmin ? maxmin : parseInt(dataMinutes),
h = parseInt(dataHours);

secondsSpan.classList.add('time');
minutesSpan.classList.add('time');
hoursSpan.classList.add('time');
separator1.classList.add('separator');
separator1.textContent = separatorValue;
separator2.classList.add('separator');
separator2.textContent = separatorValue;

checkValue = (value)=>{
if (value < 10) {
return "0" + value;
} else {
return value;
}
}

hoursSpan.textContent = checkValue(dataHours);
minutesSpan.textContent = checkValue(dataMinutes);
secondsSpan.textContent = checkValue(dataSeconds);

timer = (sv,mv,hv)=>{

s = parseInt(sv);
m = parseInt(mv);
h = parseInt(hv);

if (s > 0) {
return s -= 1;
} else {
s = max;
if (m > 0) {
return m -= 1;
} else {
m = max;
if (h > 0) {
  return h -= 1;
}
}
}
}

finished = ()=>{
max = 0;
let timerEnd = container.getAttribute(timerOnEndMsg);
container.setAttribute(timerOnEndMsg, 'true');
if (timerEnd == '' || timerEnd == null) {
  container.textContent = "timer-end";
} else {
  container.textContent = timerEnd;
}
}

counter = setInterval(()=>{

if (h == 0 && m == 0 && s == 0) {
clearInterval(counter, finished());
}

if (s >= 0) {
timer(s,m,h);
hoursSpan.textContent   = checkValue(h);
minutesSpan.textContent = checkValue(m);
secondsSpan.textContent = checkValue(s);
}
}, oneSec);

let children = [hoursSpan, separator1, minutesSpan, separator2, secondsSpan];

for (child of children) {
container.appendChild(child);
}
