function Sky(info) {
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.speed = info.speed;
    this.img = info.img;

}
Sky.prototype = {
    draw: function(){
        // console.log("绘制");
        //天空对象在向左移动
        this.x -= this.speed;

        //如果移出舞台，就排到队伍后面
        if (this.x <= -this.canvas.width) {
            this.x = this.canvas.width;
        }

        //绘制
        this.context.drawImage(this.img, this.x, 0, this.img.width, this.img.height);
    }
}