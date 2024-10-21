let currentIndex = 0;

const slides = [
    {
        title: "Until Dawn",
        dev: "Supermassive Games",
        type: "Terror Slasher de Narrativa Ramificada",
        description: "Until Dawn é um jogo eletrônico de aventura e de survival horror desenvolvido pela Supermassive Games e publicado pela Sony Computer Entertainment para a PlayStation 4 em Agosto de 2015. É um drama interativo no qual os jogadores assumem principalmente o controle de oito jovens adultos que precisam sobreviver na montanha Blackwood até serem resgatados ao amanhecer. A jogabilidade é principalmente uma combinação de cenas e exploração em terceira pessoa.",
        platforms: "Disponível para: PlayStation 5, PlayStation 4, Microsoft Windows.",
        link: "https://store.steampowered.com/app/2172010/Until_Dawn/" 
    },
    {
        title: "Dead by Daylight",
        dev: "Behaviour Interactive, 505 Games",
        type: "Survival Horror, Multijogador",
        description: "Dead by Daylight é um jogo eletrônico multijogador online assimétrico do gênero survival horror desenvolvido pelo estúdio canadense Behaviour Interactive. O jogo é jogado em um modo um contra quatro, onde um jogador assume o papel de um assassino, e os outros quatro jogam como sobreviventes, tendo que escapar do assassino e reparando cinco geradores para abrir os portões de saída e evitarem de serem capturados, enganchados e sacrificados.",
        platforms: "Disponível para: PlayStation 5, PlayStation 4, Nintendo Switch, Android e outras plataformas.",
        link: "https://deadbydaylight.com/" 
    },
    {
        title: "Friday the 13th: The Game",
        dev: "IIIFonic, Estúdio: Gun Interactive",
        type: "Survival Horror, Multijogador",
        description: "Friday the 13th: The Game é um jogo eletrônico de gênero survival desenvolvido pela IllFonic, e publicado pela Gun Media. É baseado na franquia de filmes de mesmo nome de propriedade da Paramount Pictures. As partidas são sempre online e duram cerca de 20 minutos. Nelas, um jogador assume o papel do assassino Jason Vorhees, enquanto os outros devem tentar escapar.",
        platforms: "Disponível para: PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows.",
        link: "https://store.steampowered.com/app/438740/Friday_the_13th_The_Game/" 
    },
    {
        title: "The Texas Chain Saw Massacre",
        dev: "Sumo Digital",
        type: "Survival Horror, Multijogador",
        description: "The Texas Chain Saw Massacre é um jogo eletrônico de terror de sobrevivência de 2023 baseado na franquia 'O Massacre da Serra Elétrica'. Foi desenvolvido pela Sumo Nottingham e publicado pela Gun Interactive. Os jogadores do Slaughter Family devem procurar, rastrear e impedir que seus convidados escapem. Os jogadores do The Texas Chain Saw Massacre podem finalmente descobrir se têm o que é preciso para sobreviver. Experimente o louco e macabro por si mesmo no The Texas Chain Saw Massacre.",
        platforms: "Disponível para: PlayStation 5, PlayStation 4, Xbox One, Microsoft Windows, Xbox Series X e Series S.",
        link: "https://store.steampowered.com/app/1433140/The_Texas_Chain_Saw_Massacre/" 
    },
    {
        title: "Resident Evil 7: Biohazard",
        dev: "Capcom",
        type: "Survival Horror, Aventura",
        description: "Resident Evil 7: Biohazard, conhecido no Japão como Biohazard 7: Resident Evil é um jogo eletrônico do gênero survival horror produzido pela Capcom. A história segue a busca do civil Ethan Winters por sua esposa Mia, que o leva a uma mansão agrícola aparentemente abandonada e habitada pela família Baker. Ethan faz uso de armas e ferramentas na luta contra os membros da família e os 'Mofados', uma forma humanoide de bactéria.",
        platforms: "Disponível para: PlayStation 5, PlayStation 4, Nintendo Switch e outras plataformas.",
        link: "https://store.steampowered.com/app/418370/Resident_Evil_7_Biohazard/" 
    },
    {
        title: "Amnesia: Rebirth",
        dev: "Frictional Games",
        type: "Terror Psicológico",
        description: "Amnesia: Rebirth é um videogame de survival horror 2020 desenvolvido e publicado pela Frictional Games. Ambientado no deserto da Argélia na década de 1930, o jogador assume o papel de Tasi Trianon, uma mulher que acorda sem memórias em meio aos destroços de uma expedição arqueológica. Enquanto busca respostas sobre sua expedição e tenta sobreviver, Tasi enfrenta horrores sobrenaturais e lida com seus próprios traumas. O jogo foca em atmosfera, resolução de enigmas e sobrevivência.",
        platforms: "Disponível para: PlayStation 4, Xbox One, Microsoft Windows, Linux, Xbox Series X e Series S, Mac OS.",
        link: "https://store.steampowered.com/app/999220/Amnesia_Rebirth/" 
    },
];

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
    }

    updateCarousel();
}

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const slideTitle = document.getElementById('slide-title');
    const slideDev = document.getElementById('slide-dev');
    const slideType = document.getElementById('slide-type'); 
    const slideDescription = document.getElementById('slide-description');
    const slidePlatforms = document.getElementById('slide-platforms');
    const slideLink = document.getElementById('slide-link');

    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`; 
    slideTitle.textContent = slides[currentIndex].title;
    slideDev.textContent = slides[currentIndex].dev ? slides[currentIndex].dev : 'Desenvolvedores não especificados.'; // Atualizar desenvolvedores
    slideType.textContent = slides[currentIndex].type;
    slideDescription.textContent = slides[currentIndex].description; 
    slidePlatforms.textContent = slides[currentIndex].platforms;
    slideLink.href = slides[currentIndex].link;
}

document.addEventListener('DOMContentLoaded', updateCarousel);
