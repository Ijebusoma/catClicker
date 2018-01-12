

/** Rebuilding the CatVoter app this time with separation of concerns**/

/** ===== DATA MODEL **/
var model ={
currentCat:null,
cats:[
{
     name: "Bolt",
     img: 'image/cat.jpg',
     count: 0,
     id: 0
   },
   {
     name: "Stacey",
     img: 'image/cat1.jpeg',
     count: 0,
     id: 1
   },
   {
     name: "Gwen",
     img: 'image/cat2.jpeg',
     count: 0,
     id: 2
   },
   {
     name: "Adrian",
     img: 'image/cat3.jpeg',
     count: 0,
     id: 3
   },
   {
     name: "Lee",
     img: 'image/cat1.jpeg',
     count: 0,
     id: 4
   }
   ],
};
 /** ===== CONTROLLER OR OCTOPUS **/
var octopus = {
   init: function() {

        model.currentCat = model.cats[0];
            //CatView.init();
            catView.init();
            catListView.init();
        },
        getCurrentCat:function()
        {return model.currentCat;},
       getCats: function(){ //get all cats from model
       return model.cats;},
       setCat:function(cat) //replace current cat with the cat clicked
       {model.currentCat = cat;},

        incrementCount: function(){
       model.currentCat.count++ //when a cat is clicked, increase the count and re-render.
       catView.render();
        }
    };
    /** ===== VIEWS **/
var catView = {
        init: function() {
             this.catNameElem = document.getElementById("cat-name"); //initialize HTML elements
             this.catImageElem = document.getElementById("cat-img");
             this.catCountElem = document.getElementById("cat-count");
             this.catImageElem.addEventListener('click', function() {
             octopus.incrementCount();
             });
              this.render();
        },
        render: function(){
            var currentCat = octopus.getCurrentCat();
            this.catNameElem.textContent = currentCat.name;
            this.catCountElem.textContent = currentCat.count;
            this.catImageElem.src = currentCat.img;
 }
 };
var catListView = {
   init:function(){
       this.catListElem = document.getElementById("catlist");
        this.render();
               },
    render: function(){
                cats = octopus.getCats();
                this.catListElem.innerHTML = '';
                for(var i=0;i<cats.length;i++)
                {
                var cat = cats[i];
                var elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.addEventListener('click', (function(catCopy)
                {return function(){
                octopus.setCat(catCopy) //when a cat name is clicked,
                                         //change the currentcat to the one clicked
                catView.render();       //render the catView with the new cat clicked
                };
                })(cat))
              this.catListElem.appendChild(elem);
                };}
               };
            octopus.init(); /**Spin the app and initialize all the guys(views nd co) **/

