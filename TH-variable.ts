function main1() {
console.log("START");
if (true) {
var lang = "vi";
let target = "en-us";
console.log("inside block");
console.log(target);
}
console.log(lang);
};


function main2() {
var x = 5;
console.log(x);
var x = 10;
console.log(x);

let y = 55;
console.log(y);

};


function main3() {
console.log(x);
var x = 5;
let y = 10;
console.log(y);
};



var unknown: any;

function main4() {
let message: string;
let total: number = 100;
let isProduction = true;
let prices: Array<number> = [120, 88, 60];
let languages: string[] = ['vi', 'en-us'];
let now = new Date();

}

enum Direction {
UP,
DOWN,
LEFT,
RIGHT
};

function log(msg: string): void {
console.log(msg);
}

interface IPost {
id: string;
title: string;
body?: string;
}


unknown = Direction.UP;
unknown = 'changed';

var message = 50;

function getPost(postId: string): IPost {
return {
id: postId,
title: 'Post Title',
body: 'Post Body',
extra: 'data'
} as IPost;
};