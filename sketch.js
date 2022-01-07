const NUM_POKEMON = 151;
const POKEMON_DATA = [];

const TITLE_X = 220;
const TITLE_Y = 140;
const TITLE_SIZE = 20;

const IMAGE_NORMAL_X = 285;
const IMAGE_NORMAL_Y = 160;
const IMG_NORMAL_TITLE_X = 250;
const IMG_NORMAL_TITLE_Y = 260;
const IMAGE_SHINY_X = 475;
const IMAGE_SHINY_Y = 160;
const IMG_SHINY_TITLE_X = 450;
const IMG_SHINY_TITLE_Y = 260;
const IMG_TITLE_SIZE = 14; //point text

const TYPE_TITLE_X = 250;
const TYPE_TITLE_Y = 320;
const TYPE_TITLE2_X = 450;
const TYPE_TITLE2_Y = 320;

const HEIGHT_TITLE_X = 250;
const HEIGHT_TITLE_Y = 350;
const WEIGHT_TITLE_X = 450;
const WEIGHT_TITLE_Y = 350;

let pokemon_index = 0;
let BUTTON_COUNTER = 0;


let buttonArrays = []; 


function preload() {

    fontApplepx = loadFont('sprite library/Apple ][.ttf') 

    POKEMON_DATA[0] = new pokemon("Bulbasaur", pokemon_type.Grass, pokemon_type.Poison, 0.7, 6.9,  
    loadImage('sprite library/bulbasaur.gif'),  
    loadImage('sprite library/bulbasaur (1).gif'));

    POKEMON_DATA[1] = new pokemon("Ivysaur", pokemon_type.Grass, pokemon_type.Poison, 1, 13,  
    loadImage('sprite library/ivysaur.gif'),  
    loadImage('sprite library/ivysaur (1).gif'));

    POKEMON_DATA[2] = new pokemon("Venusaur", pokemon_type.Grass, pokemon_type.Poison, 2, 100,  
    loadImage('sprite library/venusaur.gif'),  
    loadImage('sprite library/venusaur (1).gif'));

    POKEMON_DATA[3] = new pokemon("Charmander", pokemon_type.Fire, pokemon_type.None, 0.6, 8.5,  
    loadImage('sprite library/charmander (1).gif'),  
    loadImage('sprite library/charmander.gif'));

    POKEMON_DATA[4] = new pokemon("Charmeleon", pokemon_type.Fire, pokemon_type.None, 1.1, 19,  
    loadImage('sprite library/charmeleon (1).gif'),  
    loadImage('sprite library/charmeleon.gif'));

    POKEMON_DATA[5] = new pokemon("Charizard", pokemon_type.Fire, pokemon_type.Flying, 1.7, 90.5,  
    loadImage('sprite library/charizard.gif'),  
    loadImage('sprite library/charizard (1).gif'));

    POKEMON_DATA[6] = new pokemon("Squirtle", pokemon_type.Water, pokemon_type.None, 0.5, 9,  
    loadImage('sprite library/squirtle.gif'),  
    loadImage('sprite library/squirtle (1).gif'));

    POKEMON_DATA[7] = new pokemon("Wartortle", pokemon_type.Water, pokemon_type.None, 1, 22.5,  
    loadImage('sprite library/wartortle (1).gif'),  
    loadImage('sprite library/wartortle.gif'));

    POKEMON_DATA[8] = new pokemon("Blastoise", pokemon_type.Water, pokemon_type.None, 1.6, 85.5,  
    loadImage('sprite library/blastoise (1).gif'),  
    loadImage('sprite library/blastoise.gif'));

    POKEMON_DATA[9] = new pokemon("Caterpie", pokemon_type.Bug, pokemon_type.None, 0.3, 2.9,  
    loadImage('sprite library/caterpie.gif'),  
    loadImage('sprite library/caterpie (1).gif'));

    POKEMON_DATA[10] = new pokemon("Metapod", pokemon_type.Bug, pokemon_type.None, 0.7, 9.9,  
    loadImage('sprite library/metapod.gif'),  
    loadImage('sprite library/metapod (1).gif'));

    POKEMON_DATA[11] = new pokemon("Butterfree", pokemon_type.Bug, pokemon_type.Flying, 1.1, 32,  
    loadImage('sprite library/butterfree.gif'),  
    loadImage('sprite library/butterfree (1).gif'));

    POKEMON_DATA[12] = new pokemon("Weedle", pokemon_type.Bug, pokemon_type.Poison, 0.3, 3.2,  
    loadImage('sprite library/weedle (1).gif'),  
    loadImage('sprite library/weedle.gif'));

    POKEMON_DATA[13] = new pokemon("Kakuna", pokemon_type.Bug, pokemon_type.Poison, 0.6, 10,  
    loadImage('sprite library/kakuna (1).gif'),  
    loadImage('sprite library/kakuna.gif'));

    POKEMON_DATA[14] = new pokemon("Beedrill", pokemon_type.Bug, pokemon_type.Poison, 1, 29.5,  
    loadImage('sprite library/beedrill (1).gif'),  
    loadImage('sprite library/beedrill.gif'));

    POKEMON_DATA[15] = new pokemon("Pidgey", pokemon_type.Normal, pokemon_type.Flying, 0.3, 1.8,  
    loadImage('sprite library/pidgey.gif'),  
    loadImage('sprite library/pidgey (1).gif'));

    POKEMON_DATA[16] = new pokemon("Pidgeotto", pokemon_type.Normal, pokemon_type.Flying, 1.1, 30,  
    loadImage('sprite library/pidgeotto.gif'),  
    loadImage('sprite library/pidgeotto (1).gif'));

    POKEMON_DATA[17] = new pokemon("Pidgeot", pokemon_type.Normal, pokemon_type.Flying, 1.5, 39.5,  
    loadImage('sprite library/pidgeot (1).gif'),  
    loadImage('sprite library/pidgeot.gif'));

    POKEMON_DATA[18] = new pokemon("Rattata", pokemon_type.Normal, pokemon_type.None, 0.3, 3.5,  
    loadImage('sprite library/rattata.gif'),  
    loadImage('sprite library/rattata (1).gif'));

    POKEMON_DATA[19] = new pokemon("Raticate", pokemon_type.Normal, pokemon_type.None, 0.7, 18.5,  
    loadImage('sprite library/raticate (1).gif'),  
    loadImage('sprite library/raticate.gif'));

    POKEMON_DATA[20] = new pokemon("Spearow", pokemon_type.Normal, pokemon_type.Flying, 0.3, 2,  
    loadImage('sprite library/spearow.gif'),  
    loadImage('sprite library/spearow (1).gif'));

    POKEMON_DATA[21] = new pokemon("Fearow", pokemon_type.Normal, pokemon_type.Flying, 1.2, 38,  
    loadImage('sprite library/fearow (1).gif'),  
    loadImage('sprite library/fearow.gif'));

    POKEMON_DATA[22] = new pokemon("Ekans", pokemon_type.Poison, pokemon_type.None, 2, 6.9,  
    loadImage('sprite library/ekans (1).gif'),  
    loadImage('sprite library/ekans.gif'));

    POKEMON_DATA[23] = new pokemon("Arbok", pokemon_type.Poison, pokemon_type.None, 3.5, 65,  
    loadImage('sprite library/arbok (1).gif'),  
    loadImage('sprite library/arbok.gif'));

    POKEMON_DATA[24] = new pokemon("Pikachu", pokemon_type.Electric, pokemon_type.None, 0.4, 6,  
    loadImage('sprite library/pikachu (1).gif'),  
    loadImage('sprite library/pikachu.gif'));

    POKEMON_DATA[25] = new pokemon("Raichu", pokemon_type.Electric, pokemon_type.None, 0.8, 30,  
    loadImage('sprite library/raichu (1).gif'),  
    loadImage('sprite library/raichu.gif'));

    POKEMON_DATA[26] = new pokemon("Sandshrew", pokemon_type.Ground, pokemon_type.None, 0.6, 12,  
    loadImage('sprite library/sandshrew.gif'),  
    loadImage('sprite library/sandshrew (1).gif'));

    POKEMON_DATA[27] = new pokemon("Sandslash", pokemon_type.Ground, pokemon_type.None, 1, 29.5,  
    loadImage('sprite library/sandslash (1).gif'),  
    loadImage('sprite library/sandslash.gif'));

    POKEMON_DATA[28] = new pokemon("Nidoran♀", pokemon_type.Poison, pokemon_type.None, 0.4, 7,  
    loadImage('sprite library/nidoran_f.gif'),  
    loadImage('sprite library/nidoran_f (1).gif'));

    POKEMON_DATA[29] = new pokemon("Nidorina", pokemon_type.Poison, pokemon_type.None, 0.8, 20,  
    loadImage('sprite library/nidorina (1).gif'),  
    loadImage('sprite library/nidorina.gif'));

    POKEMON_DATA[30] = new pokemon("Nidoqueen", pokemon_type.Poison, pokemon_type.Ground, 1.3, 60,  
    loadImage('sprite library/nidoqueen.gif'),  
    loadImage('sprite library/nidoqueen (1).gif'));

    POKEMON_DATA[31] = new pokemon("Nidoran♂", pokemon_type.Poison, pokemon_type.None, 0.5, 9,  
    loadImage('sprite library/nidoran_m.gif'),  
    loadImage('sprite library/nidoran_m (1).gif'));

    POKEMON_DATA[32] = new pokemon("Nidorino", pokemon_type.Poison, pokemon_type.None, 0.9, 19.5,  
    loadImage('sprite library/nidorino.gif'),  
    loadImage('sprite library/nidorino (1).gif'));

    POKEMON_DATA[33] = new pokemon("Nidoking", pokemon_type.Poison, pokemon_type.Ground, 1.4, 62,  
    loadImage('sprite library/nidoking.gif'),  
    loadImage('sprite library/nidoking (1).gif'));

    POKEMON_DATA[34] = new pokemon("Clefairy", pokemon_type.Fairy, pokemon_type.None, 0.6, 7.5,  
    loadImage('sprite library/clefairy (1).gif'),  
    loadImage('sprite library/clefairy.gif'));

    POKEMON_DATA[35] = new pokemon("Clefable", pokemon_type.Fairy, pokemon_type.None, 1.3, 40,  
    loadImage('sprite library/clefable (1).gif'),  
    loadImage('sprite library/clefable.gif'));

    POKEMON_DATA[36] = new pokemon("Vulpix", pokemon_type.Fire, pokemon_type.None, 0.6, 9.9,  
    loadImage('sprite library/vulpix (1).gif'),  
    loadImage('sprite library/vulpix.gif'));

    POKEMON_DATA[37] = new pokemon("Ninetales", pokemon_type.Fire, pokemon_type.None, 1.1, 19.9,  
    loadImage('sprite library/ninetales.gif'),  
    loadImage('sprite library/ninetales (1).gif'));

    POKEMON_DATA[38] = new pokemon("Jigglypuff", pokemon_type.Normal, pokemon_type.Fairy, 0.5, 5.5,  
    loadImage('sprite library/jigglypuff (1).gif'),  
    loadImage('sprite library/jigglypuff.gif'));

    POKEMON_DATA[39] = new pokemon("Wigglytuff", pokemon_type.Normal, pokemon_type.Fairy, 1, 12,  
    loadImage('sprite library/wigglytuff.gif'),  
    loadImage('sprite library/wigglytuff (1).gif'));

    POKEMON_DATA[40] = new pokemon("Zubat", pokemon_type.Poison, pokemon_type.Flying, 0.8, 7.5,  
    loadImage('sprite library/zubat.gif'),  
    loadImage('sprite library/zubat (1).gif'));

    POKEMON_DATA[41] = new pokemon("Golbat", pokemon_type.Poison, pokemon_type.Flying, 1.6, 55,  
    loadImage('sprite library/golbat.gif'),  
    loadImage('sprite library/golbat (1).gif'));

    POKEMON_DATA[42] = new pokemon("Oddish", pokemon_type.Grass, pokemon_type.Poison, 0.5, 5.4,  
    loadImage('sprite library/oddish (1).gif'),  
    loadImage('sprite library/oddish.gif'));

    POKEMON_DATA[43] = new pokemon("Gloom", pokemon_type.Grass, pokemon_type.Poison, 0.8, 8.6,  
    loadImage('sprite library/gloom (1).gif'),  
    loadImage('sprite library/gloom.gif'));

    POKEMON_DATA[44] = new pokemon("Vileplume", pokemon_type.Grass, pokemon_type.Poison, 1.2, 18.6,  
    loadImage('sprite library/vileplume.gif'),  
    loadImage('sprite library/vileplume (1).gif'));

    POKEMON_DATA[45] = new pokemon("Paras", pokemon_type.Bug, pokemon_type.Grass, 0.3, 5.4,  
    loadImage('sprite library/paras (1).gif'),  
    loadImage('sprite library/paras.gif'));

    POKEMON_DATA[46] = new pokemon("Parasect", pokemon_type.Bug, pokemon_type.Grass, 1, 29.5,  
    loadImage('sprite library/parasect.gif'),  
    loadImage('sprite library/parasect (1).gif'));

    POKEMON_DATA[47] = new pokemon("Venonat", pokemon_type.Bug, pokemon_type.Poison, 1, 30,  
    loadImage('sprite library/venonat.gif'),  
    loadImage('sprite library/venonat (1).gif'));

    POKEMON_DATA[48] = new pokemon("Venomoth", pokemon_type.Bug, pokemon_type.Poison, 1.5, 12.5,  
    loadImage('sprite library/venomoth.gif'),  
    loadImage('sprite library/venomoth (1).gif'));

    POKEMON_DATA[49] = new pokemon("Diglett", pokemon_type.Ground, pokemon_type.None, 0.2, 0.8,  
    loadImage('sprite library/diglett.gif'),  
    loadImage('sprite library/diglett (1).gif'));

    POKEMON_DATA[50] = new pokemon("Dugtrio", pokemon_type.Ground, pokemon_type.None, 0.7, 33.3,  
    loadImage('sprite library/dugtrio (1).gif'),  
    loadImage('sprite library/dugtrio.gif'));

    POKEMON_DATA[51] = new pokemon("Meowth", pokemon_type.Normal, pokemon_type.None, 0.4, 4.2,  
    loadImage('sprite library/meowth.gif'),  
    loadImage('sprite library/meowth (1).gif'));

    POKEMON_DATA[52] = new pokemon("Persian", pokemon_type.Normal, pokemon_type.None, 1, 32,  
    loadImage('sprite library/persian (1).gif'),  
    loadImage('sprite library/persian.gif'));

    POKEMON_DATA[53] = new pokemon("Psyduck", pokemon_type.Water, pokemon_type.None, 0.8, 19.6,  
    loadImage('sprite library/psyduck (1).gif'),  
    loadImage('sprite library/psyduck.gif'));

    POKEMON_DATA[54] = new pokemon("Golduck", pokemon_type.Water, pokemon_type.None, 1.7, 76.6,  
    loadImage('sprite library/golduck.gif'),  
    loadImage('sprite library/golduck (1).gif'));

    POKEMON_DATA[55] = new pokemon("Mankey", pokemon_type.Fighting, pokemon_type.None, 0.5, 28,  
    loadImage('sprite library/mankey.gif'),  
    loadImage('sprite library/mankey (1).gif'));

    POKEMON_DATA[56] = new pokemon("Primeape", pokemon_type.Fighting, pokemon_type.None, 1, 32,  
    loadImage('sprite library/primeape.gif'),  
    loadImage('sprite library/primeape (1).gif'));

    POKEMON_DATA[57] = new pokemon("Growlithe", pokemon_type.Fire, pokemon_type.None, 0.7, 19,  
    loadImage('sprite library/growlithe.gif'),  
    loadImage('sprite library/growlithe (1).gif'));

    POKEMON_DATA[58] = new pokemon("Arcanine", pokemon_type.Fire, pokemon_type.None, 1.9, 155,  
    loadImage('sprite library/arcanine.gif'),  
    loadImage('sprite library/arcanine (1).gif'));

    POKEMON_DATA[59] = new pokemon("Poliwag", pokemon_type.Water, pokemon_type.None, 0.6, 12.4,  
    loadImage('sprite library/poliwag (1).gif'),  
    loadImage('sprite library/poliwag.gif'));

    POKEMON_DATA[60] = new pokemon("Poliwhirl", pokemon_type.Water, pokemon_type.None, 1, 20,  
    loadImage('sprite library/poliwhirl (1).gif'),  
    loadImage('sprite library/poliwhirl.gif'));

    POKEMON_DATA[61] = new pokemon("Poliwrath", pokemon_type.Water, pokemon_type.Fighting, 1.3, 54,  
    loadImage('sprite library/poliwrath (1).gif'),  
    loadImage('sprite library/poliwrath.gif'));

    POKEMON_DATA[62] = new pokemon("Abra", pokemon_type.Psychic, pokemon_type.None, 0.9, 19.5,  
    loadImage('sprite library/abra.gif'),  
    loadImage('sprite library/abra (1).gif'));

    POKEMON_DATA[63] = new pokemon("Kadabra", pokemon_type.Psychic, pokemon_type.None, 1.3, 56.5,  
    loadImage('sprite library/kadabra (1).gif'),  
    loadImage('sprite library/kadabra.gif'));

    POKEMON_DATA[64] = new pokemon("Alakazam", pokemon_type.Psychic, pokemon_type.None, 1.3, 48,  
    loadImage('sprite library/alakazam.gif'),  
    loadImage('sprite library/alakazam (1).gif'));

    POKEMON_DATA[65] = new pokemon("Machop", pokemon_type.Fighting, pokemon_type.None, 0.8, 19.5,  
    loadImage('sprite library/machop (1).gif'),  
    loadImage('sprite library/machop.gif'));

    POKEMON_DATA[66] = new pokemon("Machoke", pokemon_type.Fighting, pokemon_type.None, 1.5, 70.5,  
    loadImage('sprite library/machoke.gif'),  
    loadImage('sprite library/machoke (1).gif'));

    POKEMON_DATA[67] = new pokemon("Machamp", pokemon_type.Fighting, pokemon_type.None, 1.6, 130,  
    loadImage('sprite library/machamp.gif'),  
    loadImage('sprite library/machamp (1).gif'));

    POKEMON_DATA[68] = new pokemon("Bellsprout", pokemon_type.Grass, pokemon_type.Poison, 0.7, 4,  
    loadImage('sprite library/bellsprout (1).gif'),  
    loadImage('sprite library/bellsprout.gif'));

    POKEMON_DATA[69] = new pokemon("Weepinbell", pokemon_type.Grass, pokemon_type.Poison, 1, 6.4,  
    loadImage('sprite library/weepinbell (1).gif'),  
    loadImage('sprite library/weepinbell.gif'));

    POKEMON_DATA[70] = new pokemon("Victreebel", pokemon_type.Grass, pokemon_type.Poison, 1.7, 15.5,  
    loadImage('sprite library/victreebel (1).gif'),  
    loadImage('sprite library/victreebel.gif'));

    POKEMON_DATA[71] = new pokemon("Tentacool", pokemon_type.Water, pokemon_type.Poison, 0.9, 45.5,  
    loadImage('sprite library/tentacool.gif'),  
    loadImage('sprite library/tentacool (1).gif'));

    POKEMON_DATA[72] = new pokemon("Tentacruel", pokemon_type.Water, pokemon_type.Poison, 1.6, 55,  
    loadImage('sprite library/tentacruel.gif'),  
    loadImage('sprite library/tentacruel (1).gif'));

    POKEMON_DATA[73] = new pokemon("Geodude", pokemon_type.Rock, pokemon_type.Ground, 0.4, 20,  
    loadImage('sprite library/geodude.gif'),  
    loadImage('sprite library/geodude (1).gif'));

    POKEMON_DATA[74] = new pokemon("Graveler", pokemon_type.Rock, pokemon_type.Ground, 1, 105,  
    loadImage('sprite library/graveler (1).gif'),  
    loadImage('sprite library/graveler.gif'));

    POKEMON_DATA[75] = new pokemon("Golem", pokemon_type.Rock, pokemon_type.Ground, 1.4, 300,  
    loadImage('sprite library/Golem (1).gif'),  
    loadImage('sprite library/Golem.gif'));

    POKEMON_DATA[76] = new pokemon("Ponyta", pokemon_type.Fire, pokemon_type.None, 1, 30,  
    loadImage('sprite library/ponyta.gif'),  
    loadImage('sprite library/ponyta (1).gif'));

    POKEMON_DATA[77] = new pokemon("Rapidash", pokemon_type.Fire, pokemon_type.None, 1.7, 95,  
    loadImage('sprite library/rapidash.gif'),  
    loadImage('sprite library/rapidash (1).gif'));

    POKEMON_DATA[78] = new pokemon("Slowpoke", pokemon_type.Water, pokemon_type.Psychic, 1.2, 36,  
    loadImage('sprite library/slowpoke.gif'),  
    loadImage('sprite library/slowpoke (1).gif'));

    POKEMON_DATA[79] = new pokemon("Slowbro", pokemon_type.Water, pokemon_type.Psychic, 1.6, 78.5,  
    loadImage('sprite library/slowbro.gif'),  
    loadImage('sprite library/slowbro (1).gif'));

    POKEMON_DATA[80] = new pokemon("Magnemite", pokemon_type.Electric, pokemon_type.Steel, 0.3, 6,  
    loadImage('sprite library/magnemite.gif'),  
    loadImage('sprite library/magnemite (1).gif'));

    POKEMON_DATA[81] = new pokemon("Magneton", pokemon_type.Electric, pokemon_type.Steel, 1, 60,  
    loadImage('sprite library/magneton.gif'),  
    loadImage('sprite library/magneton (1).gif'));

    POKEMON_DATA[82] = new pokemon("Farfetch'd", pokemon_type.Normal, pokemon_type.Flying, 0.8, 15,  
    loadImage('sprite library/farfetchd.gif'),  
    loadImage('sprite library/farfetchd (1).gif'));

    POKEMON_DATA[83] = new pokemon("Doduo", pokemon_type.Normal, pokemon_type.Flying, 1.4, 39.2,  
    loadImage('sprite library/doduo (1).gif'),  
    loadImage('sprite library/doduo.gif'));

    POKEMON_DATA[84] = new pokemon("Dodrio", pokemon_type.Normal, pokemon_type.Flying, 1.8, 85.2,  
    loadImage('sprite library/dodrio.gif'),  
    loadImage('sprite library/dodrio (1).gif'));

    POKEMON_DATA[85] = new pokemon("Seel", pokemon_type.Water, pokemon_type.None, 1.1, 90,  
    loadImage('sprite library/seel.gif'),  
    loadImage('sprite library/seel (1).gif'));

    POKEMON_DATA[86] = new pokemon("Dewgong", pokemon_type.Water, pokemon_type.Ice, 1.7, 120,  
    loadImage('sprite library/dewgong (1).gif'),  
    loadImage('sprite library/dewgong.gif'));

    POKEMON_DATA[87] = new pokemon("Grimer", pokemon_type.Poison, pokemon_type.None, 0.9, 30,  
    loadImage('sprite library/grimer (1).gif'),  
    loadImage('sprite library/grimer.gif'));

    POKEMON_DATA[88] = new pokemon("Muk", pokemon_type.Poison, pokemon_type.None, 1.2, 30,  
    loadImage('sprite library/muk (1).gif'),  
    loadImage('sprite library/muk.gif'));

    POKEMON_DATA[89] = new pokemon("Shellder", pokemon_type.Water, pokemon_type.None, 0.3, 4,  
    loadImage('sprite library/shellder (1).gif'),  
    loadImage('sprite library/shellder.gif'));

    POKEMON_DATA[90] = new pokemon("Cloyster", pokemon_type.Water, pokemon_type.Ice, 1.5, 132.5,  
    loadImage('sprite library/cloyster (1).gif'),  
    loadImage('sprite library/cloyster.gif'));

    POKEMON_DATA[91] = new pokemon("Gastly", pokemon_type.Ghost, pokemon_type.Poison, 1.3, 0.1,  
    loadImage('sprite library/gastly.gif'),  
    loadImage('sprite library/gastly (1).gif'));

    POKEMON_DATA[92] = new pokemon("Haunter", pokemon_type.Ghost, pokemon_type.Poison, 1.6, 0.1,  
    loadImage('sprite library/haunter.gif'),  
    loadImage('sprite library/haunter (1).gif'));

    POKEMON_DATA[93] = new pokemon("Gengar", pokemon_type.Ghost, pokemon_type.Poison, 1.5, 40.5,  
    loadImage('sprite library/gengar (1).gif'),  
    loadImage('sprite library/gengar.gif'));

    POKEMON_DATA[94] = new pokemon("Onix", pokemon_type.Rock, pokemon_type.Ground, 8.8, 210,  
    loadImage('sprite library/onix.gif'),  
    loadImage('sprite library/onix (1).gif'));

    POKEMON_DATA[95] = new pokemon("Drowzee", pokemon_type.Psychic, pokemon_type.None, 1, 32.4,  
    loadImage('sprite library/drowzee.gif'),  
    loadImage('sprite library/drowzee (1).gif'));

    POKEMON_DATA[96] = new pokemon("Hypno", pokemon_type.Psychic, pokemon_type.None, 1.6, 75.6,  
    loadImage('sprite library/hypno.gif'),  
    loadImage('sprite library/hypno (1).gif'));

    POKEMON_DATA[97] = new pokemon("Krabby", pokemon_type.Water, pokemon_type.None, 0.4, 6.5,  
    loadImage('sprite library/krabby.gif'),  
    loadImage('sprite library/krabby (1).gif'));

    POKEMON_DATA[98] = new pokemon("Kingler", pokemon_type.Water, pokemon_type.None, 1.3, 60,  
    loadImage('sprite library/kingler.gif'),  
    loadImage('sprite library/kingler (1).gif'));

    POKEMON_DATA[99] = new pokemon("Voltorb", pokemon_type.Electric, pokemon_type.None, 0.5, 10.4,  
    loadImage('sprite library/voltorb.gif'),  
    loadImage('sprite library/voltorb (1).gif'));

    POKEMON_DATA[100] = new pokemon("Electrode", pokemon_type.Electric, pokemon_type.None, 1.2, 66.6,  
    loadImage('sprite library/electrode.gif'),  
    loadImage('sprite library/electrode (1).gif'));

    POKEMON_DATA[101] = new pokemon("Exeggcute", pokemon_type.Grass, pokemon_type.Psychic, 0., 2.5,  
    loadImage('sprite library/exeggcute.gif'),  
    loadImage('sprite library/exeggcute (1).gif'));

    POKEMON_DATA[102] = new pokemon("Exeggutor", pokemon_type.Grass, pokemon_type.Psychic, 2, 120,  
    loadImage('sprite library/exeggutor.gif'),  
    loadImage('sprite library/exeggutor (1).gif'));

    POKEMON_DATA[103] = new pokemon("Cubone", pokemon_type.Ground, pokemon_type.None, 0.4, 6.5,  
    loadImage('sprite library/cubone.gif'),  
    loadImage('sprite library/cubone (1).gif'));

    POKEMON_DATA[104] = new pokemon("Marowak", pokemon_type.Ground, pokemon_type.None, 1, 45,  
    loadImage('sprite library/marowak.gif'),  
    loadImage('sprite library/marowak (1).gif'));

    POKEMON_DATA[105] = new pokemon("Hitmonlee", pokemon_type.Fighting, pokemon_type.None, 1.5, 49.8,  
    loadImage('sprite library/hitmonlee (1).gif'),  
    loadImage('sprite library/hitmonlee.gif'));

    POKEMON_DATA[106] = new pokemon("Hitmonchan", pokemon_type.Fighting, pokemon_type.None, 1.4, 50.2,  
    loadImage('sprite library/hitmonchan.gif'),  
    loadImage('sprite library/hitmonchan (1).gif'));

    POKEMON_DATA[107] = new pokemon("Lickitung", pokemon_type.Normal, pokemon_type.None, 1.2, 65.5,  
    loadImage('sprite library/lickitung.gif'),  
    loadImage('sprite library/lickitung (1).gif'));

    POKEMON_DATA[108] = new pokemon("Koffing", pokemon_type.Poison, pokemon_type.None, 0.6, 1,  
    loadImage('sprite library/koffing.gif'),  
    loadImage('sprite library/koffing (1).gif'));

    POKEMON_DATA[109] = new pokemon("Weezing", pokemon_type.Poison, pokemon_type.None, 1.2, 9.5,  
    loadImage('sprite library/weezing (1).gif'),  
    loadImage('sprite library/weezing.gif'));

    POKEMON_DATA[110] = new pokemon("Rhyhorn", pokemon_type.Ground, pokemon_type.Rock, 1, 115,  
    loadImage('sprite library/rhyhorn (1).gif'),  
    loadImage('sprite library/rhyhorn.gif'));

    POKEMON_DATA[111] = new pokemon("Rhydon", pokemon_type.Ground, pokemon_type.Rock, 1.9, 120,  
    loadImage('sprite library/rhydon (1).gif'),  
    loadImage('sprite library/rhydon.gif'));

    POKEMON_DATA[112] = new pokemon("Chansey", pokemon_type.Normal, pokemon_type.None, 1.1, 34.6,  
    loadImage('sprite library/chansey (1).gif'),  
    loadImage('sprite library/chansey.gif'));

    POKEMON_DATA[113] = new pokemon("Tangela", pokemon_type.Grass, pokemon_type.None, 1, 35,  
    loadImage('sprite library/tangela (1).gif'),  
    loadImage('sprite library/tangela.gif'));

    POKEMON_DATA[114] = new pokemon("Kangaskhan", pokemon_type.Normal, pokemon_type.None, 2.2, 80,  
    loadImage('sprite library/kangaskhan (1).gif'),  
    loadImage('sprite library/kangaskhan.gif'));

    POKEMON_DATA[115] = new pokemon("Horsea", pokemon_type.Water, pokemon_type.None, 0.4, 8,  
    loadImage('sprite library/horsea.gif'),  
    loadImage('sprite library/horsea (1).gif'));

    POKEMON_DATA[116] = new pokemon("Seadra", pokemon_type.Water, pokemon_type.None, 1.2, 25,  
    loadImage('sprite library/seadra (1).gif'),  
    loadImage('sprite library/seadra.gif'));

    POKEMON_DATA[117] = new pokemon("Goldeen", pokemon_type.Water, pokemon_type.None, 0.6, 15,  
    loadImage('sprite library/goldeen.gif'),  
    loadImage('sprite library/goldeen (1).gif'));

    POKEMON_DATA[118] = new pokemon("Seaking", pokemon_type.Water, pokemon_type.None, 1.3, 39,  
    loadImage('sprite library/seaking.gif'),  
    loadImage('sprite library/seaking (1).gif'));

    POKEMON_DATA[119] = new pokemon("Staryu", pokemon_type.Water, pokemon_type.None, 0.8, 34.5,  
    loadImage('sprite library/staryu (1).gif'),  
    loadImage('sprite library/staryu.gif'));

    POKEMON_DATA[120] = new pokemon("Starmie", pokemon_type.Water, pokemon_type.Psychic, 1.1, 80,  
    loadImage('sprite library/starmie.gif'),  
    loadImage('sprite library/starmie (1).gif'));

    POKEMON_DATA[121] = new pokemon("Mr.Mime", pokemon_type.Psychic, pokemon_type.Fairy, 1.3, 54.5,  
    loadImage('sprite library/mr.mime.gif'),  
    loadImage('sprite library/mr._mime.gif'));

    POKEMON_DATA[122] = new pokemon("Scyther", pokemon_type.Bug, pokemon_type.Flying, 1.5, 56,  
    loadImage('sprite library/scyther.gif'),  
    loadImage('sprite library/scyther_shiny.gif'));

    POKEMON_DATA[123] = new pokemon("Jynx", pokemon_type.Ice, pokemon_type.Psychic, 1.4, 40.6,  
    loadImage('sprite library/jynx.gif'),  
    loadImage('sprite library/jynx (1).gif'));

    POKEMON_DATA[124] = new pokemon("Electabuzz", pokemon_type.Electric, pokemon_type.None, 1.1, 30,  
    loadImage('sprite library/electabuzz.gif'),  
    loadImage('sprite library/electabuzz (1).gif'));

    POKEMON_DATA[125] = new pokemon("Magmar", pokemon_type.Fire, pokemon_type.None, 1.3, 44.5,  
    loadImage('sprite library/magmar.gif'),  
    loadImage('sprite library/magmar (1).gif'));

    POKEMON_DATA[126] = new pokemon("Pinsir", pokemon_type.Bug, pokemon_type.None, 1.5, 55,  
    loadImage('sprite library/pinsir (1).gif'),  
    loadImage('sprite library/pinsir.gif'));

    POKEMON_DATA[127] = new pokemon("Tauros", pokemon_type.Normal, pokemon_type.None, 1.4, 88.4,  
    loadImage('sprite library/tauros (1).gif'),  
    loadImage('sprite library/tauros.gif'));

    POKEMON_DATA[128] = new pokemon("Magikarp", pokemon_type.Water, pokemon_type.None, 0.9, 10,  
    loadImage('sprite library/magikarp.gif'),  
    loadImage('sprite library/magikarp (1).gif'));

    POKEMON_DATA[129] = new pokemon("Gyarados", pokemon_type.Water, pokemon_type.Flying, 6.5, 235,  
    loadImage('sprite library/gyarados.gif'),  
    loadImage('sprite library/gyarados (1).gif'));

    POKEMON_DATA[130] = new pokemon("Lapras", pokemon_type.Water, pokemon_type.Ice, 2.5, 220,  
    loadImage('sprite library/lapras (1).gif'),  
    loadImage('sprite library/lapras.gif'));

    POKEMON_DATA[131] = new pokemon("Ditto", pokemon_type.Normal, pokemon_type.None, 0.3, 4,  
    loadImage('sprite library/ditto (1).gif'),  
    loadImage('sprite library/ditto.gif'));

    POKEMON_DATA[132] = new pokemon("Eevee", pokemon_type.Normal, pokemon_type.None, 0.3, 6.5,  
    loadImage('sprite library/eevee.gif'),  
    loadImage('sprite library/eevee (1).gif'));

    POKEMON_DATA[133] = new pokemon("Vaporeon", pokemon_type.Water, pokemon_type.None, 1, 29,  
    loadImage('sprite library/vaporeon.gif'),  
    loadImage('sprite library/vaporeon (1).gif'));

    POKEMON_DATA[134] = new pokemon("Jolteon", pokemon_type.Electric, pokemon_type.None, 0.8, 24.5,  
    loadImage('sprite library/jolteon.gif'),  
    loadImage('sprite library/jolteon (1).gif'));

    POKEMON_DATA[135] = new pokemon("Flareon", pokemon_type.Fire, pokemon_type.None, 0.9, 25,  
    loadImage('sprite library/flareon.gif'),  
    loadImage('sprite library/flareon (1).gif'));

    POKEMON_DATA[136] = new pokemon("Porygon", pokemon_type.Normal, pokemon_type.None, 0.8, 36.5,  
    loadImage('sprite library/porygon (1).gif'),  
    loadImage('sprite library/porygon.gif'));

    POKEMON_DATA[137] = new pokemon("Omanyte", pokemon_type.Rock, pokemon_type.Water, 0.4, 7.5,  
    loadImage('sprite library/omanyte.gif'),  
    loadImage('sprite library/omanyte (1).gif'));

    POKEMON_DATA[138] = new pokemon("Omastar", pokemon_type.Rock, pokemon_type.Water, 1, 35,  
    loadImage('sprite library/omastar.gif'),  
    loadImage('sprite library/omastar (1).gif'));

    POKEMON_DATA[139] = new pokemon("Kabuto", pokemon_type.Rock, pokemon_type.Water, 0.5, 11.5,  
    loadImage('sprite library/kabuto.gif'),  
    loadImage('sprite library/kabuto (1).gif'));

    POKEMON_DATA[140] = new pokemon("Kabutops", pokemon_type.Rock, pokemon_type.Water, 1.3, 40.5,  
    loadImage('sprite library/kabutops.gif'),  
    loadImage('sprite library/kabutops (1).gif'));

    POKEMON_DATA[141] = new pokemon("Aerodactyl", pokemon_type.Rock, pokemon_type.Flying, 1.8, 59,  
    loadImage('sprite library/aerodactyl.gif'),  
    loadImage('sprite library/aerodactyl (1).gif'));

    POKEMON_DATA[142] = new pokemon("Snorlax", pokemon_type.Normal, pokemon_type.None, 2.1, 460,  
    loadImage('sprite library/snorlax.gif'),  
    loadImage('sprite library/snorlax (1).gif'));

    POKEMON_DATA[143] = new pokemon("Articuno", pokemon_type.Ice, pokemon_type.Flying, 1.7, 55.4,  
    loadImage('sprite library/articuno.gif'),  
    loadImage('sprite library/articuno (1).gif'));

    POKEMON_DATA[144] = new pokemon("Zapdos", pokemon_type.Electric, pokemon_type.Flying, 1.6, 52.6,  
    loadImage('sprite library/zapdos (1).gif'),  
    loadImage('sprite library/zapdos.gif'));

    POKEMON_DATA[145] = new pokemon("Moltres", pokemon_type.Fire, pokemon_type.Flying, 2, 60,  
    loadImage('sprite library/moltres.gif'),  
    loadImage('sprite library/moltres (1).gif'));

    POKEMON_DATA[146] = new pokemon("Dratini", pokemon_type.Dragon, pokemon_type.None, 1.8, 3.3,  
    loadImage('sprite library/dratini.gif'),  
    loadImage('sprite library/dratini (1).gif'));

    POKEMON_DATA[147] = new pokemon("Dragonair", pokemon_type.Dragon, pokemon_type.None, 4, 16.5,  
    loadImage('sprite library/dragonair.gif'),  
    loadImage('sprite library/dragonair (1).gif'));

    POKEMON_DATA[148] = new pokemon("Dragonite", pokemon_type.Dragon, pokemon_type.Flying, 2.2, 210,  
    loadImage('sprite library/dragonite.gif'),  
    loadImage('sprite library/dragonite (1).gif'));

    POKEMON_DATA[149] = new pokemon("Mewtwo", pokemon_type.Psychic, pokemon_type.None, 2, 122,  
    loadImage('sprite library/mewtwo.gif'),  
    loadImage('sprite library/mewtwo (1).gif'));

    POKEMON_DATA[150] = new pokemon("Mew", pokemon_type.Psychic, pokemon_type.None, 0.4, 4,  
    loadImage('sprite library/mew.gif'),  
    loadImage('sprite library/mew (1).gif'));





}

    //const POKEMON_DATABASE_ARRAY = [
    //                             ["Bulbasaur", P1, P1S, "Grass", "2.25kg"],
    //];



