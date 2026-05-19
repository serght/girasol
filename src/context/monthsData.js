// ─────────────────────────────────────────────────────────────
// IMAGES
// ─────────────────────────────────────────────────────────────

import mes1 from '../assets/collage/mes1.jfif'
import mes2 from '../assets/collage/mes2.jfif'
import mes3 from '../assets/collage/mes3.jfif'
import mes4 from '../assets/collage/mes4.jfif'
import collageImg from '../assets/collage/collage.jpeg'
export const FINAL_REUNION_DATE = '2026-09-23T00:00:00'
// ─────────────────────────────────────────────────────────────
// MONTHS PAGES
// ─────────────────────────────────────────────────────────────

export const MONTHS = [
  {
    num: 1,
    roman: 'I',
    path: '/mes-1',
    prevPath: '/',
    prevLabel: 'Inicio',
    nextPath: '/mes-2',
    nextLabel: 'Capítulo II',

    chapterLabel: 'Capítulo I',
    month: 'Junio',

    image: mes1,

    targetDate: '2026-06-23T00:00:00',

    accentColor: '#f4c2c2',

    heroQuote: '"Siempre estás conmigo, incluso a kilómetros"',

    spotifyTrackId: '2vrpcQNg6itmgVZWsNjWe0',
    spotifyPhrase: 'Que la distancia no separe el amor.',

    letter: {
      unlockDate: '2026-05-17T00:00:00',
      paragraphs: [
        'Mi amor,',

        'Nunca pensé que algo así pudiera pasarme, y mucho menos de una manera tan bonita. En tan poco tiempo lograste convertirte en alguien demasiado importante para mí.',

  'Siempre voy a agradecer todo lo que pasó esa noche en Guatavita, porque siento que desde ahí comenzó algo muy especial entre nosotros.',

  'Quiero que nunca dudes de lo feliz que soy a tu lado. Incluso ahora, con la distancia entre nosotros, sigo sintiendo la misma emoción por construir algo contigo.',

  'Lo que tenemos vale mucho más que cualquier pelea, cualquier conflicto o cualquier kilómetro que nos separe.',

  'No me importa esperar ni extrañarte, porque cuando uno encuentra a alguien que realmente quiere, entiende que hay personas que valen completamente la pena.',

  'Quiero que durante este primer mes recuerdes que aquí hay alguien pensando en ti todos los días, sonriendo por todo lo que vivimos y emocionado por todo lo que todavía nos falta vivir juntos.',
      ],

      sign: 'Con todo lo que soy',
    },
  },

  {
    num: 2,
    roman: 'II',
    path: '/mes-2',
    prevPath: '/mes-1',
    prevLabel: 'Capítulo I',
    nextPath: '/mes-3',
    nextLabel: 'Capítulo III',

    chapterLabel: 'Capítulo II',
    month: 'Julio',

    image: mes2,

    targetDate: '2026-07-23T00:00:00',

    accentColor: '#c5b8e8',

    heroQuote: '"La distancia es solo una geografía del alma"',

    spotifyTrackId: '4d80aVqinTMxxBYhyle1YA',
    spotifyPhrase: 'Que julio lo diga por mí.',

    letter: {
      unlockDate: '2026-07-01T00:00:00',
      paragraphs: [
        'Mi amor,',

        'Sé que quizás estamos pasando por momentos difíciles y que la distancia a veces hace que todo se sienta más complicado, pero también sé que cuando el amor es real, puede superar cualquier cosa.',

  'Entre tantas personas, tuve la suerte de conocer a la niña más sincera, más única y más especial de todas.',

  'A veces pienso en todo lo que pasó para que hoy estemos aquí, juntos, y no puedo evitar sentirme agradecido por cada cosa que vivimos.',

  'Aunque no todo haya sido perfecto, cada momento nos trajo hasta este lugar donde seguimos eligiéndonos.',

  'Quiero que cuando lleguen los días malos recuerdes también todo lo bueno: nuestras risas, nuestras conversaciones y todos esos momentos donde fuimos felices sin necesidad de nada más.',

  'Porque al final, las cosas buenas siempre serán mucho más grandes que cualquier problema o cualquier mal momento.'
      ],

      sign: 'Siempre tuyo',
    },
  },

  {
    num: 3,
    roman: 'III',
    path: '/mes-3',
    prevPath: '/mes-2',
    prevLabel: 'Capítulo II',
    nextPath: '/mes-4',
    nextLabel: 'Capítulo IV',

    chapterLabel: 'Capítulo III',
    month: 'Agosto',

    image: mes3,

    targetDate: '2026-08-23T00:00:00',

    accentColor: '#b8d4e8',

    heroQuote: '"Ya casi estas cerca mio"',

    spotifyTrackId: '3AJwUDP919kvQ9QcozQPxg',
    spotifyPhrase: 'Casi, casi.',

    letter: {
      unlockDate: '2026-08-01T00:00:00',
      paragraphs: [
        'Mi amor,',

        'Ya falta menos para volver a verte, y cada día que pasa me emociona más pensar en todo lo que podremos construir juntos cuando esta distancia termine.',

  'Siento que poco a poco estamos creciendo, madurando y entendiendo mejor lo que queremos para nuestras vidas.',

  'Me emociona imaginar todo lo que podemos lograr juntos, ahora que tenemos metas más claras y sueños que queremos cumplir.',

  'Quiero que siempre recuerdes algo importante: tu felicidad también es la mía.',

  'Por más dificultades que tengamos, quiero que siempre podamos hablar, entendernos y solucionar todo juntos.',

  'Aunque esta etapa ha sido difícil, también me hizo darme cuenta de lo mucho que significas para mí y de lo seguro que estoy de querer seguir construyendo algo bonito contigo.',
      ],

      sign: 'Con impaciencia y amor',
    },
  },

  {
    num: 4,
    roman: 'IV',
    path: '/mes-4',
    prevPath: '/mes-3',
    prevLabel: 'Capítulo III',
    nextPath: '/collage',
    nextLabel: 'Álbum',

    chapterLabel: 'Capítulo IV',
    month: 'Septiembre',

    image: mes4,

    targetDate: '2026-09-23T00:00:00',

    accentColor: '#b8e0d2',

    heroQuote: '"El último capítulo antes del reencuentro."',

    spotifyTrackId: '0T5iIrXA4p5GsubkhuBIKV',
    spotifyPhrase: 'Para cuando estés de regreso.',

    letter: {
      unlockDate: '2026-09-01T00:00:00',
      paragraphs: [
        'Mi amor,',

  'Espero de corazón que hayas tenido un verano increíble, que hayas conocido lugares hermosos y personas maravillosas que hicieron especial esta etapa de tu vida.',

  'Pero también quiero que nunca olvides que aquí hay alguien esperándote y contando los días para volver a verte.',

  'La distancia me hizo entender aún más todo lo que siento por ti y lo importante que eres para mi vida.',

  'Sueño con todos los planes que algún día podremos cumplir juntos y con cada momento que todavía nos espera.',

  'Quiero volver a verte sonreír cerca de mí, volver a abrazarte y sentir que estamos juntos otra vez.',

  'Aquí voy a estar esperándote, con el mismo amor, las mismas ganas y la misma ilusión de seguir construyendo algo hermoso contigo.'

        ,
      ],

      sign: 'El que siempre te ha esperado',
    },
  },
]

