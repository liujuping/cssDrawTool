/**
 * Created by wangtingdong on 16/6/4.
 */

//drawImage(image, x, y)
//drawImage(image, x, y, width, height)
//drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight,
    //destX, destY, destWidth, destHeight)
function CssDraw(src,srcWidth,srcHeight){
    var images=new Image();
         images.src=src;

    images.onload=function(){
        var width=srcWidth || images.width,
            height=srcHeight || images.height,
            canvas=document.createElement('canvas'),
            context=canvas.getContext('2d'),
            data,color, x, y;

        canvas.width=width;
        canvas.height=height;

        context.drawImage(images, 0, 0,width,height);
        data = context.getImageData(0, 0, width, height);
        for (var i = 0, len = data.data.length / 4; i < len; i+=2) {
            color='rgb('+data.data[i*4] +','+data.data[i*4+1]+','+data.data[i*4+2]+')';
            x = i%width;
            y = parseInt(i/width);
            if(i==0) {
                text = x+'px '+y+'px 2px 2px '+color;
            }
            else {
                text+=','+x+'px '+y+'px 2px 2px '+color;
            }
        }
        var cssNode=document.createElement('div'),
            bodyNode=document.getElementsByTagName('body')[0];
        cssNode.style='width:0;height:0;box-shadow:'+text;
        bodyNode.appendChild(cssNode);
    };

}