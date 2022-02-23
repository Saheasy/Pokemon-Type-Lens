// @input Asset.Material sprite
// @input Asset.Material sprite2
// @input Asset.Texture[] textures

// Our starting texture index
var currentItemIndex = 0;
var count = 0;
const pokemonTotal = 905;
function weightedRandom(spec) {
  var i, sum=0, r=Math.random();
  for (i in spec) {
    sum += spec[i][2] / pokemonTotal;
    if (r <= sum) return i;
  }
}
function getRandInt(max) {
  return Math.floor(Math.random() * max);
  return 
}

// Assign the initial texture to our sprite
script.sprite.mainPass.baseTex = script.textures[currentItemIndex]

var event = script.createEvent("UpdateEvent");
event.bind(function (eventData){
    if (count == 0){
        currentItemIndex += 1;
        currentItemIndex = currentItemIndex % script.textures.length;
        script.sprite.mainPass.baseTex = script.textures[currentItemIndex];
        script.sprite2.mainPass.baseTex = script.textures[getRandInt(18)];
    }
});


var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = 0;
event.bind(function (eventData){
    //On mouth opens, changes the value of count so update function no longer works
    var value = global.types[weightedRandom(global.types)];
    count++;
    print(value);
    script.sprite2.mainPass.baseTex = script.textures[value[0]];
    script.sprite.mainPass.baseTex = script.textures[value[1]];
});