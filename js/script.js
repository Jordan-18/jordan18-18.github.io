const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const TM =document.querySelectorAll('.tanah muncul');
// const papanSkor = document.querySelector('.papan-skor');
const Ptanah =document.querySelector('.Ptanah');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
// let skor;
let Pt;

function randomTanah(tanah)
{
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if(tRandom == tanahSebelumnya){
        randomTanah(tanah); 
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}
function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min);    
}

// function jalanP(tanah){
//     const t = new munculkanTikus(tanah);
// }
function munculkanTikus(tanah){
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(500, 1000);
    tRandom.classList.add('muncul');
    
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if( !selesai ){
            // const t = new jalanP(tanah);
            munculkanTikus(tanah);
        }
    }, wRandom);    
}
function mulai(){
    selesai = false;
    // skor = 0;
    Pt = 0;
    // papanSkor.innerHTML= 0;
    Ptanah.innerHTML= 0;
    munculkanTikus(tanah);
    setTimeout(() => {
        selesai = true;
    }, 15000);
}

// function pukul(){
//     skor++;
//     papanSkor.innerHTML= skor;
//     this.parentNode.classList.remove('muncul');
//     console.log(this);
// }
function Pta(){
    Pt++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    Ptanah.innerHTML= Pt;
    console.log(this);
}

// TM.forEach(t => {
//     t.addEventListener('click',pukul);
// });

TM,tanah.forEach(r => {
    r.addEventListener('click',Pta)
});

