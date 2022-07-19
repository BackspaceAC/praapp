// 还是总管的menu界面的js文件


class OcrAppMenu {
    constructor(root) { // 除了总类里 其他的都传总对象的实例也即ocrapp = new OcrApp()
        this.root = root; // 存下来
        // html对象前加上$
        // 创建一段html代码
        this.$menu = $(`
<!-- 对应的ocr-menu类在唯一的ocronline.css文件中有规定样式 -->
<div class="ocr-menu">
<!-- 此处为menu的zbase.js内的html界面代码 -->
    <div id=one>
        <label>请确认图片类型：</label>&nbsp;&nbsp;
        <select>
            <option>设备标签照片</option>
            <option>序列号照片</option>
            <option>照片</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br><br>

        <div id=four>
            <!-- <input type="submit" value="导入文件" onclick="send()">&nbsp; -->
            <div class="menu-item menu-item-importfile">
                导入文件
            </div>
            <br>
            <div id=three>
                <!-- <input type="submit" value="旋转图片" onclick="turn()"> -->
                <!-- <input type="submit" value="确定"> -->
                <div class="menu-item menu-item-rotateimage">
                    旋转图片
                </div>
                <br>
                <div class="menu-item menu-item-clickok">
                    确定
                </div>
            </div>
        </div>

        <br><br>

        <label>图片名称：</label>&nbsp;
        <input type="text" value="">
        &nbsp;&nbsp;

    </div>

    <div id=two>
        <img src="static/image/menu/5.jpg" width="400" height="400">
        <textarea rows="27" columns="30" id=content>Here's the contents:\n</textarea>
    </div>

</div>
`);
        this.root.$ocr_app.append(this.$menu); // 将menu对象加入到web.html里的 “zero” div里
        // 分别绑定到对象中
        this.$importfile = this.$menu.find('.menu-item-importfile');
        this.$rotateimage = this.$menu.find('.menu-item-rotateimage');
        this.$clickok = this.$menu.find('.menu-item-clickok');

        // 自动调用创建的start函数
        this.start();
    }

    start() {
        this.listening();
    }

    listening() {
        let outer = this;
        this.$importfile.click(function(){
            console.log("现在导入图片文件！！");
            alert("来辽");

            // outer.hide(); // 隐藏菜单
            // outer.root.playground.show(); // 显示下一个界面

            var xhr=null;
            if(window.XMLHttpRequest){// code for IE7, Firefox, Opera, etc.
                xhr=new XMLHttpRequest();
            }
            else if (window.ActiveXObject){// code for IE6, IE5
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
            }
            if(xhr==null){
                window.alert("浏览器不适配");
            }
            else{
                var url = "static/one.php"; // 创建xhr对象
                xhr.open("POST",url);
                xhr.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');
                var data="number= 1";
                xhr.send(data);
                //var respond=eval(xhr.responseText);
                //window.alert(respond)
            }
        });
        this.$rotateimage.click(function(){
            console.log("现在旋转图片！！");
        });
        this.$clickok.click(function(){
            console.log("点击确认！！");
        });
    }

    show() { // 显示menu界面
        this.$menu.show();
    }

    hide() { // 关闭menu界面
        this.$menu.hide();
    }
}
class OcrAppObject{
    constructor() {
        
    }

}
class OcrAppPlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`<div class="ocr-playground"></div>`);
        console.log("OKOKOKOKOKO");
        // 渲染后添加到网页里
        this.hide(); // 加入父对象前关闭 一打开网页时应该hide起来当前界面
        this.root.$ocr_app.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();

        this.start();
    }

    start() { // 初始化
    }

    update() { // 更新函数
    }

    show() { // 打开playground界面
        this.$playground.show();
    }

    hide() { // 关闭playground界面
        this.$playground.hide();
    }
}
// zbase是总的类的文件 应该放在最后打包 命名时字典序要大
// 该文件由web.html调用来创建js的总对象

export class OcrApp{
    constructor(id) { // 传入web.html里div的id
        console.log("Begin to call the constructor!!\n");
        this.id = id;
        this.$ocr_app = $('#' + id); // 用jQuery找到html里div块的id 传给自己建的总对象
        // 调用menu,playground文件夹里的zbase.js文件里的构造函数创建好menu,playground对象
        // 创建的同时,在构造函数内将对应的html渲染出来
        this.menu = new OcrAppMenu(this); // 根对象是自己 this
        // this.playground = new OcrAppPlayground(this);

        this.start();
    }

    start() {
    }
}

