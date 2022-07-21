// 还是总管的menu界面的js文件
// 在浏览器执行

class OcrAppMenu {
    constructor(root) { // 除了总类里 其他的都传总对象的实例也即ocrapp = new OcrApp()
        this.root = root; // 存下来
        // html对象前加上$
        // 创建一段html代码
        // 自己定义类然后在css文件中设置类的样式
        this.$menu = $(`
<!-- 对应的ocr-menu类在唯一的ocronline.css文件中有规定样式 包括背景图片地址大小 -->
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

        <!-- 文件选择框
        <input type="file" id="file"/>
        <button></button>
         -->

        <div id=four>
            <!-- <input type="submit" value="导入文件" onclick="send()">&nbsp; -->
            <div class="menu-item-importfile">
                <input type="file" id="file" name="file" accpt="image/*">
            </div>

            <br>

            <div id=three>
                <!-- <input type="submit" value="旋转图片" onclick="turn()"> -->
                <!-- <input type="submit" value="确定"> -->

                <div class="menu-item-rotateimage">
                    <button>旋转图片</button>
                </div>

                <br>

                <div class="menu-item-clickok">
                    <button>确定</button>
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
        this.root.$ocr_app.append(this.$menu); // 将menu对象加入到web.html里的 “zero” div里 即将网页展示出来

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
        // 从浏览器向服务器传
        var outer = this;
        this.$importfile.click(function(){
            console.log("现在导入图片文件！！");
            alert("来辽");
            $.ajax({
                url: "http://8.130.12.29:8080/menu/getinfo/", // 用于路由
                type: "GET",
                data: {
                    image_base64: "YU"
                },
                success: function(resp){ // 回调函数
                    console.log(resp);
                    if(resp.result === "success"){
                        // 上传成功？
                        alert("Upload Success!!!!!!!");
                    }
                    else{
                        // 上传失败？
                        alert("Upload Failed!!!!!!!!");
                    }
                }

            });

            // outer.hide(); // 隐藏菜单
            // outer.root.playground.show(); // 显示下一个界面
            /*
            var xhr=null;
            if(window.XMLHttpRequest){// code for IE7, Firefox, Opera, etc.
                xhr=new XMLHttpRequest();
                alert("///////");
            }
            else if (window.ActiveXObject){// code for IE6, IE5
                xhr=new ActiveXObject("Microsoft.XMLHTTP");
            }
            if(xhr==null){
                alert("浏览器不适配");
            }
            else{
                alert("///////");
                var url = "static/one.php"; // 创建xhr对象
                xhr.open("POST",url,false);
                xhr.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');
                var data="number= 1";
                xhr.send(data);
                var respond=eval(xhr.responseText);
                window.alert(respond);
            }
            */

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
/*
class OcrAppMap extends OcrAppObject{
    constructor(playground) {
        super();
        this.playground = playground;
        this.$canvas = $(`<canvas></canvas>`);

        this.ctx = this.$canvas[0].getContext(`2d`);
        // 画布的高宽与背景的高宽相同
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);
    }

    start() {
    }

    update() {
    }
}
*/
let OCR_APP_OBJECTS = []; // 全局数组

class OcrAppObject {
    constructor() {
        OCR_APP_OBJECTS.push(this);

        this.has_called_start = false; // 是否执行过start函数
        this.timedelta = 0; // 当前距离上一帧的时间间隔(ms)

    }
    start() { //只会在第一帧执行
    }

    update() { // 每一帧都会执行一次
    }

    on_destory() { // 销毁前执行
    }

    destory() { // 删掉该物体
        this.on_destory();

        for(let i = 0; i < OCR_APP_OBJECTS.length; i ++){
            if(OCR_APP_OBJECTS[i] === this) {
                OCR_APP_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}


let last_timestamp;
let OCR_APP_ANIMATION = function(timestamp){

    for(let i = 0; i < OCR_APP_OBJECTS.length; i ++){
        let obj = OCR_APP_OBJECTS[i];
        if(!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        }
        else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;

    requestAnimationFrame(OCR_APP_ANIMATION);
}

requestAnimationFrame(OCR_APP_ANIMATION); // 每秒钟调用
class OcrAppPlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`<div class="ocr-playground"></div>`);
        console.log("OKOKOKOKOKO");
        // 渲染后添加到网页里
        this.hide(); // 加入父对象前关闭 一打开网页时应该hide起来当前界面
        this.root.$ocr_app.append(this.$playground);

        // playground属性
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.ocr_map = new OcrAppMap(this);

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

