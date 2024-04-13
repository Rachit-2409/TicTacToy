    //Getting Button
    let box = document.querySelectorAll('.box');
    let msg = document.getElementById('msg');
    let reset = document.getElementById('reset');
    //Winning Pattern
    let winning_pattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
    //Condition for button
    let condition  = true;
    //Iterating HTML Collection
    box.forEach((boxes) => {
        boxes.addEventListener('click', ()=>{
            console.log("CLICKED")
            if(condition){
            boxes.innerText = "X";
            condition = false;
            }
            else{
                boxes.innerText = "O"
                condition = true;
            }

            boxes.disabled =  true;
            winnercheck();
        })

    });


    function display_msg (val){
        msg.innerText = "Congratulation you won " + val
    }


    function winnercheck(){
        for(let p1 of winning_pattern){
        let pos1val = box[p1[0]].innerText;
        let pos2val = box[p1[1]].innerText;
        let pos3val = box[p1[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                for(let e of box){
                    e.disabled = true;
                }
                display_msg(pos1val)
            }
        }
        
    }}

reset.addEventListener('click',()=>{
    msg.innerText =""
    for(let e of box){
        e.innerText = "";
        e.disabled = false;
    }
})