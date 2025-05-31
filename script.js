
const ctrl=document.querySelector(".ctrlContainer");
const grid=document.querySelector(".grid");
const playBtn=document.querySelector(".Play");
const score1=document.querySelector(".score1");
const score2=document.querySelector(".score2");
const one=player("A");
const two=player("B");
const popup2=document.querySelector(".popup2");
let playerTurn=0;
let startPlayer=0;


function player(Name){
    let score=0;
    return{
        name: ()=>Name,
        increment:()=>score++,
        score: ()=>score
    }
}

let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
function check(row,col){
    let sum=0;
    for(let i=row,j=col;i<3 && j<3;i++,j++){
        sum+=arr[i][j];
    }
    for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
        sum+=arr[i][j];
    }
    if(sum==-3)
        tracker("two");
    else if(sum==3)
        tracker("one");
    sum=0;
    for(let i=row,j=col;i<3 && j>=0;i++,j--){
        sum+=arr[i][j];
    }
    for(let i=row-1,j=col+1;i>=0 && j<3;i--,j++){
        sum+=arr[i][j];
    }
    if(sum==-3)
        tracker("two");
    else if(sum==3)
        tracker("one");
    sum=0;
    for(let i=0;i<3;i++){
        sum+=arr[i][col];
    }
    if(sum==-3)
        tracker("two");
    else if(sum==3)
        tracker("one");
    sum=0;
    for(let i=0;i<3;i++){
        sum+=arr[row][i];
    }
    if(sum==-3)
        tracker("two");
    else if(sum==3)
        tracker("one");
    sum=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(arr[i][j]!=0)
                sum++;
        }
    }
    if(sum==9)
        tracker("draw");
    switchh();

}

function reset(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            arr[i][j]=0;
        }
    }
    grid.innerHTML="";
}

function tracker(result){
    if(result==="one"){
        one.increment();
        score1.textContent=one.score();
    }
    else if(result==="two"){
        two.increment();
        score2.textContent=two.score();
    }
    reset();
    startPlayer=Math.abs(startPlayer-1);
    playerTurn=startPlayer;
    makeGrid();
}

function switchh(){
    playerTurn=Math.abs(playerTurn-1);
}

playBtn.addEventListener('click',()=>{
    playBtn.style.display="none";
    grid.style.display="flex";
    popup2.style.display="flex";
    makeGrid();
}
);

function makeGrid(){
    for(let i=0;i<3;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        for(let j=0;j<3;j++){
            const ele=document.createElement("div");
            ele.classList.add("cell");
            ele.addEventListener('click',()=>{
                arr[i][j]=playerTurn===0?1:-1;
                ele.innerHTML=playerTurn===0?"X":"O";
                ele.style.pointerEvents="none";
                check(i,j);
            });
            row.appendChild(ele);
        }
        grid.appendChild(row);
    }
}


