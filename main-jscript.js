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

// running them both parallel
async function runLoopsInParallel() {
    await Promise.all([loop1(), loop2()]);
}

runLoopsInParallel();
