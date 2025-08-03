let game_seq = [];
let user_seq = [];
let body = document.querySelector('body');

let color_set = ['red','green','blue','yellow'];
let level=0;
let h3 = document.querySelector('h3');

let start = false;

function btn_flash(btn)
{
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)

}

function user_flash(btn)
{
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250)

}

function levelUp()
{
    level++;
    h3.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*4   );
    let rand_color = color_set[randIndx];   

    game_seq.push(rand_color);
    let rand_color_class = document.querySelector( `.${rand_color}`);

    btn_flash(rand_color_class);


}

function check_ans(indx){

  
  if(game_seq[indx]==user_seq[indx])
  {
    if(game_seq.length== user_seq.length)
    {
       setTimeout(levelUp(),1000);
       user_seq = [];
    }

  }
  else{
    h3.innerHTML=`Game over !! Your score is <b>${level}!!</b> <br> Press any key for Restart`;
  
    reset();

  
  }
}

document.addEventListener('keypress', function() {

    if(start == false)
    {
        console.log('Game started');
        start = true;
        levelUp();
    }
})

let btns = document.querySelectorAll('.btn');



function btnpress(){
    let btn = this;
    user_flash(btn);

    let user_color = btn.getAttribute('id');
    console.log(user_color);
    user_seq.push(user_color);

    check_ans(user_seq.length-1);
}

for(btn of btns)

{
    btn.addEventListener('click',btnpress);
}

function reset(){
    level=0;
    user_seq=[];
    game_seq=[];
    start = false;
    body.classList.add('game_over');
    setTimeout(function(){
        body.classList.remove('game_over');
        },150);
   

}