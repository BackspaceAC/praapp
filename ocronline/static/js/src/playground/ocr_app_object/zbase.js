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
