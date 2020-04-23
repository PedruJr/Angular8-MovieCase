
export interface Movies {
    id: number;
    name: string;
    year: number;
    director: string;
    genre: string;
    description: string;
    poster:string;
}





export const Movies: Movies[] = [
    {
        id: 1,
        name: 'Vida de inseto',
        year: 1998,
        director: 'John Lasseter, Andrew Staton',
        genre: 'Animação',
        description: 'Todo ano, os gananciosos gafanhotos exigem uma parte da colheita das formigas. Mas quando algo dá errado e a colheita destruída, os gafanhotos ameaçam atacar e as formigas são forçadas a pedir ajuda a outros insetos para enfrentá-los numa batalha.',
        poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/03/69/20176403.jpg',
   
    },
    {
        id: 2,
        name: 'Monstros SA',
        year: 2001,
        director: 'Pete Docter',
        genre: 'Animação',
        description: 'A maior fábrica de monstros do mundo conta com James Sullivan, um dos monstros mais assustadores, que tem o pelo azul e chifres, além de seu assistente e melhor amigo Mike, um monstro verde de um olho só. Eles têm por missão assustar as crianças, que são consideradas tóxicas pelos monstros e cujo contato com eles seria catastrófico para seu mundo. Porém, ao visitar o mundo dos humanos a trabalho, Mike e Sully conhecem a garota Boo, que acaba sem querer indo parar no mundo dos monstros.',
        poster: 'https://http2.mlstatic.com/monstros-sa-poster-universidade-monstro-poster-mod-12-42x30-D_NQ_NP_11131-MLB20040475038_012014-F.jpg',
   
    },
    {
        id: 3,
        name: 'Vida de inseto',
        year: 2003,
        director: 'Andrew Stanton',
        genre: 'Animação',
        description: 'Em seu primeiro dia de aula, esquecendo os conselhos do pai superprotetor, Nemo é capturado por um mergulhador e acaba no aquário de um dentista. Enquanto Nemo tenta bolar um plano para escapar, seu pai cruza o oceano para resgatá-lo.',
        poster: 'https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/91/25/21/20136594.jpg',
   
    },
    {
        id: 4,
        name: 'Ratatouille',
        year: 2007,
        director: 'Brad Bird',
        genre: 'Animação',
        description: 'Remy reside em Paris e possui um sofisticado paladar. Seu sonho é se tornar um chef de cozinha e desfrutar as diversas obras da arte culinária. O único problema é que ele é um rato. Quando se acha dentro de um dos restaurantes mais finos de Paris, Remy decide transformar seu sonho em realidade.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/8/82/Ratatouille_p%C3%B4ster.jpg',
   
    },
    {
        id: 5,
        name: 'Ta dando onda',
        year: 2007,
        director: 'Chris Buck, Ash Brannon',
        genre: 'Animação',
        description: 'Surfar é a atividade do pinguim adolescente Cody Maverick. Acompanhado por uma equipe de filmagem, ele deixa sua casa na Antárdida para ir à Ilha de Pen Gu participar do torneio Big Z Memorial Surf Off. Cody acredita que ganhando a competição terá o respeito e a admiração de todos.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/e/eb/Surfs_up.jpg',
   
    },
    {
        id: 6,
        name: 'Gente grande',
        year: 2010 ,
        director: ' Dennis Dugan',
        genre: 'Comedia',
        description: 'A morte do treinador de basquete da infância de velhos amigos os reúne no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.',
        poster: 'https://www.cafecomfilme.com.br/media/k2/items/cache/d61d44254608dd06ccdd2ff02982d14d_XL.jpg?t=20181026_230951',
   
    },
    {
        id: 7,
        name: 'Como Se Fosse a Primeira Vez',
        year: 2004,
        director: 'Peter Segal',
        genre: 'Comedia romantica',
        description: 'Henry Roth é um veterinário paquerador, que vive no Havaí e é famoso pelo grande número de turistas que conquista. Seu novo alvo é Lucy Whitmore, que mora no local e por quem Henry se apaixona perdidamente. Porém há um problema: Lucy sofre de falta de memória de curto prazo, o que faz com que ela rapidamente se esqueça de fatos que acabaram de acontecer. Com isso, Henry é obrigado a conquistá-la, dia após dia, para ficar ao seu lado.',
        poster: 'https://upload.wikimedia.org/wikipedia/pt/7/78/50_First_Dates_P%C3%B4ster.jpg',
   
    },
    {
        id: 8,
        name: 'Click',
        year: 2006,
        director: 'Frank Coraci',
        genre: 'Comedia',
        description: 'Um arquiteto casado e com filhos está cada vez mais frustrado por passar a maior parte de seu tempo trabalhando. Um dia, ele encontra um inventor excêntrico que lhe dá um controle remoto universal, com capacidade de acelerar o tempo. No início, ele usa o aparelho para acelerar qualquer momento tedioso, mas se dá conta de que está acelerando o tempo demais e deixando de viver preciosos momentos em família. Desesperado, ele procura o inventor para ajudá-lo a reverter o que fez.',
        poster: 'https://www.cafecomfilme.com.br/media/k2/items/cache/99a55ddf297fe1c0e5cd25b32402e97a_XL.jpg?t=20191111_233052',
   
    },
    {
        id: 9,
        name: 'Um Faz de Conta Que Acontece',
        year: 2008,
        director: 'Adam Shankman',
        genre: 'Animação',
        description: 'Skeeter Bronson é funcionário de um hotel, e logo descobre que as histórias que conta para seus sobrinhos se tornam realidade. Na esperança de aproveitar o misterioso fenômeno, Skeeter acaba cometendo vários erros, e as contribuições inesperadas das crianças viram a vida de Skeeter de cabeça para baixo.',
        poster: 'https://i.pinimg.com/originals/9e/b1/43/9eb143f3f280c8cee4fed648eb472218.jpg',
   
    },
    {
        id: 10,
        name: 'Um Faz de Conta Que Acontece',
        year: 2005,
        director: 'Peter Segal',
        genre: 'Animação',
        description: 'Paul Crewe é um astro do futebol americano aposentado que, após ser pego dirigindo bêbado, vai para a penitenciária Allenville, uma das prisões mais duras do país. Ao chegar lá, o diretor do presídio pede a Paul que monte um time de prisioneiros para disputar uma partida de futebol americano contra os guardas. Paul convoca Caretaker, um negociante malandro para recrutar os melhores prisioneiros. Eles prometem aos condenados uma possibilidade de vingança em um confronto que vale tudo.',
        poster: 'https://i.pinimg.com/originals/22/58/a9/2258a9b1975041b88b08a5a66caddede.jpg',
   
    },

];