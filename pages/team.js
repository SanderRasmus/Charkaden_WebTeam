const reviews = [
    {
      id: 1,
      navn: "Adnan Hafez",
      tittel: "1IM1 - Student",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      tekst:
        "",
    },
    {
      id: 2,
      navn: "Emil",
      tittel: "1IM2 - Student",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      tekst:
        "",
    },
    {
      id: 3,
      navn: "Sander Rasmussen",
      tittel: "1IM1 - Student",
      img:
        "https://cdn.discordapp.com/avatars/290133964612698113/f4a6aaae8bf1d034e2d08f8d41727450.webp?size=128",
      tekst:
        "",
    },
];

// setting av items

const img = document.getElementById("person-img");
const navn = document.getElementById("navn");
const tittel = document.getElementById("tittel");
const tekst = document.getElementById("tekst");

const prevBtn = document.querySelector(".forrige-btn");
const nextBtn = document.querySelector(".neste-btn");

// start value av bilde profil

let currentItem = 0;


// Lasting av siden

window.addEventListener('DOMContentLoaded',function(){
    visMedlem(currentItem);
});

// Visning av korrekt person

function visMedlem(){
    const item = reviews[currentItem];
    img.src = item.img;
    navn.textContent = item.navn;
    tittel.textContent = item.tittel;
    tekst.textContent = item.tekst;
}

// Neste person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    visMedlem();
})

// Forrige Person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    visMedlem();
})