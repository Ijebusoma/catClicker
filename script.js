var elem = document.getElementById('cat');
var cnt=0;
elem.addEventListener('click', function(event)
{
cnt=cnt+1
alert("You have clicked the cat "+cnt+" times");
});



