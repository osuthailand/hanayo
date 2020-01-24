(function() {
var reviews = [
    {
    name: "Akinya",
    avatar:  "https://a.ainu.pw/1300",
    link: "https://ainu.pw/u/1300",
    review: "this server is lovely, with friendly people but like to tease the others"
    },
    {
    name: "Zendaya",
    avatar:  "https://a.ainu.pw/1188",
    link: "https://ainu.pw/u/1188",
    review: "Lmaoo they asking for reviews for the homepage put me there or u ban"
    },
    {
    name: "Cherry",
    avatar:  "https://a.ainu.pw/1028",
    link: "https://ainu.pw/u/1028",
    review: "I want say thanks to Aoba (Server Owner), he always was help me in my beginnings and ... One more thanks <3 Thanks to Ainu Community."
    },
    {
    name: "Pepega",
    avatar: "https://a.ainu.pw/1023",
    link: "https://ainu.pw/u/1023",
    review: "most fun i've had playing osu has been on this server would recommend"
    },
    {
    name: "KeepSOBP",
    avatar: "https://a.ainu.pw/1329",
    link: "https://ainu.pw/u/1329",
    review: "Please register ainu so you can get country rank #1 faster OOF"
    }
];
var review = reviews[Math.floor(Math.random() * 4)];
document.getElementById("review").innerHTML =
    '<a href="' + review.link + '" class="reivew-avatar" style="background-image: url(' + review.avatar + ')"></a>' +
    '<div class="review-content">' +
    '<a href="' + review.link + '" class="text-h3">' + review.name + '</a>' +
    '<span class="review-text">' + review.review  + '</span>'
    '</div>';
})();

(function() {
var quotes = [
    {
    name: "LifelessApple",
    avatar:  "https://a.ainu.pw/1264",
    link: "https://ainu.pw/u/1264",
    review: "good server I like better than other server :)"
    },
    {
    name: "0249",
    avatar:  "https://a.ainu.pw/1357",
    link: "https://ainu.pw/u/1357",
    review: "ainu very good and epic and stuff yes"
    },
    {
    name: "slurry",
    avatar:  "https://a.ainu.pw/1367",
    link: "https://ainu.pw/u/1367",
    review: "Best server you'll ever find"
    },
    {
    name: "xxdnull",
    avatar:  "https://a.ainu.pw/1178",
    link: "https://ainu.pw/u/1178",
    review: "welcome to ainu please like and subscribe then comment down below"
    },
    {
    name: "Kiyushi",
    avatar: "https://a.ainu.pw/1538",
    link: "https://ainu.pw/u/1538",
    review: "<3"
    }
];
var quote = quotes[Math.floor(Math.random() * 2)];
document.getElementById("review-row-3").innerHTML =
    '<a href="' + quote.link + '" class="reivew-avatar" style="background-image: url(' + quote.avatar + ')"></a>' +
    '<div class="review-content">' +
    '<a href="' + quote.link + '" class="text-h3">' + quote.name + '</a>' +
    '<span class="review-text">' + quote.review  + '</span>'
    '</div>';
})();

(function() {
var quotes = [
    {
    name: "chiwawa",
    avatar:  "https://a.ainu.pw/1194",
    link: "https://ainu.pw/u/1194",
    review: "ainu epic join now plox"
    },
    {
    name: "Aoffy",
    avatar:  "https://a.ainu.pw/1007",
    link: "https://ainu.pw/u/1007",
    review: "The food is amazing, air conditioner's great"
    },
    {
    name: "Mahmood",
    avatar:  "https://a.ainu.pw/1101",
    link: "https://ainu.pw/u/1101",
    review: "Bad maps get unranked pog"
    },
    {
    name: "leina",
    avatar:  "https://a.ainu.pw/1447",
    link: "https://ainu.pw/u/1447",
    review: "epic server with epic people, should totally join 11/10"
    },
    {
    name: "linsonder6",
    avatar: "https://a.ainu.pw/1494",
    link: "https://ainu.pw/u/1494",
    review: "Join now for free Tesla cybertruck"
    }
];
var quote = quotes[Math.floor(Math.random() * 3)];
document.getElementById("review-row-2").innerHTML =
    '<a href="' + quote.link + '" class="reivew-avatar" style="background-image: url(' + quote.avatar + ')"></a>' +
    '<div class="review-content">' +
    '<a href="' + quote.link + '" class="text-h3">' + quote.name + '</a>' +
    '<span class="review-text">' + quote.review  + '</span>'
    '</div>';
})();
