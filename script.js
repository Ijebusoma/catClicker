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


var Counter = function(counterId)
{
var count = 0;

  return function () {
     var counterEle = document.getElementById(counterId);
     if (counterEle)
         counterEle.innerHTML = ++count;

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
**/

var cats = [{
     name: "Bolt",
     img: 'image/cat.jpg',
     count: 0,
     id: 0
   }, {
     name: "Stacey",
     img: 'image/cat1.jpeg',
     count: 0,
     id: 1
   }, {
     name: "Gwen",
     img: 'image/cat2.jpeg',
     count: 0,
     id: 2
   }, {
     name: "Adrian",
     img: 'image/cat3.jpeg',
     count: 0,
     id: 3
   }, {
     name: "Lee",
     img: 'image/cat1.jpeg',
     count: 0,
     id: 4
   }]

   function catList(array) {

     //var display = document.getElementsByClassName('frame');
      var ul = document.getElementsByClassName('catlist');

     for (var i = 0; i < array.length; i++) {

       var list = document.createElement('li');
       list.className = ("cat");
       list.innerHTML = array[i].name;
       ul[0].appendChild(list);

       var elem = document.getElementsByClassName('cat');

     }

     for (var x = 0; x < array.length; x++) {
       elem[x].addEventListener("click", (function(cat_number) { //at the point of click,
                                                                  //capture the cat_number
         return function() {
         loadCat(cats, cat_number); //fetch the cat in question
         };
       })(x)); //argument supplied to eventlistener function
               //which is the current number in VARIABLE X

     }


     var displayPhoto = document.getElementsByClassName('frame')[0];
     var image = document.createElement('img');
     var cattile = document.createElement('h3');
     var catcount = document.createElement('p');
     displayPhoto.appendChild(image);
     displayPhoto.appendChild(cattile);
     displayPhoto.appendChild(catcount);

 function loadCat(array, i) {
       image.src = array[i].img;
       //image.style.width = '500px';
       //image.className = ("catphoto");
       image.setAttribute('cat-id', array[i].id);
       //image.id = ("selected");
       cattile.innerHTML = array[i].name;
       catcount.innerHTML = array[i].count;}

      image.addEventListener('click', function() {
         var i = this.getAttribute('cat-id');
         array[i].count += 1;
         catcount.innerHTML = array[i].count;
       });
   }
   catList(cats);

