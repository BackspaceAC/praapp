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
