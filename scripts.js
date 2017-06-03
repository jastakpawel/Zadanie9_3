var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var bigLetters = dinosaur.toUpperCase();

var replacingVelo = text.replace('Velociraptor', bigLetters);

var lengthOfText = replacingVelo.length;

console.log(replacingVelo.substr(0, lengthOfText /2) );


