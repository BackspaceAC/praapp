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
        });
        this.$rotateimage.click(function(){
            console.log("现在旋转图片！！");
        });
        this.$clickok.click(function(){
            console.log("点击确认！！");
        });
    }
}
