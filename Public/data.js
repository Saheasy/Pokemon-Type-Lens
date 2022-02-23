// -----JS CODE-----
const bug = 0;
const dark = 1;
const dragon = 2;
const electric = 3;
const fight= 4;
const fire = 5;
const ghost = 6;
const grass = 7;
const ground = 8;
const ice = 9;
const fairy = 10;
const normal = 11;
const flying = 12;
const poison = 13;
const psychic = 14;
const rock = 15;
const steel = 16;
const water = 17;

global.types = {
    "normal": [normal,normal,69],"water": [water, water, 68],"grass": [grass,grass,43],
    "psychic": [psychic, psychic, 39], "fire": [fire,fire,34],"electric": [electric, electric, 32],
    "fight": [fight,fight,29], "normal_flying": [normal, flying, 26], "bug": [bug,bug,19],
    "fairy": [fairy,fairy, 19],"ice": [ice,ice,18], "ground": [ground, ground, 17], 
    "poison": [poison,poison,16],"bug_flying": [bug, flying, 14],"ghost": [ghost,ghost,14], 
    "grass_poison": [grass, poison, 14], "rock": [rock,rock,13],"dragon": [dragon, dragon, 13],
    "dark": [dark,dark,13], "bug_poison": [bug, poison, 12], "rock_water": [rock,water,11],
    "steel": [steel,steel, 11],"rock_ground": [rock,ground,9], "water_ground": [water, ground, 9],
    "psychic_flying": [psychic,flying,9],"steel_psychic": [steel, psychic, 8],"water_flying": [water,flying,8], 
    "psychic_fairy": [psychic, fairy, 8], "steel_rock": [steel,rock,7],"water_ice": [water, ice, 7],
    "grass_flying": [grass,flying,7], "poison_dark": [poison, dark, 7], "ground_ghost": [ground,ghost,6],
    "ground_dragon": [ground, dragon, 6],"bug_rock": [bug,rock,6], "bug_steel": [bug, steel, 6],
    "bug_grass": [bug,grass,6],"ghost_fire": [ghost, fire, 6],"ghost_grass": [ghost, grass, 6],
    "fire_fight": [fire,fight,6],"fire_flying": [fire, flying, 6],"water_poison": [water,poison,6], 
    "water_dark": [water,dark, 6], "dragon_flying": [dragon,flying,6],"dark_flying": [dark, flying, 6],
    "normal_psychic": [normal,psychic,5], "normal_fairy": [normal, fairy, 5], "bug_water": [bug,water,5],
    "steel_ground": [steel, ground, 5],"fire_rock": [fire,rock,5], "water_psychic": [water, psychic, 5], 
    "grass_fight": [grass,fight,5],"grass_dragon": [grass, dragon, 5],"grass_fairy": [grass,fairy,5], 
    "electric_flying": [electric, flying, 5], "ice_psychic": [ice,psychic,5],"dark_normal": [dark, normal, 5],
    "normal_fight": [normal,fight,4], "fight_psychic": [fight, psychic, 4], "poison_fight": [poison,fight,4],
    "rock_flying": [rock, flying, 4],"bug_fire": [bug,fire,4], "bug_electric": [bug, electric, 4], 
    "ghost_dragon": [ghost,dragon,4],"steel_dragon": [steel,dragon,4],"steel_fairy": [steel,fairy,4], 
    "water_fairy": [water, fairy, 4], "grass_psychic": [grass,psychic,4],"grass_dark": [grass, dark, 4],
    "electric_steel": [electric,steel,4], "psychic_ghost": [psychic, ghost, 4], "dark_dragon": [dark,dragon,4],
    "dark_fight": [dark,fight,4],"fight_steel": [fight,steel,3], "flying": [flying, flying, 3], 
    "poison_flying": [poison,flying,3],"poison_dragon": [poison,dragon,3],"ground_flying": [ground,flying,3], 
    "ground_dark": [ground,dark,3], "rock_electric": [rock,electric,3],"rock_ice": [rock,ice,3],
    "bug_fight": [bug,fight,3],"ghost_flying": [ghost,flying,3],"ghost_poison": [ghost, poison, 3],
    "steel_flying": [steel,flying,3], "steel_ghost": [steel, ghost, 3], "fire_ground": [fire,ground,3],
    "water_fight": [water, fight, 3],"water_ghost": [water,ghost,29], "water_grass": [water, grass, 3], 
    "water_electric": [water,electric,3],"water_dragon": [water, dragon, 3],"grass_steel": [grass,steel,3], 
    "electric_grass": [electric, grass, 3], "psychic_fire": [psychic,fire,3],"ice_ground": [ice, ground, 3],
    "dragon_fire": [dragon,fire,3], "dragon_electric": [dragon, electric, 3], "dragon_psychic": [dragon,psychic,3],
    "dark_fire": [dark, fire, 3],"dark_psychic": [dark,psychic,3], "dark_fairy": [dark, fairy, 3],
    "fairy_flying": [fairy,flying,3],"normal_ground": [normal, ground, 2],"normal_ghost": [normal,ghost,2], 
}