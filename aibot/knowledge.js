'use strict'; 

  const bot = {
    language: 'en-us',
    vocabulary: null
  };//TODO 

const myself = {
  bot: bot
}
const johnhgagon = {
  name: 'John Hyland Gagon',
  birthdate: new Date(1971, 5, 31)//MST time
}

  const others = {
    johnhgagon
  }
  const humans = {
    //count, etc. aka persons
    known:[johnhgagon]
  }

    const beings = {
      myself,
      others
    }

const world = {
  elements: [
    'hydrogen',
    'helium',
    'lithium',
    'beryllium',
    'boron',
    'carbon',
    'nitrogen',
    'oxygen',
    'fluorine',
    'neon'
  ],
  subatomic: {
    mass:[
    'electron',
    'proton',
    'neutron' //standard model
    ],
    energy: [
    'photon'
    ]
  },
  phases: {
    standard: ['solid','liquid','gas'],
    exotic: []
  }, //other phases
  material:[
    'water',
    'mineral'
    //types: pure-element, compound, solution, colloidal mixture, suspension mixture, composite: bio, manufactured, mineral/substance 
  ],
  objects:{
    biological:{
      archaea:{

      },
      bacteria:{

      },
      animal:{
        mammals:{
          humans: humans
        }
      },
      protist:{

      },
      plant:{

      },
      fungi:{

      },
      virus:{

      }
    },
    azoic:{
      rocks:{},
      ai:{
        jbot:{
          myself
        },
        other:[]
      }
    }
  },
  places:{
    countries:{
      us:{
        name: 'United States of America',
        states: {
          md:{
            cities:{
              baltimore:{
                name: 'Baltimore'
              },
              others:[]
            }
          },
          others:[]
        }
      },
      others: []
    }
  }
}

const universe = {
  ageBillionYears: 13.7,
  sizeBillionLightYears: 93,
  constellations:[

  ],

  galaxies: {
    milkyway:{
      stars:{
        sun:{
          planets:{
            earth:{
              world: world
            },
            other:[
              'mercury',
              'venus',
              'mars',
              'jupiter',
              'saturn',
              'uranus',
              'neptune'              
            ],
          },
          dwarf_planets:[
            'pluto'
          ],
          asteroidBelt:{

          }
        },
        other:[]
      }
    },
    andromeda:{},
    other:[]
  },


  types:[
    'observable',
    'existing'
  ]
};

  const feelings = {
    
  }

const myworld = {
  beings,
  world,
  feelings
}

module.exports = {
  universe,
  world,
  myself,
  myworld
};

