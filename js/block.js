
(function(){
if(typeof Mario === 'undefined')
window.Mario = {};
var Block = Mario.Block = function(options){
    this.item = options.item;
    this.usedSprite = options.usedSprite;
    this.bounceSprite = options.bounceSprite;
    this.breakable = options.breakable;
    
    Mario.Entity.call(this,{
        pos : options.pos, 
        sprite : options.sprite,
        hitbox : [0,0,16,16]

    });
    this.standing = true;
}
Mario.Util.inherits(Block,Mario.Floor);
Block.prototype.break = function(){
    sounds.breakBlock.play();
    (new Mario.rubble()).spawn(this.pos);
    var x = this.pos[0]/16,y = this.pos[1]/16;
    delete level .blocks[y][x];

}
Block.prototype.bonk = function(power){
    sounds.bump.play();
    if(power > 0 && this.breakable){
        this.break();
    }
    else if(this.standing){
        this.standing = false;
        if(this.item){
            this.item.spawn();
            this.item = null();
        }
        this.pos = [];
        this.pos [0] = this.pos;
        this.pos [1] = this.pos;
        if(this.bounceSprite){
            this.sprite = this.sprite;
            this.sprite = this.bounceSprite;
        }
        else{
            this.sprite = this.usedSprite;
        }
        this.vel[1] = -2;
    }
}
}




