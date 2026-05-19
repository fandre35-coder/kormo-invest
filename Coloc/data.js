var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.8195985599870976,
        "pitch": 0.18721760530921827,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 1.3972194455365,
          "pitch": 0.6423905966286618,
          "rotation": 0,
          "target": "1-cuisine"
        },
        {
          "yaw": -2.761266164919027,
          "pitch": 0.5268937001634448,
          "rotation": 0,
          "target": "5-couloir-toilette"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.5570150986043032,
        "pitch": 0.44102816103154296,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 0.372211444458987,
          "pitch": 0.534527927813329,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": -2.990978503225165,
          "pitch": 0.5960758731387514,
          "rotation": 0.7853981633974483,
          "target": "0-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.0645270486999294,
        "pitch": 0.49070336713235463,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 2.0769699601305085,
          "pitch": 0.6614985118638153,
          "rotation": 0.7853981633974483,
          "target": "3-chambre-1"
        },
        {
          "yaw": 0.29117425952989606,
          "pitch": 1.1270692103067983,
          "rotation": 5.497787143782138,
          "target": "4-balcon"
        },
        {
          "yaw": 3.0820940860698354,
          "pitch": 0.5512097662340327,
          "rotation": 6.283185307179586,
          "target": "1-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chambre-1",
      "name": "Chambre 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.564097514961359,
        "pitch": 0.33675778269134327,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 2.6562832104327354,
          "pitch": 0.6139477846904384,
          "rotation": 5.497787143782138,
          "target": "2-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7299031599895738,
          "pitch": 0.4887473541543166,
          "title": "Chambre 1",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-balcon",
      "name": "Balcon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.4394244074097564,
        "pitch": 0.28209314591672374,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 3.1182700013123332,
          "pitch": 0.8769608184001889,
          "rotation": 0,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-couloir-toilette",
      "name": "Couloir Toilette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.6076639463124529,
        "pitch": 0.29446496957379686,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 3.0438350734264423,
          "pitch": 0.9105205438938242,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": -0.1489062257420528,
          "pitch": 0.7759575228917406,
          "rotation": 0,
          "target": "6-couloir-ch-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-couloir-ch-4",
      "name": "Couloir Ch 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.8124822430702405,
        "pitch": 0.35084204384173034,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 2.3836572157951945,
          "pitch": 0.8947686683881741,
          "rotation": 0,
          "target": "8-chambre-4"
        },
        {
          "yaw": -1.8646928621846648,
          "pitch": 0.7622200538105623,
          "rotation": 0,
          "target": "5-couloir-toilette"
        },
        {
          "yaw": -0.048474285255704075,
          "pitch": 0.9161205837043092,
          "rotation": 0,
          "target": "7-couloir-ch23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-couloir-ch23",
      "name": "Couloir ch2/3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.6691753171759451,
        "pitch": 0.3054123829372237,
        "fov": 1.8491174047782408
      },
      "linkHotspots": [
        {
          "yaw": 3.090125828834867,
          "pitch": 0.7272758521642988,
          "rotation": 5.497787143782138,
          "target": "9-chambre-2"
        },
        {
          "yaw": -1.5945510930987634,
          "pitch": 1.0925134308540514,
          "rotation": 0,
          "target": "10-salle-de-bain"
        },
        {
          "yaw": -2.539916408856774,
          "pitch": 0.843597144477755,
          "rotation": 11.780972450961727,
          "target": "12-chambre-3"
        },
        {
          "yaw": 0.1683543421595317,
          "pitch": 0.8595705927250865,
          "rotation": 0,
          "target": "6-couloir-ch-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-chambre-4",
      "name": "Chambre 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.438859566451603,
          "pitch": 0.9070249680468105,
          "rotation": 5.497787143782138,
          "target": "6-couloir-ch-4"
        },
        {
          "yaw": -0.12741687639324795,
          "pitch": 0.43156473069209156,
          "rotation": 0,
          "target": "11-fenetre-ch-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.20401767162953455,
          "pitch": 0.5588335589259081,
          "title": "Chambre 4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-chambre-2",
      "name": "Chambre 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.16113680478871117,
        "pitch": 0.3612150618059786,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 2.987581118338377,
          "pitch": 0.5200317718730645,
          "rotation": 6.283185307179586,
          "target": "7-couloir-ch23"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6680919445555773,
          "pitch": 0.12332050184804544,
          "title": "Chambre 2",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-salle-de-bain",
      "name": "Salle de bain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.11346451513795408,
        "pitch": 0.3887680232754107,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": -3.115494651947042,
          "pitch": 0.8298812095139674,
          "rotation": 0,
          "target": "7-couloir-ch23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-fenetre-ch-4",
      "name": "Fenetre Ch 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.13409978862749838,
        "pitch": 0.18811939139699518,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 2.917491962284993,
          "pitch": 0.4641110869658256,
          "rotation": 0,
          "target": "8-chambre-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-chambre-3",
      "name": "Chambre 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.11526780956437044,
        "pitch": 0.30504488269450825,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 2.9803658894039895,
          "pitch": 0.842747978089875,
          "rotation": 0,
          "target": "7-couloir-ch23"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5282912655077716,
          "pitch": 0.370587497947934,
          "title": "Chambre 3",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "37 Rue Louis Goux",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
