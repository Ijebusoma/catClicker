/**function Counter(clicked_id)
{
 var count=0
  count += 1;
  alert(clicked_id+count);
  }

var addUp = function(counterId) {
  var count = 0;

  return function () {
     var counterEle = document.getElementById(counterId);
     if (counterEle)
        counterEle.innerHTML = "Picture Clicks: " + ++count;
  }
};

var catImage = document.getElementById("cat-image");
catImage.addEventListener("click", addUp("cat-counter-id"), false);
**/

var Counter = function(counterId)
{
var count = 0;

  return function () {
     var counterEle = document.getElementById(counterId);
     if (counterEle)
        counterEle.value =  ++count;
  }
};
var catImage = document.getElementById("Bolt");
catImage.addEventListener("click", Counter("boltclick"), false);
var catImage = document.getElementById("Stacey");
catImage.addEventListener("click", Counter("staceyclick"), false);
var catImage = document.getElementById("Adrian");
catImage.addEventListener("click", Counter("adrianclick"), false);
var catImage = document.getElementById("Gwen");
catImage.addEventListener("click", Counter("gwenclick"), false);




