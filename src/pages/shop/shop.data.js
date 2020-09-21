const SHOP_DATA = [
  {
    id: 1,
    title: 'PG',
    routeName: 'pg',
    items: [
      {
        id: 1,
        name: 'Gundam OO Raiser',
        imageUrl: import("./assets/pg-00R.jpg"),
        price: 25
      },
      {
        id: 2,
        name: 'Banshee Gundam',
        imageUrl: import("./assets/pg-00R.jpg"),
        price: 18
      },
      {
        id: 3,
        name: 'GP01FB',
        imageUrl: import("./assets/pg-gp01fb.jpg"),
        price: 35
      },
      {
        id: 4,
        name: 'Gundam MK II Titan',
        imageUrl: import("./assets/pg-mk2titan.jpg"),
        price: 25
      },
      {
        id: 5,
        name: 'Gundam 00 Seven Sword',
        imageUrl: import("./assets/pg-OO7.jpg"),
        price: 18
      },
      {
        id: 6,
        name: 'Gundam Perfect Strike',
        imageUrl: import("./assets/pg-perfectstrike.jpg"),
        price: 14
      },
      {
        id: 7,
        name: 'Gundam Astray Red Frame Kai',
        imageUrl: import("./assets/pg-redframekai.jpeg"),
        price: 18
      },
      {
        id: 8,
        name: 'Strike Freedom Gundam',
        imageUrl: import("./assets/pg-sf.jpg"),
        price: 14
      },
      {
        id: 9,
        name: 'Gundam Unicorn',
        imageUrl: import("./assets/pg-unicorn.jpg"),
        price: 16
      },
      {
        id: 10,
        name: 'Gundam Wing Zero',
        imageUrl: import("./assets/pg-wing.jpg"),
        price: 16
      },
      {
        id: 11,
        name: 'Gundam Zeta',
        imageUrl: import("./assets/pg-zeta.jpg"),
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'HG',
    routeName: 'hg',
    items: [
      {
        id: 1,
        name: 'Gundam Age II Magnum',
        imageUrl: import("./assets/hg-age2magnum.jpg"),
        price: 220
      },
      {
        id: 2,
        name: 'Maganac',
        imageUrl: import("./assets/hg-maganac.jpg"),
        price: 280
      },
      {
        id: 3,
        name: 'Gundam Narrative C Pack',
        imageUrl: import("./assets/hg-narrative.jpg"),
        price: 110
      },
      {
        id: 4,
        name: 'Gundam Phenex',
        imageUrl: import("./assets/hg-phenex.jpg"),
        price: 160
      },
      {
        id: 5,
        name: 'Gundam Sandrock',
        imageUrl: import("./assets/hg-sandrock.jpg"),
        price: 160
      },
      {
        id: 6,
        name: 'Gundam Silver Bullet Suppressor',
        imageUrl: import("./assets/hg-silverbullet.jpg"),
        price: 160
      },
      {
        id: 7,
        name: 'Gundam Zerachiel',
        imageUrl: import("./assets/hg-zerachiel.jpg"),
        price: 190
      },
      {
        id: 8,
        name: 'Destiny Gundam (Heine Westenfluss Custom)',
        imageUrl: import("./assets/hg-destinyhwcustom.jpg"),
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'MG',
    routeName: 'mg',
    items: [
      {
        id: 1,
        name: 'Gundam Barbatos',
        imageUrl: import("./assets/mg-barbatos.jpg"),
        price: 125
      },
      {
        id: 2,
        name: 'Deep Striker',
        imageUrl: import("./assets/mg-deepstriker.jpg"),
        price: 90
      },
      {
        id: 3,
        name: 'Gundam Dynames',
        imageUrl: import("./assets/mg-Dynames.jpg"),
        price: 90
      },
      {
        id: 4,
        name: 'EX-S',
        imageUrl: import("./assets/mg-exs.jpg"),
        price: 165
      },
      {
        id: 5,
        name: 'Gundam F91',
        imageUrl: import("./assets/mg-f91.jpg"),
        price: 185
      },
      {
        id: 6,
        name: 'FAZZ',
        imageUrl: import("./assets/mg-fazz.jpg"),
        price: 185
      },
      {
        id: 7,
        name: 'Jega',
        imageUrl: import("./assets/mg-jegan.jpg"),
        price: 185
      },
      {
        id: 8,
        name: 'Gundam Kyrios',
        imageUrl: import("./assets/mg-kyrios.jpg"),
        price: 185
      },
      {
        id: 9,
        name: 'Phantom Zaku',
        imageUrl: import("./assets/mg-phantomzaku.jpg"),
        price: 185
      },
      {
        id: 10,
        name: 'Gundam Providence',
        imageUrl: import("./assets/mg-providence.jpg"),
        price: 185
      },
      {
        id: 11,
        name: 'Sinanju Stein',
        imageUrl: import("./assets/mg-sinanjustein.jpg"),
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'RG',
    routeName: 'rg',
    items: [
      {
        id: 1,
        name: 'Justice Gundam',
        imageUrl: import("./assets/rg-justice.jpg"),
        price: 25
      },
      {
        id: 2,
        name: 'Sazabi',
        imageUrl: import("./assets/rg-sazabi.jpg"),
        price: 20
      },
      {
        id: 3,
        name: 'Sinanju',
        imageUrl: import("./assets/rg-sinanju.jpg"),
        price: 80
      },
      {
        id: 4,
        name: 'Tallgeese EW',
        imageUrl: import("./assets/rg-tallgeese.jpg"),
        price: 80
      },
      {
        id: 5,
        name: 'Gundam Crossbone X1',
        imageUrl: import("./assets/rg-x1.jpg"),
        price: 45
      },
      {
        id: 6,
        name: "Z'Gok",
        imageUrl: import("./assets/rg-zgok.jpg"),
        price: 135
      }
    ]
  },
  {
    id: 5,
    title: 'SD',
    routeName: 'sd',
    items: [
      {
        id: 1,
        name: 'Gundam Deathscythe',
        imageUrl: import("./assets/sd-deathscythe.jpg"),
        price: 325
      },
      {
        id: 2,
        name: 'Knight Unicorn Gundam',
        imageUrl: import("./assets/sd-knightunicorn.jpg"),
        price: 20
      },
      {
        id: 3,
        name: 'Try Burning Gundam',
        imageUrl: import("./assets/sd-tryburning.jpg"),
        price: 25
      },
      {
        id: 4,
        name: 'Gundam Valkylander',
        imageUrl: import("./assets/sd-valkylander.jpg"),
        price: 25
      },
      {
        id: 5,
        name: 'Winning Gundam',
        imageUrl: import("./assets/sd-winning.jpg"),
        price: 40
      },
      {
        id: 6,
        name: 'Gundam Zeromaru',
        imageUrl: import("./assets/sd-zeromaru.jpg"),
        price: 25
      }
    ]
  }
]


export default SHOP_DATA;