// zbase是总的类的文件 应该放在最后打包 命名时字典序要大
// 该文件由web.html调用来创建js的总对象

class OcrApp{
    constructor(id) { // 传入web.html里div的id
        console.log("Begin to call the constructor!!\n");
        this.id = id;
        this.$ocr_app = $('#' + id); // 用jQuery找到html里div块的id 传给自己建的总对象
        // 调用menu文件夹里的zbase.js文件里的构造函数创建好menu对象
        this.menu = new OcrAppMenu(this); // 根对象是自己 this
    }
}

