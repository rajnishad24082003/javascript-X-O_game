let block1 = document.getElementsByClassName("block1")[0];
let block2 = document.getElementsByClassName("block2")[0];
let block3 = document.getElementsByClassName("block3")[0];
let block4 = document.getElementsByClassName("block4")[0];
let block5 = document.getElementsByClassName("block5")[0];
let block6 = document.getElementsByClassName("block6")[0];
let block7 = document.getElementsByClassName("block7")[0];
let block8 = document.getElementsByClassName("block8")[0];
let block9 = document.getElementsByClassName("block9")[0];
let maingrid = document.getElementsByClassName("main")[0];
let player1count = document.getElementsByClassName("h5score1")[0];
let player2count = document.getElementsByClassName("h5score2")[0];
let sound = document.getElementById("sound")
let won1 = 0;
let won2 = 0;

let whois_turn = 0;//0 for cirlce and 1 for cross

 block1.addEventListener("click",()=>{
     if(block1.hasChildNodes() == false)
     {
     let icon = document.createElement("i");
     if(whois_turn == 0)
     {
     icon.classList.add("fa");
     icon.classList.add("fa-circle-o");
     whois_turn =1;
     }
     else
     {
     icon.classList.add("fa");
    icon.classList.add("fa-times");
     whois_turn = 0;
     }
     block1.appendChild(icon);
 }
 });
 block2.addEventListener("click",()=>{
    if(block2.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block2.appendChild(icon);
}
});
block3.addEventListener("click",()=>{
    if(block3.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block3.appendChild(icon);
}
});
block4.addEventListener("click",()=>{
    if(block4.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block4.appendChild(icon);
}
});
block5.addEventListener("click",()=>{
    if(block5.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block5.appendChild(icon);
}
});
block6.addEventListener("click",()=>{
    if(block6.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block6.appendChild(icon);
}
});
block7.addEventListener("click",()=>{
    if(block7.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block7.appendChild(icon);
}
});
block8.addEventListener("click",()=>{
    if(block8.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block8.appendChild(icon);
}
});
block9.addEventListener("click",()=>{
    if(block9.hasChildNodes() == false)
    {
    let icon = document.createElement("i");
    if(whois_turn == 0)
    {
    icon.classList.add("fa");
    icon.classList.add("fa-circle-o");
    whois_turn =1;
    }
    else
    {
    icon.classList.add("fa");
   icon.classList.add("fa-times");
    whois_turn = 0;
    }
    block9.appendChild(icon);
}
});