function setup() {
    createCanvas(1200, 600);

    next_pokemon = createButton('Next');
    next_pokemon.style('font-size', '25px');
    next_pokemon.position(500, 400);
    next_pokemon.mousePressed(next_pokemon_pressed);

    last_pokemon = createButton('Previous');
    last_pokemon.style('font-size', '25px');
    last_pokemon.position(300, 400);
    last_pokemon.mousePressed(prev_pokemon_pressed);

    index_plus10 = createButton("+10 >")
    index_plus10.style('font-size', '16px');
    index_plus10.position(875, 410);
    index_plus10.mousePressed(index_plus10_pressed);

    index_minus10 = createButton("< -10")
    index_minus10.style('font-size', '16px');
    index_minus10.position(775, 410);
    index_minus10.mousePressed(index_take10_pressed);


    for (let i = 0; i < 10; i++) {
        let button = createButton('#' + (i + 1) + ' ' + POKEMON_DATA[i].name);
        button.style('font-size', '16px');
        button.position(790, 110 + i * 30);
        button.mousePressed(index_button_pressed(i));
        buttonArrays[i] = button;
    }


}

function updateButtons() {
    for (let i = 0; i < 10; i++) {
        buttonArrays[i].html('#' + (BUTTON_COUNTER + i + 1) + ' ' + POKEMON_DATA[BUTTON_COUNTER + i].name)
        console.log(buttonArrays[i]);
    }
}

