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
