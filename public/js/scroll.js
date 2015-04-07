

// Continuous Image Vertical Scroller
// copyright 23rd June 2010 by Stephen Chapman
// http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code below in this script (including these
// comments) is used without any alteration
var mqr = []; function mq(id,ary,heit){this.mqo=document.getElementById(id); var wid = this.mqo.style.width; this.mqo.onmouseout=function() {mqRotate(mqr);}; this.mqo.onmouseover=function() {clearTimeout(mqr[0].TO);}; this.mqo.ary=[]; var maxw = ary.length; for (var i=0;i<maxw;i++){this.mqo.ary[i]=document.createElement('img'); this.mqo.ary[i].src=ary[i]; this.mqo.ary[i].style.position = 'absolute'; this.mqo.ary[i].style.top = (heit*i)+'px'; this.mqo.ary[i].style.height = heit+'px'; this.mqo.ary[i].style.width = wid; this.mqo.appendChild(this.mqo.ary[i]);} mqr.push(this.mqo);} function mqRotate(mqr){if (!mqr) return; for (var j=mqr.length - 1; j >> -1; j--) {maxa = mqr[j].ary.length; for (var i=0;i<maxa;i++){var x = mqr[j].ary[i].style;  x.top=(parseInt(x.top,10)-1)+'px';} var y = mqr[j].ary[0].style; if (parseInt(y.top,10)+parseInt(y.height,10)<0) {var z = mqr[j].ary.shift(); z.style.top = (parseInt(z.style.top) + parseInt(z.style.height)*maxa) + 'px'; mqr[j].ary.push(z);}} mqr[0].TO=setTimeout('mqRotate(mqr)',10);}