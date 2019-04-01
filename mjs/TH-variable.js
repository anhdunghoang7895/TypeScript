function main1() {
    console.log("START");
    if (true) {
        var lang = "vi";
        let target = "en-us";
        console.log("inside block");
        console.log(target);
    }
    console.log(lang);
}
;
function main2() {
    var x = 5;
    console.log(x);
    var x = 10;
    console.log(x);
    let y = 55;
    console.log(y);
}
;
function main3() {
    console.log(x);
    var x = 5;
    let y = 10;
    console.log(y);
}
;
var unknown;
function main4() {
    let message;
    let total = 100;
    let isProduction = true;
    let prices = [120, 88, 60];
    let languages = ['vi', 'en-us'];
    let now = new Date();
}
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
;
function log(msg) {
    console.log(msg);
}
unknown = Direction.UP;
unknown = 'changed';
var message = 50;
function getPost(postId) {
    return {
        id: postId,
        title: 'Post Title',
        body: 'Post Body',
        extra: 'data'
    };
}
;
