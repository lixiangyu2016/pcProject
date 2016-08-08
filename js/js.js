/**
 * Created by Administrator on 2016/7/4.
 */
/**
 * Created by Administrator on 2016/6/27.
 */
function tab(ele,ol) {
    for (var i = 0; i < ele.length; i++) {
        var cur = ele[i];
        cur.index=i;
        cur.onmouseover = function () {
            ol[this.index].style.display = 'block';
            this.className = 'clear';
            var div = this.children[1].children;
            for (var k = 0; k < div.length; k++) {
                (function (k) {
                    var curDiv = div[k];
                    curDiv.onmouseover = function () {
                        var I = curDiv.childNodes[0];
                        var posotionT = I.style.backgroundPositionY;
                        I.style.backgroundPositionY=parseFloat(posotionT)-52+'px';
                    }
                    curDiv.onmouseout = function () {
                        var I = curDiv.childNodes[0];
                        var posotionT = I.style.backgroundPositionY;
                        I.style.backgroundPositionY=parseFloat(posotionT)+52+'px';
                    }

                })(k)
            } }
            cur.onmouseout = function () {
                ol[this.index].style.display = 'none';
                this.className = ''

        }
    }
}
function bar(){
    var nav=document.getElementById('nav');
    var navBar=nav.getElementsByTagName('ul')[0];
    var liBar=navBar.getElementsByTagName('li');
    var ol=[];
    for (var i=0;i<liBar.length;i++){
        var cur=liBar[i];
        var olBar=cur.getElementsByTagName('ol')[0];

        ol.push(olBar)
    }
    tab(liBar,ol)
}
bar();
var test=document.getElementById('text');
var   li=test.getElementsByTagName('li');
for (var i=0;i<li.length;i++){
    (function(k){
        li[k].onmouseenter=function(){
            this.children[1].children[0].style.color='#ef6523';
     var y=parseFloat(this.firstChild.style.backgroundPositionY);
            this.firstChild.style.backgroundPositionY=(y-100)+'px';
          if(this.className==='text2'){
              this.children[1].children[0].style.color='#000';
          }
       /* move(this.firstChild,{opacity:1,backgroundPositionY:y-100+'px'},1000)*/
     }
     li[k].onmouseleave =function(){
         this.children[1].children[0].style.color='#808c9a';
         var Y=parseFloat(this.firstChild.style.backgroundPositionY);
         console.log(Y)
         /*move(this.firstChild,{opacity:1,backgroundPositionY:y-100+'px'},100)*/
         this.firstChild.style.backgroundPositionY=(Y+100)+'px';
     }
    })(i)
}


var banner=document.getElementById('banner'),
    boxImg=document.getElementById('boxImg'),
    img=boxImg.getElementsByTagName('img'),
    list=document.getElementById('list');

var banner=document.getElementById('banner'),
    boxImg=document.getElementById('boxImg'),
    img=boxImg.getElementsByTagName('img'),
    list=document.getElementById('list'),
    left=document.getElementById('left'),
    right=document.getElementById('right');
img[0].style.zIndex=1;
img[1].style.zIndex=2;

function autoMove(){
    var i=parseInt(img[1].style.zIndex);
    i===2?i-=2:i+=2;
    if(i===2){
        img[1].style.zIndex=2;
        img[1].style.opacity=1;
        list.children[1].className='bg'
        list.children[0].className=''
    }else{
        img[1].style.zIndex=0;
        img[1].style.opacity=0;
        list.children[0].className='bg'
        list.children[1].className=''
    }
}
timer=window.setInterval(autoMove,3000);
right.onclick= function () {
    autoMove()
};
left.onclick= function () {
    autoMove()
}
banner.onmousemove= function () {
    window.clearInterval(timer);
}
banner.onmouseout= function () {
    timer=window.setInterval(autoMove,3000);
};
var input=document.getElementById('input');
input.onclick= function () {
    this.value='';
    input.style.border='none'
}

