const cardarray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  ];
  
cardarray.sort(() => 0.5 - Math.random());
const Grid=document.getElementById('grid');
let check=[];
let score=0;
let cardid;
let ID1=undefined;
let ID2;
function draw(){
    for(let i=0;i<cardarray.length;i++){
        N=document.createElement('img');
        N.setAttribute('src','images/blank.png');
        N.setAttribute('id',i);
        Grid.appendChild(N);
        N.addEventListener('click',flip);


    }
}
draw();
function flip() {
    cardid=this.id;
    if(ID1==undefined){
        ID1=cardid;
        }else{
            ID2=cardid;
        }


    this.removeEventListener('click',flip);
    this.setAttribute('src',cardarray[cardid].img);
    check.push(cardarray[cardid].name);
    checkfuntion()
};
function checkfuntion(){
    if(check.length==2){
        if (check[0]==check[1]){
            setTimeout(() => {
                alert('you got it right well done');
                let img1=document.getElementById(ID1); 
                let img2=document.getElementById(ID2);
                img1.setAttribute('src','images/white.png');
                img2.setAttribute('src','images/white.png');
                ID1=undefined;
                
            }, 500);
            
            check=[];
            score++;

        }else{
            setTimeout(() => {
                alert('you got it wrong try again');
                let img1=document.getElementById(ID1); 
                let img2=document.getElementById(ID2);
                img1.setAttribute('src','images/blank.png');
                img2.setAttribute('src','images/blank.png');
                img1.addEventListener('click',flip);
                img2.addEventListener('click',flip);
                check=[];
                ID1=undefined;
                
            }, 500);
            
        }

    }


}