// ─────────────────────────────────────────────────────────────
// LANDING CARDS
// ─────────────────────────────────────────────────────────────

export const CHAPTERS_LANDING = [
  {
    num: 'I',

    label: {
      chapter: 'Capítulo I',
      month: 'Junio',
    },

    path: '/mes-1',

    quote: '"El primer mes lejos,\npero te siento cerca"',

    accentColor: '#f4c2c2',

    image: mes1,

    delay: 0.2,
  },

  {
    num: 'II',

    label: {
      chapter: 'Capítulo II',
      month: 'Julio',
    },

    path: '/mes-2',

    quote: '"Mitad del viaje\ny te extraño el doble"',

    accentColor: '#c5b8e8',

    image: mes2,

    delay: 0.3,
  },

  {
    num: 'III',

    label: {
      chapter: 'Capítulo III',
      month: 'Agosto',
    },

    path: '/mes-3',

    quote: '"Espero que me esperes\n como yo te espero"',

    accentColor: '#b8d4e8',

    image: mes3,

    delay: 0.4,
  },

  {
    num: 'IV',

    label: {
      chapter: 'Capítulo IV',
      month: 'Septiembre',
    },

    path: '/mes-4',

    quote: '"El regreso.\nEl reencuentro."',

    accentColor: '#b8e0d2',

    image: mes4,

    delay: 0.5,
  },

  {
    num: '✦',

    label: {
      chapter: 'Álbum',
      month: 'Collage',
    },

    path: '/collage',

    quote: '"Nuestros recuerdos\nflotando en el espacio."',

    accentColor: '#c9a96e',

    image: collageImg,

    delay: 0.6,
  },
]