let title = document.getElementById("title");
let sub_title = document.getElementById("little-title");

const title_text = "Kevin Caplescu"
const sub_text="UK-Based, Italian web developer and Computer Science student!"

async function loop1() {
    for (let i = 0; i < title_text.length; i++) {
        title.innerHTML+=title_text[i];
        await new Promise(resolve => setTimeout(resolve, 15));
    }
}

async function loop2() {
    for (let o = 0; o < sub_text.length; o++) {
        sub_title.innerHTML+=sub_text[o];
        await new Promise(resolve => setTimeout(resolve, 25)); 
    }
}

async function backgroundLoop(){
    let transparency_mode = true
    let transp = .4
    const Widget = document.getElementById("bg-fade");
    Widget.style.backgroundColor = `rgba(132, 194, 171, ${transp})`
    while(true){
        for (let x = 0; x <7; x++){
            if(transparency_mode){
                transp+=.1;
            }else{
                transp-=.1;
            };

            Widget.style.backgroundColor = `rgba(132, 194, 171, ${transp})`
            await new Promise(resolve => setTimeout(resolve, 250)); 
        };
        
        if(transparency_mode){transparency_mode=false}else{transparency_mode=true};
    };
}

// running them both parallel
async function runLoopsInParallel() {
    await Promise.all([loop1(), loop2(), backgroundLoop()]);
}

runLoopsInParallel();

runLoopsInParallel();
