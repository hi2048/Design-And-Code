/**
 * 依赖关系 虚线箭头：O2，Water---->
 */

 const O2 = require('./o2.js');
 const Water = require('./water.js');

 class Animal {
     constructor(){
        if(new.target === Animal)
            throw new Error(`${Animal} cannot be initialized.`);

        console.log('Animal constructor.');
        this.life = true;
     }

     metaboly(o2 = new O2(), water = new Water()){
        return;
     }

     breed(){}
 }

 module.exports = Animal;