maingrid.addEventListener("click",()=>{
    if((
        block1.innerHTML == '<i class="fa fa-circle-o"></i>' && 
        block4.innerHTML == '<i class="fa fa-circle-o"></i>' &&
        block7.innerHTML == '<i class="fa fa-circle-o"></i>'
        ) || (
            block2.innerHTML == '<i class="fa fa-circle-o"></i>' && 
            block5.innerHTML == '<i class="fa fa-circle-o"></i>' &&
            block8.innerHTML == '<i class="fa fa-circle-o"></i>'
            ) || (
                block3.innerHTML == '<i class="fa fa-circle-o"></i>' && 
                block6.innerHTML == '<i class="fa fa-circle-o"></i>' &&
                block9.innerHTML == '<i class="fa fa-circle-o"></i>'
                ) || (
                    block1.innerHTML == '<i class="fa fa-circle-o"></i>' && 
                    block2.innerHTML == '<i class="fa fa-circle-o"></i>' &&
                    block3.innerHTML == '<i class="fa fa-circle-o"></i>'
                    ) || (
                        block4.innerHTML == '<i class="fa fa-circle-o"></i>' && 
                        block5.innerHTML == '<i class="fa fa-circle-o"></i>' &&
                        block6.innerHTML == '<i class="fa fa-circle-o"></i>'
                        ) || (
                            block7.innerHTML == '<i class="fa fa-circle-o"></i>' && 
                            block8.innerHTML == '<i class="fa fa-circle-o"></i>' &&
                            block9.innerHTML == '<i class="fa fa-circle-o"></i>'
                            ) || (
                                block1.innerHTML == '<i class="fa fa-circle-o"></i>' && 
                                block5.innerHTML == '<i class="fa fa-circle-o"></i>' &&
                                block9.innerHTML == '<i class="fa fa-circle-o"></i>'
                                ) || (
                                    block3.innerHTML == '<i class="fa fa-circle-o"></i>' && 
                                    block5.innerHTML == '<i class="fa fa-circle-o"></i>' &&
                                    block7.innerHTML == '<i class="fa fa-circle-o"></i>'
                                    )
        ){
            alert("player1 won");
            won1++;
            player1count.innerText = won1;
            reset_fun();
    }
    else if((
        block1.innerHTML == '<i class="fa fa-times"></i>' && 
        block4.innerHTML == '<i class="fa fa-times"></i>' &&
        block7.innerHTML == '<i class="fa fa-times"></i>'
        ) || (
            block2.innerHTML == '<i class="fa fa-times"></i>' && 
            block5.innerHTML == '<i class="fa fa-times"></i>' &&
            block8.innerHTML == '<i class="fa fa-times"></i>'
            ) || (
                block3.innerHTML == '<i class="fa fa-times"></i>' && 
                block6.innerHTML == '<i class="fa fa-times"></i>' &&
                block9.innerHTML == '<i class="fa fa-times"></i>'
                ) || (
                    block1.innerHTML == '<i class="fa fa-times"></i>' && 
                    block2.innerHTML == '<i class="fa fa-times"></i>' &&
                    block3.innerHTML == '<i class="fa fa-times"></i>'
                    ) || (
                        block4.innerHTML == '<i class="fa fa-times"></i>' && 
                        block5.innerHTML == '<i class="fa fa-times"></i>' &&
                        block6.innerHTML == '<i class="fa fa-times"></i>'
                        ) || (
                            block7.innerHTML == '<i class="fa fa-times"></i>' && 
                            block8.innerHTML == '<i class="fa fa-times"></i>' &&
                            block9.innerHTML == '<i class="fa fa-times"></i>'
                            ) || (
                                block1.innerHTML == '<i class="fa fa-times"></i>' && 
                                block5.innerHTML == '<i class="fa fa-times"></i>' &&
                                block9.innerHTML == '<i class="fa fa-times"></i>'
                                ) || (
                                    block3.innerHTML == '<i class="fa fa-times"></i>' && 
                                    block5.innerHTML == '<i class="fa fa-times"></i>' &&
                                    block7.innerHTML == '<i class="fa fa-times"></i>'
                                    )
        ){
            alert("player2 won");
            won2++;
            player2count.innerText = won2;
            reset_fun();
    }
    else if(
    block1.hasChildNodes() &&
    block2.hasChildNodes() &&
    block3.hasChildNodes() &&
    block4.hasChildNodes() &&
    block5.hasChildNodes() &&
    block6.hasChildNodes() &&
    block7.hasChildNodes() &&
    block8.hasChildNodes() &&
    block9.hasChildNodes()
    )
{
alert("no possible play's");
reset_fun();
}
sound.play();
})

function reset_fun(){
    if(block1.hasChildNodes())
    {
    block1.removeChild(document.getElementsByClassName("fa")[0]);
    }
    if(block2.hasChildNodes() === true)
    {block2.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block3.hasChildNodes() === true)
    {block3.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block4.hasChildNodes() === true)
    {block4.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block5.hasChildNodes() === true)
    {block5.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block6.hasChildNodes() === true)
    {block6.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block7.hasChildNodes() === true)
    {block7.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block8.hasChildNodes() === true)
    {block8.removeChild(document.getElementsByClassName("fa")[0]);}
    if(block9.hasChildNodes() === true)
    {block9.removeChild(document.getElementsByClassName("fa")[0]);}
}
