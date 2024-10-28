let currentIndex = { honkai: 0, darksouls: 0, baldursgate: 0 };

const slidesData = {
    honkai: [
        {
            title: "História",
            subtitle: "RPG de aventura e gacha 3D",
            description: "Honkai: Star Rail é um RPG que mistura fantasia mitológica com ficção científica em um macrocosmo onde é possível viajar pelo espaço a bordo do Astral Express, um trem que atravessa diferentes planetas e dimensões. A história segue a jornada do Trailblazer, um viajante que se junta a um grupo de aliados para combater as forças sombrias conhecidas como Honkai, que ameaçam a ordem do universo. Dessa forma, o jogador deve desvendar alguns mistérios e achar seu rumo neste objetivo, ao lado de alguns companheiros a bordo do Astral Express, trem espacial que serve como identidade para o jogo.",
        },
        {
            title: "Gameplay",
            subtitle: "Combate por turnos",
            description: "A gameplay envolve combates por turnos, onde os jogadores escolhem entre ataques normais e habilidades estratégicas. Os personagens são divididos por elemento (como fogo, gelo, raio, etc.) e 'Paths (classes como DPS, tanque, curandeiro). As classes funcionam de forma intuitiva: tanques geram escudos e DPS causam alto dano a alvos únicos. A energia para habilidades é gerada por ataques comuns, exigindo equilíbrio entre golpes normais e habilidades especiais. Além disso, os elementos são cruciais, pois os inimigos possuem fraquezas elementais e escudos que devem ser quebrados com o elemento correto para causar dano real.",
        },
        {
            title: "Plataformas e cross-save",
            subtitle: "Sincronização e facilidade",
            description: "Em Honkai: Star Rail, o cross-save permite que os jogadores sincronizem seu progresso entre plataformas, como PC e dispositivos móveis, por meio de uma conta HoYoverse. Após vincular a conta, todos os personagens, itens e conquistas são salvos na nuvem, permitindo que os jogadores continuem sua jornada de onde pararam em qualquer dispositivo. O cross-save é limitado a contas vinculadas, garantindo uma experiência contínua sem perda de progresso. Uma vez que a conta está vinculada, todos os personagens, itens, conquistas e progresso do jogo são salvos na nuvem.",
        },
        {
            title: "Modos Especiais",
            subtitle: "Extras do jogo",
            description: "Honkai oferece modos especiais de jogo para manter a comunidade engajada, como o Forgotten Hall, que apresenta desafios com hordas de inimigos em rodadas limitadas, semelhante ao Abismo Espiral de Genshin Impact. O Simulated Universe é um modo inédito com mapas gerados proceduralmente, no estilo roguelike, que diversifica a experiência endgame. Os jogadores usam Trailblazer Power, similar ao sistema de Resina, para participar dessas atividades, que oferecem recompensas como Light Cones (armas), Relics (artefatos) e itens de evolução. O jogo não terá modo PvP, evitando um dos principais fatores Pay-to-Win em títulos gratuitos.",
        }
    ],
    darksouls: [
        {
            title: "História",
            subtitle: "RPG eletrônico de ação",
            description: "Dark Souls se passa primariamente no reino fictício de Lordran, onde os jogadores assumem o papel de um personagem denominado Chosen Undead que, segundo lendas, seria responsável pela quebra de uma maldição que torna incapazes de morrer aqueles que são afligidos por uma misteriosa marca negra. O jogo é inspirado fortemente pela temática medieval, com a presença de deuses e seres fantásticos, inseridos em um mundo decadente e punitivo. A estrutura de apresentação da história é subjetiva, dando-se basicamente através da descrição de itens ou em interações com NPCs, possibilitando margem para diversas interpretações acerca de toda a mitologia presente no jogo.",
        },
        {
            title: "Jogabilidade",
            subtitle: "Combate dinâmico e estratégico",
            description: "O sistema de jogabilidade apresenta-se em terceira pessoa e com foco em combates estratégicos e dinâmicos, inseridos em uma íngreme curva de dificuldade, característica mais marcante da série. O sistema de progressão baseia-se na tradicional progressão de atributos, que variam desde força à inteligência, estamina e fé, dentre outros. Em sua jornada, o jogador encontrará ambientes diversos, como masmorras, fortalezas, cemitérios, lugares fantásticos, complementados por um game design circular, com a interconexão das mais diversas áreas em pontos específicos da narrativa. O sistema online preza pela interação entre jogadores, seja através de dicas in-game sobre os desafios existentes, combate entre jogadores e cooperação para completar determinados pontos do game.",
        },
        {
            title: "Legado",
            subtitle: "Sub-gênero Soulslike",
            description: "Após seu lançamento, Dark Souls deixou uma marca profunda na indústria de jogos eletrônicos, inspirando uma nova geração de desenvolvedores e dando origem a um subgênero conhecido como 'Soulslike'. Esse termo se refere a jogos que compartilham características centrais com a série Souls, como um alto nível de dificuldade, combates meticulosos, design de nível interconectado e uma narrativa sutil, revelada gradualmente. A influência de Dark Souls foi tão significativa que o jogo é frequentemente citado como uma das maiores obras de todos os tempos, celebrada tanto por sua inovação quanto pelo impacto cultural duradouro na comunidade gamer.",
        },
    ],
    baldursgate: [
        {
            title: "Sobre",
            subtitle: "Jogo de turno baseado em RPG de mesa",
            description: "Baldur's Gate III é um jogo eletrônico de RPG desenvolvido e publicado pela Larian Studios. É o terceiro jogo principal da série Baldur's Gate, que é baseada no sistema de RPG de mesa Dungeons & Dragons, dentro do cenário de Forgotten Realms. Parte do jogo foi lançada em acesso antecipado para Windows, macOS e Stadia em 6 de outubro de 2020. O jogo permaneceu em acesso antecipado até seu lançamento completo para Windows em 3 de agosto de 2023. Versões para PlayStation 5 e macOS foram lançadas em 6 de setembro de 2023 e para Xbox Series X/S em 8 de dezembro de 2023. Baldur's Gate III foi aclamado pela crítica, com elogios à jogabilidade, à narrativa, à quantidade de conteúdo e às possibilidades de escolha do jogador.",
        },
        {
            title: "História",
            subtitle: "Combate por turnos",
            description: "Baldur's Gate 3 se passa mais de 120 anos após Baldur's Gate II e alguns meses após Descent into Avernus. O protagonista, sequestrado por Devoradores de Mentes, é infectado por um parasita. Durante um ataque de guerreiros Githyanki, o protagonista consegue escapar e faz a nave danificada pousar. Embora a transformação em Devorador de Mentes não esteja completa, os parasitas concedem habilidades misteriosas aos infectados, que, agora, precisam resistir à tentação de se tornarem malignos enquanto buscam uma maneira de remover o parasita e entender seu novo poder. Os jogadores têm a responsabilidade de tomar decisões que impactam a história.",
        },
        {
            title: "Jogabilidade",
            subtitle: "Regras e formas de jogo",
            description: "O jogo combina modos para um jogador e multijogador, permitindo a criação de personagens que se juntam a outros para explorar a história. O combate é baseado em turnos e segue as regras da quinta edição de Dungeons & Dragons. Com uma perspectiva isométrica, os jogadores podem escolher raças e classes, usar dados para decisões, e pausar antes dos combates para planejamento tático. Certos fatores serão calculados considerando sua equipe, como iniciativa, vantagens e desvantagens. O jogo permite evolução de atributos e habilidades, oferecendo uma experiência rica e fiel ao RPG de mesa. A narrativa é moldada pelas escolhas dos jogadores, influenciando o desenrolar da história e as interações com NPCs.",
        },
        {
            title: "Multiplayer",
            subtitle: "Como funciona o modo multijogador",
            description: "O jogo permite multiplayer cooperativo para 2 a 4 jogadores, onde os personagens permanecem nas campanhas, similar a um RPG de mesa. Cada jogador pode explorar livremente, mas apenas quem inicia um diálogo decide as respostas. Para jogar em modo cooperativo, basta selecionar a opção no menu principal e criar um lobby, convidando amigos ou deixando-o público. Todos começam na tela de criação de personagens e, ao continuar uma campanha, o criador do lobby deve carregar o jogo salvo e convidar os demais. Importante notar que não há crossplay, então todos precisam estar na mesma plataforma. Além disso, é possível jogar localmente em tela dividida, conectando outro controle.",
        }
    ]
};

function moveSlide(direction, game) {
    const slides = slidesData[game];
    currentIndex[game] += direction;
    
    if (currentIndex[game] < 0) {
        currentIndex[game] = slides.length - 1; 
    } else if (currentIndex[game] >= slides.length) {
        currentIndex[game] = 0; 
    }
    
    updateCarousel(game);
}

function updateCarousel(game) {
    const carouselVideos = document.querySelector(`.carousel-videos[data-game="${game}"]`);
    const videoContainers = carouselVideos.querySelectorAll('.video-container');
    const videoWidth = videoContainers[0].offsetWidth;
    
    carouselVideos.style.transform = `translateX(-${currentIndex[game] * videoWidth}px)`;
    
    const slide = slidesData[game][currentIndex[game]];
    document.getElementById(`${game}-slide-title`).textContent = slide.title;
    document.getElementById(`${game}-slide-subtitle`).textContent = slide.subtitle;
    document.getElementById(`${game}-slide-description`).textContent = slide.description;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel('honkai');
    updateCarousel('darksouls');
    updateCarousel('baldursgate');
});
