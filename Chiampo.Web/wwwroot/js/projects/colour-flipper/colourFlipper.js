//export default class ColourFlipper {
//    constructor(colour) {
//        this.backgroudColour = colour
//    }
//    random() {
//        this.backgroundColoud = Random.colour;
//    }
//}
var colours = [
    '#4EA5EF',
    '#2B87D8',
    '#E85064',
    '#25C199',
    '#EBC243',
    '#F6F5FA',
    '#E9EDF5',
    '#D6D6D6',
    '#999999',
    '#444C63',
];
var elem = document.getElementById('colour');
function randomColour() {
    var colour = colours[Math.floor(Math.random() * colours.length)];
    elem.style.backgroundColor = colour;
    elem.innerHTML = colour;
}
//# sourceMappingURL=ColourFlipper.js.map