function prev_pokemon_pressed() {
    if (pokemon_index > 0) {
        pokemon_index = pokemon_index - 1;
        print(pokemon_index);
    }
}

function next_pokemon_pressed() {
    if (pokemon_index < (NUM_POKEMON - 1)) {
        pokemon_index = pokemon_index + 1;
        print(pokemon_index);
    }
}

function index_plus10_pressed() {
    if (BUTTON_COUNTER < 140) {
        BUTTON_COUNTER = BUTTON_COUNTER + 10;
       // console.log(BUTTON_COUNTER);
    } else {
        BUTTON_COUNTER = 140;
    }
    updateButtons();
}

function index_take10_pressed() {
    if (BUTTON_COUNTER > 0) {
        BUTTON_COUNTER = BUTTON_COUNTER - 10;
        print(BUTTON_COUNTER);
    }
    updateButtons();
}


function index_button_pressed(index){
    return () => pokemon_index = BUTTON_COUNTER + index;
}


function draw() {
    background('#FF7F7F');

    let screenColour = color('#ADD8E6');
    fill(screenColour);
    rect(200, 100, 500, 350, 20);
    rect(750, 100, 200, 350, 20);

    let fontColour = color('#000000');
    fill(fontColour);
    textStyle(BOLD);
    textFont(fontApplepx);
    textSize('26px');
    text("The Kantonian Pokedex", TITLE_X, (TITLE_Y - 50));
    textSize(TITLE_SIZE);
    text('#' + (pokemon_index+1) + ' ' + POKEMON_DATA[pokemon_index].name, TITLE_X, TITLE_Y)

   /* index_button1 = createButton('#' + (BUTTON_COUNTER + 1) + ' ' + POKEMON_DATA[BUTTON_COUNTER].name);
    index_button1.style('font-size', '16px');
    index_button1.position(790, 110);
    index_button1.mousePressed(index_button1_pressed);

    index_button2 = createButton('#' + (BUTTON_COUNTER + 2) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 1].name);
    index_button2.style('font-size', '16px');
    index_button2.position(790, 140);
    index_button2.mousePressed(index_button2_pressed);

    index_button3 = createButton('#' + (BUTTON_COUNTER + 3) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 2].name);
    index_button3.style('font-size', '16px');
    index_button3.position(790, 170);
    index_button3.mousePressed(index_button3_pressed);

    index_button4 = createButton('#' + (BUTTON_COUNTER + 4) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 3].name);
    index_button4.style('font-size', '16px');
    index_button4.position(790, 200);
    index_button4.mousePressed(index_button4_pressed);

    index_button5 = createButton('#' + (BUTTON_COUNTER + 5) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 4].name);
    index_button5.style('font-size', '16px');
    index_button5.position(790, 230);
    index_button5.mousePressed(index_button5_pressed);

    index_button6 = createButton('#' + (BUTTON_COUNTER + 6) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 5].name);
    index_button6.style('font-size', '16px');
    index_button6.position(790, 260);
    index_button6.mousePressed(index_button6_pressed);

    index_button7 = createButton('#' + (BUTTON_COUNTER + 7) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 6].name);
    index_button7.style('font-size', '16px');
    index_button7.position(790, 290);
    index_button7.mousePressed(index_button7_pressed);

    index_button8 = createButton('#' + (BUTTON_COUNTER + 8) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 7].name);
    index_button8.style('font-size', '16px');
    index_button8.position(790, 320);
    index_button8.mousePressed(index_button8_pressed);

    index_button9 = createButton('#' + (BUTTON_COUNTER + 9) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 8].name);
    index_button9.style('font-size', '16px');
    index_button9.position(790, 350);
    index_button9.mousePressed(index_button9_pressed);

    index_button10 = createButton('#' + (BUTTON_COUNTER + 10) + ' ' + POKEMON_DATA[BUTTON_COUNTER + 9].name);
    index_button10.style('font-size', '16px');
    index_button10.position(790, 380);
    index_button10.mousePressed(index_button10_pressed); */

    //  print(POKEMON_DATA[pokemon_index].type);
    image(POKEMON_DATA[pokemon_index].image, IMAGE_NORMAL_X, IMAGE_NORMAL_Y);
    image(POKEMON_DATA[pokemon_index].shiny_image, IMAGE_SHINY_X, IMAGE_SHINY_Y);

    textSize(IMG_TITLE_SIZE);
    text('Normal\nappearance', IMG_NORMAL_TITLE_X, IMG_NORMAL_TITLE_Y);
    text('Shiny\nappearance', IMG_SHINY_TITLE_X, IMG_SHINY_TITLE_Y);  

    text('Type: ' + POKEMON_DATA[pokemon_index].type, TYPE_TITLE_X, TYPE_TITLE_Y) ;
    
    if (POKEMON_DATA[pokemon_index].secondary_type != 'None'){
        text('Type2: ' + POKEMON_DATA[pokemon_index].secondary_type, TYPE_TITLE2_X, TYPE_TITLE2_Y) ;    

        if (POKEMON_DATA[pokemon_index].secondary_type == 'Bug'){
            fill('#A6B91A');
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Dragon'){
            fill('#6F35FC')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Electric'){
            fill('#F7D02C')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Fighting'){
            fill('#C22E28')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Fire'){
            fill('#EE8130')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Flying'){
            fill('#A98FF3')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Ghost'){
            fill('#735797')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Grass'){
            fill('#7AC74C')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Ground'){
            fill('#E2BF65')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Ice'){
            fill('#96D9D6')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Normal'){
            fill('#A8A77A')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Poison'){
            fill('#A33EA1')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Psychic'){
            fill('#F95587')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Rock'){
            fill('#B6A136')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Water'){
            fill('#6390F0')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Fairy'){
            fill('#D685AD')
        } else if (POKEMON_DATA[pokemon_index].secondary_type == 'Steel'){
            fill('#B7B7CE')
        }  
        
        rect((TYPE_TITLE_X + 280), (TYPE_TITLE_Y - 11), 12, 12, 10);
    }    

    if (POKEMON_DATA[pokemon_index].type == 'Bug'){
        fill('#A6B91A');
    } else if (POKEMON_DATA[pokemon_index].type == 'Dragon'){
        fill('#6F35FC')
    } else if (POKEMON_DATA[pokemon_index].type == 'Electric'){
        fill('#F7D02C')
    } else if (POKEMON_DATA[pokemon_index].type == 'Fighting'){
        fill('#C22E28')
    } else if (POKEMON_DATA[pokemon_index].type == 'Fire'){
        fill('#EE8130')
    } else if (POKEMON_DATA[pokemon_index].type == 'Flying'){
        fill('#A98FF3')
    } else if (POKEMON_DATA[pokemon_index].type == 'Ghost'){
        fill('#735797')
    } else if (POKEMON_DATA[pokemon_index].type == 'Grass'){
        fill('#7AC74C')
    } else if (POKEMON_DATA[pokemon_index].type == 'Ground'){
        fill('#E2BF65')
    } else if (POKEMON_DATA[pokemon_index].type == 'Ice'){
        fill('#96D9D6')
    } else if (POKEMON_DATA[pokemon_index].type == 'Normal'){
        fill('#A8A77A')
    } else if (POKEMON_DATA[pokemon_index].type == 'Poison'){
        fill('#A33EA1')
    } else if (POKEMON_DATA[pokemon_index].type == 'Psychic'){
        fill('#F95587')
    } else if (POKEMON_DATA[pokemon_index].type == 'Rock'){
        fill('#B6A136')
    } else if (POKEMON_DATA[pokemon_index].type == 'Water'){
        fill('#6390F0')
    } else if (POKEMON_DATA[pokemon_index].type == 'Fairy'){
        fill('#D685AD')
    } else if (POKEMON_DATA[pokemon_index].type == 'Steel'){
        fill('#B7B7CE')
    }
    
    rect((TYPE_TITLE_X + 66), (TYPE_TITLE_Y - 11), 12, 12, 10);

    fill('#000000')
    text('Height: ' + POKEMON_DATA[pokemon_index].height + 'm', HEIGHT_TITLE_X, HEIGHT_TITLE_Y);
    text('Weight: ' + POKEMON_DATA[pokemon_index].weight_kg + 'kg', WEIGHT_TITLE_X, WEIGHT_TITLE_Y);


}
