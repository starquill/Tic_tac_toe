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

}

function reset(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            arr[i][j]=0;
        }
    }
}

function tracker(result){
    if(result=="draw"){
        reset();
        switchh();
    }
    else if(result=="one"){
        one.increment();
        reset();
        switchh();
    }
    else if(result=="two"){
        two.increment();
        reset();
        switchh();
    }
    else{
        switchh();
    }
}

function switchh(){
    playerTurn=Math.abs(playerTurn-1);
}



