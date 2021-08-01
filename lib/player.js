
export class Player {
    constructor(scene, posX, posY) {
        this.scene=scene;
        this.sprite = scene.physics.add.sprite(posX, posY, 'dude');
        this.sprite.setCollideWorldBounds(true);

        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
   }

   keybindings() {
        if (this.scene.cursors.left.isDown)
        {
            this.sprite.setVelocityX(-160);
            this.sprite.anims.play('left', true);
        }
        else if (this.scene.cursors.right.isDown)
        {
            this.sprite.setVelocityX(160);
            this.sprite.anims.play('right', true);
        }
        if (this.scene.cursors.up.isDown)
        {
            this.sprite.setVelocityY(-160);
        }
        else if (this.scene.cursors.down.isDown)
        {
            this.sprite.setVelocityY(160);
        }

        if(!this.scene.cursors.left.isDown && !this.scene.cursors.right.isDown && !this.scene.cursors.down.isDown && !this.scene.cursors.up.isDown)
        {
            this.sprite.setVelocityX(0);
            this.sprite.setVelocityY(0);
            this.sprite.anims.play('turn');
        }
    }


}






