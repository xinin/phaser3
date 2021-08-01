export class Utils {

    static fillScene(scene, ground){
        for(var i=0; i < 25; i++){
            for(var j=0; j < 19; j++){
                scene.add.image(16+(32*i), 16+(32*j), ground);
            }
        }
    }

}