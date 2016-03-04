function shuffle(array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var array1 = $(".image");
var htmlString = "";
var urls =
        [
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/many-pieces-of-teak-wood-background-100228286.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/black-and-white-puppy-dogs-10036262.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/gosling-100142689.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/meerkat-standing-alert-and-watchful-100362555.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/pea-eggplant-100180681.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/variety-of-cactus-100143599.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/new-life-100203722.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/little-kitten-100186791.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/hover-fly-on-a-flower-100197431.jpg",
            "http://91ef69bade70f992a001-b6054e05bb416c4c4b6f3b0ef3e0f71d.r93.cf3.rackcdn.com/italian-bruschetta-100199471.jpg"
        ];
var specificImage;
$(".image").click(function ()
{
    urls = shuffle(urls);

    console.log(urls);
    var count = 0;
    array1.each(function()
    {
        $(this).attr("src",urls[count]);
        count++;
    });
});
