/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
*/

buildPyramid(20);

function buildPyramid(height) {
    const pyramidBrick = '*';
    for (let i = 0; i < height; i++) {
        console.log(pyramidBrick.padStart(i, pyramidBrick));
    }
}