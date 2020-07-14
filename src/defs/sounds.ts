export enum SoundGroups {
  piano = 'Piano',
  organ = 'Organ',
  keybrd = 'Keyboard',
  synbrass = 'Synth Brass',
  synbass = 'Synth Bass',
  synth1 = 'Synth 1',
  synth2 = 'Synth 2',
  strings = 'Strings',
  guitar = 'Guitar',
  bass = 'Bass',
  wind1 = 'Wind 1',
  wind2 = 'Wind 2',
  brass = 'Brass',
  mallet = 'Mallet',
  special = 'Special',
  percusn = 'Percussion',
  effects = 'Effects'
}

export interface Sound {
  program: number
  timbreGroup: 'A' | 'B'
  timbreNumber: number
  partialsUsed: number
  soundGroup: SoundGroups
  name: string
}

export const sounds: Sound[] = [
  {
    program: 1,
    timbreGroup: 'A',
    timbreNumber: 0,
    partialsUsed: 4,
    soundGroup: SoundGroups.piano,
    name: 'Acou Piano 1'
  },
  {
    program: 2,
    timbreGroup: 'A',
    timbreNumber: 1,
    partialsUsed: 2,
    soundGroup: SoundGroups.piano,
    name: 'Acou Piano 2'
  },
  {
    program: 3,
    timbreGroup: 'A',
    timbreNumber: 2,
    partialsUsed: 1,
    soundGroup: SoundGroups.piano,
    name: 'Acou Piano 3'
  },
  {
    program: 4,
    timbreGroup: 'A',
    timbreNumber: 3,
    partialsUsed: 3,
    soundGroup: SoundGroups.piano,
    name: 'Elec Piano 1'
  },
  {
    program: 5,
    timbreGroup: 'A',
    timbreNumber: 4,
    partialsUsed: 2,
    soundGroup: SoundGroups.piano,
    name: 'Elec Piano 2'
  },
  {
    program: 6,
    timbreGroup: 'A',
    timbreNumber: 5,
    partialsUsed: 2,
    soundGroup: SoundGroups.piano,
    name: 'Elec Piano 3'
  },
  {
    program: 7,
    timbreGroup: 'A',
    timbreNumber: 6,
    partialsUsed: 1,
    soundGroup: SoundGroups.piano,
    name: 'Elec Piano 4'
  },
  {
    program: 8,
    timbreGroup: 'A',
    timbreNumber: 7,
    partialsUsed: 3,
    soundGroup: SoundGroups.piano,
    name: 'Honkytonk'
  },
  {
    program: 9,
    timbreGroup: 'A',
    timbreNumber: 8,
    partialsUsed: 3,
    soundGroup: SoundGroups.organ,
    name: 'Elec Org 1'
  },
  {
    program: 10,
    timbreGroup: 'A',
    timbreNumber: 9,
    partialsUsed: 3,
    soundGroup: SoundGroups.organ,
    name: 'Elec Org 2'
  },
  {
    program: 11,
    timbreGroup: 'A',
    timbreNumber: 10,
    partialsUsed: 2,
    soundGroup: SoundGroups.organ,
    name: 'Elec Org 3'
  },
  {
    program: 12,
    timbreGroup: 'A',
    timbreNumber: 11,
    partialsUsed: 2,
    soundGroup: SoundGroups.organ,
    name: 'Elec Org 4'
  },
  {
    program: 13,
    timbreGroup: 'A',
    timbreNumber: 12,
    partialsUsed: 3,
    soundGroup: SoundGroups.organ,
    name: 'Pipe Org 1'
  },
  {
    program: 14,
    timbreGroup: 'A',
    timbreNumber: 13,
    partialsUsed: 3,
    soundGroup: SoundGroups.organ,
    name: 'Pipe Org 2'
  },
  {
    program: 15,
    timbreGroup: 'A',
    timbreNumber: 14,
    partialsUsed: 2,
    soundGroup: SoundGroups.organ,
    name: 'Pipe Org 3'
  },
  {
    program: 16,
    timbreGroup: 'A',
    timbreNumber: 15,
    partialsUsed: 2,
    soundGroup: SoundGroups.organ,
    name: 'Accordion'
  },
  {
    program: 17,
    timbreGroup: 'A',
    timbreNumber: 16,
    partialsUsed: 4,
    soundGroup: SoundGroups.keybrd,
    name: 'Harpsi 1'
  },
  {
    program: 18,
    timbreGroup: 'A',
    timbreNumber: 17,
    partialsUsed: 2,
    soundGroup: SoundGroups.keybrd,
    name: 'Harpsi 2'
  },
  {
    program: 19,
    timbreGroup: 'A',
    timbreNumber: 18,
    partialsUsed: 1,
    soundGroup: SoundGroups.keybrd,
    name: 'Harpsi 3'
  },
  {
    program: 20,
    timbreGroup: 'A',
    timbreNumber: 19,
    partialsUsed: 3,
    soundGroup: SoundGroups.keybrd,
    name: 'Clavi 1'
  },
  {
    program: 21,
    timbreGroup: 'A',
    timbreNumber: 20,
    partialsUsed: 2,
    soundGroup: SoundGroups.keybrd,
    name: 'Clavi 2'
  },
  {
    program: 22,
    timbreGroup: 'A',
    timbreNumber: 21,
    partialsUsed: 1,
    soundGroup: SoundGroups.keybrd,
    name: 'Clavi 3'
  },
  {
    program: 23,
    timbreGroup: 'A',
    timbreNumber: 22,
    partialsUsed: 4,
    soundGroup: SoundGroups.keybrd,
    name: 'Celesta 1'
  },
  {
    program: 24,
    timbreGroup: 'A',
    timbreNumber: 23,
    partialsUsed: 2,
    soundGroup: SoundGroups.keybrd,
    name: 'Celesta 2'
  },
  {
    program: 25,
    timbreGroup: 'A',
    timbreNumber: 24,
    partialsUsed: 2,
    soundGroup: SoundGroups.synbrass,
    name: 'Synth Brass 1'
  },
  {
    program: 26,
    timbreGroup: 'A',
    timbreNumber: 25,
    partialsUsed: 3,
    soundGroup: SoundGroups.synbrass,
    name: 'Synth Brass 2'
  },
  {
    program: 27,
    timbreGroup: 'A',
    timbreNumber: 26,
    partialsUsed: 2,
    soundGroup: SoundGroups.synbrass,
    name: 'Synth Brass 3'
  },
  {
    program: 28,
    timbreGroup: 'A',
    timbreNumber: 27,
    partialsUsed: 2,
    soundGroup: SoundGroups.synbrass,
    name: 'Synth Brass 4'
  },
  {
    program: 29,
    timbreGroup: 'A',
    timbreNumber: 28,
    partialsUsed: 2,
    soundGroup: SoundGroups.synbass,
    name: 'Synth Bass 1'
  },
  {
    program: 30,
    timbreGroup: 'A',
    timbreNumber: 29,
    partialsUsed: 2,
    soundGroup: SoundGroups.synbass,
    name: 'Synth Bass 2'
  },
  {
    program: 31,
    timbreGroup: 'A',
    timbreNumber: 30,
    partialsUsed: 2,
    soundGroup: SoundGroups.synbass,
    name: 'Synth Bass 3'
  },
  {
    program: 32,
    timbreGroup: 'A',
    timbreNumber: 31,
    partialsUsed: 1,
    soundGroup: SoundGroups.synbass,
    name: 'Synth Bass 4'
  },
  {
    program: 33,
    timbreGroup: 'A',
    timbreNumber: 32,
    partialsUsed: 3,
    soundGroup: SoundGroups.synth1,
    name: 'Fantasy'
  },
  {
    program: 34,
    timbreGroup: 'A',
    timbreNumber: 33,
    partialsUsed: 3,
    soundGroup: SoundGroups.synth1,
    name: 'Harmo Pan'
  },
  {
    program: 35,
    timbreGroup: 'A',
    timbreNumber: 34,
    partialsUsed: 3,
    soundGroup: SoundGroups.synth1,
    name: 'Chorale'
  },
  {
    program: 36,
    timbreGroup: 'A',
    timbreNumber: 35,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth1,
    name: 'Glasses'
  },
  {
    program: 37,
    timbreGroup: 'A',
    timbreNumber: 36,
    partialsUsed: 4,
    soundGroup: SoundGroups.synth1,
    name: 'Soundtrack'
  },
  {
    program: 38,
    timbreGroup: 'A',
    timbreNumber: 37,
    partialsUsed: 4,
    soundGroup: SoundGroups.synth1,
    name: 'Atmosphere'
  },
  {
    program: 39,
    timbreGroup: 'A',
    timbreNumber: 38,
    partialsUsed: 4,
    soundGroup: SoundGroups.synth1,
    name: 'Warm Bell'
  },
  {
    program: 40,
    timbreGroup: 'A',
    timbreNumber: 39,
    partialsUsed: 1,
    soundGroup: SoundGroups.synth1,
    name: 'Funny Vox'
  },
  {
    program: 41,
    timbreGroup: 'A',
    timbreNumber: 40,
    partialsUsed: 3,
    soundGroup: SoundGroups.synth2,
    name: 'Echo Bell'
  },
  {
    program: 42,
    timbreGroup: 'A',
    timbreNumber: 41,
    partialsUsed: 3,
    soundGroup: SoundGroups.synth2,
    name: 'Ice Rain'
  },
  {
    program: 43,
    timbreGroup: 'A',
    timbreNumber: 42,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth2,
    name: 'Oboe 2001'
  },
  {
    program: 44,
    timbreGroup: 'A',
    timbreNumber: 43,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth2,
    name: 'Echo Pan'
  },
  {
    program: 45,
    timbreGroup: 'A',
    timbreNumber: 44,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth2,
    name: 'Doctor Solo'
  },
  {
    program: 46,
    timbreGroup: 'A',
    timbreNumber: 45,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth2,
    name: 'Schooldaze'
  },
  {
    program: 47,
    timbreGroup: 'A',
    timbreNumber: 46,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth2,
    name: 'Bellsinger'
  },
  {
    program: 48,
    timbreGroup: 'A',
    timbreNumber: 47,
    partialsUsed: 2,
    soundGroup: SoundGroups.synth2,
    name: 'Square Wave'
  },
  {
    program: 49,
    timbreGroup: 'A',
    timbreNumber: 48,
    partialsUsed: 4,
    soundGroup: SoundGroups.strings,
    name: 'Str Sect 1'
  },
  {
    program: 50,
    timbreGroup: 'A',
    timbreNumber: 49,
    partialsUsed: 3,
    soundGroup: SoundGroups.strings,
    name: 'Str Sect 2'
  },
  {
    program: 51,
    timbreGroup: 'A',
    timbreNumber: 50,
    partialsUsed: 2,
    soundGroup: SoundGroups.strings,
    name: 'Str Sect 3'
  },
  {
    program: 52,
    timbreGroup: 'A',
    timbreNumber: 51,
    partialsUsed: 3,
    soundGroup: SoundGroups.strings,
    name: 'Pizzicato'
  },
  {
    program: 53,
    timbreGroup: 'A',
    timbreNumber: 52,
    partialsUsed: 3,
    soundGroup: SoundGroups.strings,
    name: 'Violin 1'
  },
  {
    program: 54,
    timbreGroup: 'A',
    timbreNumber: 53,
    partialsUsed: 2,
    soundGroup: SoundGroups.strings,
    name: 'Violin 2'
  },
  {
    program: 55,
    timbreGroup: 'A',
    timbreNumber: 54,
    partialsUsed: 3,
    soundGroup: SoundGroups.strings,
    name: 'Cello 1'
  },
  {
    program: 56,
    timbreGroup: 'A',
    timbreNumber: 55,
    partialsUsed: 2,
    soundGroup: SoundGroups.strings,
    name: 'Cello 2'
  },
  {
    program: 57,
    timbreGroup: 'A',
    timbreNumber: 56,
    partialsUsed: 2,
    soundGroup: SoundGroups.strings,
    name: 'Contrabass'
  },
  {
    program: 58,
    timbreGroup: 'A',
    timbreNumber: 57,
    partialsUsed: 3,
    soundGroup: SoundGroups.strings,
    name: 'Harp 1'
  },
  {
    program: 59,
    timbreGroup: 'A',
    timbreNumber: 58,
    partialsUsed: 2,
    soundGroup: SoundGroups.strings,
    name: 'Harp 2'
  },
  {
    program: 60,
    timbreGroup: 'A',
    timbreNumber: 59,
    partialsUsed: 2,
    soundGroup: SoundGroups.guitar,
    name: 'Guitar 1'
  },
  {
    program: 61,
    timbreGroup: 'A',
    timbreNumber: 60,
    partialsUsed: 2,
    soundGroup: SoundGroups.guitar,
    name: 'Guitar 2'
  },
  {
    program: 62,
    timbreGroup: 'A',
    timbreNumber: 61,
    partialsUsed: 4,
    soundGroup: SoundGroups.guitar,
    name: 'Elec Gtr 1'
  },
  {
    program: 63,
    timbreGroup: 'A',
    timbreNumber: 62,
    partialsUsed: 3,
    soundGroup: SoundGroups.guitar,
    name: 'Elec Gtr 2'
  },
  {
    program: 64,
    timbreGroup: 'A',
    timbreNumber: 63,
    partialsUsed: 4,
    soundGroup: SoundGroups.guitar,
    name: 'Sitar'
  },
  {
    program: 65,
    timbreGroup: 'B',
    timbreNumber: 0,
    partialsUsed: 2,
    soundGroup: SoundGroups.bass,
    name: 'Acou Bass 1'
  },
  {
    program: 66,
    timbreGroup: 'B',
    timbreNumber: 1,
    partialsUsed: 1,
    soundGroup: SoundGroups.bass,
    name: 'Acou Bass 2'
  },
  {
    program: 67,
    timbreGroup: 'B',
    timbreNumber: 2,
    partialsUsed: 2,
    soundGroup: SoundGroups.bass,
    name: 'Elec Bass 1'
  },
  {
    program: 68,
    timbreGroup: 'B',
    timbreNumber: 3,
    partialsUsed: 1,
    soundGroup: SoundGroups.bass,
    name: 'Elec Bass 2'
  },
  {
    program: 69,
    timbreGroup: 'B',
    timbreNumber: 4,
    partialsUsed: 3,
    soundGroup: SoundGroups.bass,
    name: 'Slap Bass 1'
  },
  {
    program: 70,
    timbreGroup: 'B',
    timbreNumber: 5,
    partialsUsed: 2,
    soundGroup: SoundGroups.bass,
    name: 'Slap Bass 2'
  },
  {
    program: 71,
    timbreGroup: 'B',
    timbreNumber: 6,
    partialsUsed: 4,
    soundGroup: SoundGroups.bass,
    name: 'Fretless 1'
  },
  {
    program: 72,
    timbreGroup: 'B',
    timbreNumber: 7,
    partialsUsed: 2,
    soundGroup: SoundGroups.bass,
    name: 'Fretless 2'
  },
  {
    program: 73,
    timbreGroup: 'B',
    timbreNumber: 8,
    partialsUsed: 4,
    soundGroup: SoundGroups.wind1,
    name: 'Flute 1'
  },
  {
    program: 74,
    timbreGroup: 'B',
    timbreNumber: 9,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind1,
    name: 'Flute 2'
  },
  {
    program: 75,
    timbreGroup: 'B',
    timbreNumber: 10,
    partialsUsed: 3,
    soundGroup: SoundGroups.wind1,
    name: 'Piccolo 1'
  },
  {
    program: 76,
    timbreGroup: 'B',
    timbreNumber: 11,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind1,
    name: 'Piccolo 2'
  },
  {
    program: 77,
    timbreGroup: 'B',
    timbreNumber: 12,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind1,
    name: 'Recorder'
  },
  {
    program: 78,
    timbreGroup: 'B',
    timbreNumber: 13,
    partialsUsed: 3,
    soundGroup: SoundGroups.wind1,
    name: 'Pan Pipes'
  },
  {
    program: 79,
    timbreGroup: 'B',
    timbreNumber: 14,
    partialsUsed: 4,
    soundGroup: SoundGroups.wind2,
    name: 'Sax 1'
  },
  {
    program: 80,
    timbreGroup: 'B',
    timbreNumber: 15,
    partialsUsed: 3,
    soundGroup: SoundGroups.wind2,
    name: 'Sax 2'
  },
  {
    program: 81,
    timbreGroup: 'B',
    timbreNumber: 16,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind2,
    name: 'Sax 3'
  },
  {
    program: 82,
    timbreGroup: 'B',
    timbreNumber: 17,
    partialsUsed: 1,
    soundGroup: SoundGroups.wind2,
    name: 'Sax 4'
  },
  {
    program: 83,
    timbreGroup: 'B',
    timbreNumber: 18,
    partialsUsed: 3,
    soundGroup: SoundGroups.wind2,
    name: 'Clarinet 1'
  },
  {
    program: 84,
    timbreGroup: 'B',
    timbreNumber: 19,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind2,
    name: 'Clarinet 2'
  },
  {
    program: 85,
    timbreGroup: 'B',
    timbreNumber: 20,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind2,
    name: 'Oboe'
  },
  {
    program: 86,
    timbreGroup: 'B',
    timbreNumber: 21,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind2,
    name: 'Engl Horn'
  },
  {
    program: 87,
    timbreGroup: 'B',
    timbreNumber: 22,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind2,
    name: 'Bassoon'
  },
  {
    program: 88,
    timbreGroup: 'B',
    timbreNumber: 23,
    partialsUsed: 2,
    soundGroup: SoundGroups.wind2,
    name: 'Harmonica'
  },
  {
    program: 89,
    timbreGroup: 'B',
    timbreNumber: 24,
    partialsUsed: 3,
    soundGroup: SoundGroups.brass,
    name: 'Trumpet 1'
  },
  {
    program: 90,
    timbreGroup: 'B',
    timbreNumber: 25,
    partialsUsed: 2,
    soundGroup: SoundGroups.brass,
    name: 'Trumpet 2'
  },
  {
    program: 91,
    timbreGroup: 'B',
    timbreNumber: 26,
    partialsUsed: 3,
    soundGroup: SoundGroups.brass,
    name: 'Trombone 1'
  },
  {
    program: 92,
    timbreGroup: 'B',
    timbreNumber: 27,
    partialsUsed: 2,
    soundGroup: SoundGroups.brass,
    name: 'Trombone 2'
  },
  {
    program: 93,
    timbreGroup: 'B',
    timbreNumber: 28,
    partialsUsed: 3,
    soundGroup: SoundGroups.brass,
    name: 'Fr Horn 1'
  },
  {
    program: 94,
    timbreGroup: 'B',
    timbreNumber: 29,
    partialsUsed: 2,
    soundGroup: SoundGroups.brass,
    name: 'Fr Horn 2'
  },
  {
    program: 95,
    timbreGroup: 'B',
    timbreNumber: 30,
    partialsUsed: 2,
    soundGroup: SoundGroups.brass,
    name: 'Tuba'
  },
  {
    program: 96,
    timbreGroup: 'B',
    timbreNumber: 31,
    partialsUsed: 4,
    soundGroup: SoundGroups.brass,
    name: 'Brs Sect 1'
  },
  {
    program: 97,
    timbreGroup: 'B',
    timbreNumber: 32,
    partialsUsed: 3,
    soundGroup: SoundGroups.brass,
    name: 'Brs Sect 2'
  },
  {
    program: 98,
    timbreGroup: 'B',
    timbreNumber: 33,
    partialsUsed: 3,
    soundGroup: SoundGroups.mallet,
    name: 'Vibe 1'
  },
  {
    program: 99,
    timbreGroup: 'B',
    timbreNumber: 34,
    partialsUsed: 2,
    soundGroup: SoundGroups.mallet,
    name: 'Vibe 2'
  },
  {
    program: 100,
    timbreGroup: 'B',
    timbreNumber: 35,
    partialsUsed: 1,
    soundGroup: SoundGroups.mallet,
    name: 'Syn Mallet'
  },
  {
    program: 101,
    timbreGroup: 'B',
    timbreNumber: 36,
    partialsUsed: 3,
    soundGroup: SoundGroups.mallet,
    name: 'Windbell'
  },
  {
    program: 102,
    timbreGroup: 'B',
    timbreNumber: 37,
    partialsUsed: 2,
    soundGroup: SoundGroups.mallet,
    name: 'Glock'
  },
  {
    program: 103,
    timbreGroup: 'B',
    timbreNumber: 38,
    partialsUsed: 4,
    soundGroup: SoundGroups.mallet,
    name: 'Tube Bell'
  },
  {
    program: 104,
    timbreGroup: 'B',
    timbreNumber: 39,
    partialsUsed: 1,
    soundGroup: SoundGroups.mallet,
    name: 'Xylophone'
  },
  {
    program: 105,
    timbreGroup: 'B',
    timbreNumber: 40,
    partialsUsed: 3,
    soundGroup: SoundGroups.mallet,
    name: 'Marimba'
  },
  {
    program: 106,
    timbreGroup: 'B',
    timbreNumber: 41,
    partialsUsed: 2,
    soundGroup: SoundGroups.special,
    name: 'Koto'
  },
  {
    program: 107,
    timbreGroup: 'B',
    timbreNumber: 42,
    partialsUsed: 4,
    soundGroup: SoundGroups.special,
    name: 'Sho'
  },
  {
    program: 108,
    timbreGroup: 'B',
    timbreNumber: 43,
    partialsUsed: 4,
    soundGroup: SoundGroups.special,
    name: 'Shakuhachi'
  },
  {
    program: 109,
    timbreGroup: 'B',
    timbreNumber: 44,
    partialsUsed: 2,
    soundGroup: SoundGroups.special,
    name: 'Whistle 1'
  },
  {
    program: 110,
    timbreGroup: 'B',
    timbreNumber: 45,
    partialsUsed: 1,
    soundGroup: SoundGroups.special,
    name: 'Whistle 2'
  },
  {
    program: 111,
    timbreGroup: 'B',
    timbreNumber: 46,
    partialsUsed: 4,
    soundGroup: SoundGroups.special,
    name: 'Bottleblow'
  },
  {
    program: 112,
    timbreGroup: 'B',
    timbreNumber: 47,
    partialsUsed: 3,
    soundGroup: SoundGroups.special,
    name: 'Breathpipe'
  },
  {
    program: 113,
    timbreGroup: 'B',
    timbreNumber: 48,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Timpani'
  },
  {
    program: 114,
    timbreGroup: 'B',
    timbreNumber: 49,
    partialsUsed: 1,
    soundGroup: SoundGroups.percusn,
    name: 'Melodic Tom'
  },
  {
    program: 115,
    timbreGroup: 'B',
    timbreNumber: 50,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Deep Snare'
  },
  {
    program: 116,
    timbreGroup: 'B',
    timbreNumber: 51,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Elec Perc 1'
  },
  {
    program: 117,
    timbreGroup: 'B',
    timbreNumber: 52,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Elec Perc 2'
  },
  {
    program: 118,
    timbreGroup: 'B',
    timbreNumber: 53,
    partialsUsed: 3,
    soundGroup: SoundGroups.percusn,
    name: 'Taiko'
  },
  {
    program: 119,
    timbreGroup: 'B',
    timbreNumber: 54,
    partialsUsed: 1,
    soundGroup: SoundGroups.percusn,
    name: 'Taiko Rim'
  },
  {
    program: 120,
    timbreGroup: 'B',
    timbreNumber: 55,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Cymbal'
  },
  {
    program: 121,
    timbreGroup: 'B',
    timbreNumber: 56,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Castanets'
  },
  {
    program: 122,
    timbreGroup: 'B',
    timbreNumber: 57,
    partialsUsed: 2,
    soundGroup: SoundGroups.percusn,
    name: 'Triangle'
  },
  {
    program: 123,
    timbreGroup: 'B',
    timbreNumber: 58,
    partialsUsed: 4,
    soundGroup: SoundGroups.effects,
    name: 'Orche Hit'
  },
  {
    program: 124,
    timbreGroup: 'B',
    timbreNumber: 59,
    partialsUsed: 1,
    soundGroup: SoundGroups.effects,
    name: 'Telephone'
  },
  {
    program: 125,
    timbreGroup: 'B',
    timbreNumber: 60,
    partialsUsed: 1,
    soundGroup: SoundGroups.effects,
    name: 'Bird Tweet'
  },
  {
    program: 126,
    timbreGroup: 'B',
    timbreNumber: 61,
    partialsUsed: 4,
    soundGroup: SoundGroups.effects,
    name: 'One Note Jam'
  },
  {
    program: 127,
    timbreGroup: 'B',
    timbreNumber: 62,
    partialsUsed: 3,
    soundGroup: SoundGroups.effects,
    name: 'Water Bells'
  },
  {
    program: 128,
    timbreGroup: 'B',
    timbreNumber: 63,
    partialsUsed: 4,
    soundGroup: SoundGroups.effects,
    name: 'Jungle Tune'
  }
]
