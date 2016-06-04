# cssDrawTool

首先看一下我的[demo](http://liujuping.github.io/cssDrawTool/demo.html)

画的海贼王，用图片加上动画帧合成的。。
这是一个用css画图片的插件，画图片用的是box-shadow，使用方法也很简单哦。

### step1 引入插件

''' javascript

<script src="js/cssDraw.js"></script>

'''

### step2 创建对象

''' javascript
    var src='img/1.png',
        drawWidth=600,
        drawHeight=300;
    new CssDraw(src,drawWidth,drawHeight);

    /*
     * CssDraw可以传入的参数有三个，
     *
     * src:图片地址
     * drawWidth:css画出来的图片的宽度，缺省值是源图片的宽度
     * drawHeight:css画出来的图片的高度，缺省值是源图片的高度
     */

'''
不要创建太大的，否则卡死！！！还在优化中。。。尽量用小图片试一下吧（ 忧 伤 还不知道咋优化 希望有人能给点建议 ）

### step3 把样式复制过去

 如果想装一下逼，就可以把产生的css复制过去，就可以创建自己的纯css画的图像啦！！！