/*
move (by direction from current position: north, south, east, west. (degree))
  to position, destination

concepts: quantity, reference


actions/operations/predicates:
come, get, give, go, keep, let, make, put, seem, take, be, do, have, say, see, send, may, will,
about, across, after, against, among, at, before, between, by, down, from, in, off, on, over, through, to, under, up, with,
as, for, of, till, than,
a , the, all, any, every, little, much, no, other, some, such, that, this, I , he, you, who,
and, because, but, or, if, though, while, how, when, where, why,
again, ever, far, forward, here, near, now, out, still, then, there, together, well,
almost, enough, even, not, only, quite, so, very, tomorrow, yesterday,
north, south, east, west, please, yes

general things:
account, act, addition, adjustment, advertisement, agreement, air, amount, amusement, animal, answer, apparatus, approval, argument, art, attack, attempt, attention, attraction, authority, back, balance, base, behavior, belief, birth, bit, bite, blood, blow, body, brass, bread, breath, brother, building, burn, burst, business, butter, canvas, care, cause, chalk, chance, change, cloth, coal, color, comfort, committee, company, comparison, competition, condition, connection, control, cook, copper, copy, cork, cotton, cough, country, cover, crack, credit, crime, crush, cry, current, curve, damage, danger, daughter, day, death, debt, decision, degree, design, desire, destruction, detail, development, digestion, direction, discovery, discussion, disease, disgust, distance, distribution, division, doubt, drink, driving, dust, earth, edge, education, effect, end, error, event, example, exchange, existence, expansion, experience, expert, fact, fall, family, father, fear, feeling, fiction, field, fight, fire, flame, flight, flower, fold, food, force, form, friend, front, fruit, glass, gold, government, grain, grass, grip, group, growth, guide, harbor, harmony, hate, hearing, heat, help, history, hole, hope, hour, humor, ice, idea, impulse, increase, industry, ink, insect, instrument, insurance, interest, invention, iron, jelly, join, journey, judge, jump, kick, kiss, knowledge, land, language, laugh, law, lead, learning, leather, letter, level, lift, light, limit, linen, liquid, list, look, loss, love, machine, man, manager, mark, market, mass, meal, measure, meat, meeting, memory, metal, middle, milk, mind, mine, minute, mist, money, month, morning ,mother, motion, mountain, move, music, name, nation, need, news, night, noise, note, number, observation, offer, oil, operation, opinion, order, organization, ornament, owner, page, pain, paint, paper, part, paste, payment, peace, person, place, plant, play, pleasure, point, poison, polish, porter, position, powder, power, price, print, process, produce, profit, property, prose, protest, pull, punishment, purpose, push, quality, question, rain, range, rate, ray, reaction, reading, reason, record, regret, relation, religion, representative, request, respect, rest, reward, rhythm, rice, river, road, roll, room, rub, rule, run, salt, sand, scale, science, sea, seat, secretary, selection, self, sense, servant, sex, shade, shake, shame, shock, side, sign, silk, silver, sister, size, sky, sleep, slip, slope, smash, smell, smile, smoke, sneeze, snow, soap, society, son, song, sort, sound, soup, space, stage, start, statement, steam, steel, step, stitch, stone, stop, story, stretch, structure, substance, sugar, suggestion, summer, support, surprise, swim, system, talk, taste, tax, teaching, tendency, test, theory, thing, thought, thunder, time, tin, top, touch, trade, transport, trick, trouble, turn, twist, unit, use, value, verse, vessel, view, voice, walk, war, wash, waste, water, wave, wax, way, weather, week, weight, wind, wine, winter, woman, wood, wool, word, work, wound, writing , year 

visible things:
angle, ant, apple, arch, arm, army, baby, bag, ball, band, basin, basket, bath, bed, bee, bell, berry, bird, blade, board, boat, bone, book, boot, bottle, box, boy, brain, brake, branch, brick, bridge, brush, bucket, bulb, button, cake, camera, card, cart, carriage, cat, chain, cheese, chest, chin, church, circle, clock, cloud, coat, collar, comb, cord, cow, cup, curtain, cushion, dog, door, drain, drawer, dress, drop, ear, egg, engine, eye, face, farm, feather, finger, fish, flag, floor, fly, foot, fork, fowl, frame, garden, girl, glove, goat, gun, hair, hammer, hand, hat, head, heart, hook, horn, horse, hospital, house, island, jewel, kettle, key, knee, knife, knot, leaf, leg, library, line, lip, lock, map, match, monkey, moon, mouth, muscle, nail, neck, needle, nerve, net, nose, nut, office, orange, oven, parcel, pen, pencil, picture, pig, pin, pipe, plane, plate, plough/plow, pocket, pot, potato, prison, pump, rail, rat, receipt, ring, rod, roof, root, sail, school, scissors, screw, seed, sheep, shelf, ship, shirt, shoe, skin, skirt, snake, sock, spade, sponge, spoon, spring, square, stamp, star, station, stem, stick, stocking, stomach, store, street, sun, table, tail, thread, throat, thumb, ticket, toe, tongue, tooth, town, train, tray, tree, trousers, umbrella, wall, watch, wheel, whip, whistle, window, wing, wire, worm

qualities general:
able, acid, angry, automatic, beautiful, black, boiling, bright, broken, brown, cheap, chemical, chief, clean, clear, common, complex, conscious, cut, deep, dependent, early, elastic, electric, equal, fat, fertile, first, fixed, flat, free, frequent, full, general, good, great, grey/gray, hanging, happy, hard, healthy, high, hollow, important, kind, like, living, long, male, married, material, medical, military, natural, necessary, new, normal, open, parallel, past, physical, political, poor, possible, present, private, probable, quick, quiet, ready, red, regular, responsible, right, round, same, second, separate, serious, sharp, smooth, sticky, stiff, straight, strong, sudden, sweet, tall, thick, tight, tired, true, violent, waiting, warm, wet, wide, wise, yellow, young 

opposite qualities:
awake, bad, bent, bitter, blue, certain, cold, complete, cruel, dark, dead, dear, delicate, different, dirty, dry, false, feeble, female, foolish, future, green, ill, last, late, left, loose, loud, low, mixed, narrow, old, opposite, public, rough, sad, safe, secret, short, shut, simple, slow, small, soft, solid, special, strange, thin, white, wrong

(see word menu and semantics)


*/

/*

TODO :

1. learn how to find new words in escalating manner:
  local dictionary, online dictionary, wikipedia, urban dictionary, google (only read results), ask for help

add word to dictionary with simplest definition. infer category or ask where it belongs hierarchically high low/guess.

2. create frequency and frequency near pairs and triples and rank associations. ask about frequent associations and 
  infer pattern to form question. "There are many associations that start with 'an' like 'an apple'. What should I do with this?
       Choices could be to: a) ignore an and never pair  b) provide associations (one, typical) - implies no one will inquire about the identity or specifics of the apple.

3. identify the part of speech of each pair and associate intuitively.
     red nose     adjective noun      (all objects have color/colorable usually so..) Ask, up to which class if not known this noun can have color.
         Can answer what color noses can be or same as  (sight learning given for most objects)

     make out     verb preposition     needs a third 

so each additional frequency count makes this common understanding, phrase or concept which can be discussed.
sort frequency descending. any unique pairs may be insignificant and may cause supervised tweaking of program.

Functionality:

spider
parse
lookup
associate
learning how to ask good questions and asking (ai infancy) in deductive manner to create fact relationships.

(initially will need to teach questions to ask:

  is it locally discrete?
  what kind is it?
  
  of what interest is it? (is it of little interest, just know that it concurs/associates), 

  what is unusual?

  what basic actions can it do? (and how well/what conditons?)

  what other things associate? (by events, places).

  when and where found?

  is it rare or common? 
    when is the discovery for?
    what local range is the discovery?  (everywhere?)  helium, Lucy? etc.
    how many are there?
    is it made up of parts or a material? 
      which parts are known? which materials?  (it doesn't need to know chemistry).
    what range is its size?
    
    what qualities can you provide? 

  should it have a reference? properness?
  how many adjectives can you describe it with?
  
question trees for new words or phrases

asking about the sense of ambiguous sense words. internally, it makes these words qualified and specific 
and links the specific words to their assocations/relationships.

material, class or instance? named/proper? 
class "is"
compositions "made of" (materials, parts)
associations "associated with" (by frequency and nearness)
inherited descriptions
specific physics and differentiations by quality, parts, actions, (behaviors/capabilities)
potential actions
specific members.

events of
claims about












       

*/