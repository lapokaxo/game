export default class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    var x = scene.ship.x;
    var y = scene.ship.y - 16;

    super(scene, x, y, "beam");
    scene.add.existing(this);
    this.play("beam_anim");
    scene.physic.world.enableBody(this);
    this.body.velocity.y = -250;
    scene.projectiles.add(this);
  }
  update() {
    if (this.y < 32) {
      this.detroy();
    }
  }
}
