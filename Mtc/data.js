var APP_DATA = {
  "scenes": [
    {
      "id": "0-partie-commune",
      "name": "Partie commune",
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
        "yaw": -3.1279764583010916,
        "pitch": 0.37372201613245437,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": -3.0294524288278577,
          "pitch": 0.8839891682617278,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entre",
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
        "yaw": 2.3683663796657477,
        "pitch": 0.3816592503953906,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 1.5929193554147236,
          "pitch": 0.8072931770898055,
          "rotation": 6.283185307179586,
          "target": "2-salle-de-bain"
        },
        {
          "yaw": 3.1350447865050413,
          "pitch": 0.8370264032928354,
          "rotation": 0.7853981633974483,
          "target": "3-cuisine"
        },
        {
          "yaw": 0.14512420409098326,
          "pitch": 0.6888542435860181,
          "rotation": 0,
          "target": "0-partie-commune"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salle-de-bain",
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
        "yaw": -2.5333685781210242,
        "pitch": 0.48429045860165587,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 1.5687137807994374,
          "pitch": 0.8477410639792957,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cuisine",
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
        "yaw": -0.5942135379605791,
        "pitch": 0.3703973261632427,
        "fov": 1.8550044918783752
      },
      "linkHotspots": [
        {
          "yaw": -2.945759860143683,
          "pitch": 0.6476480603616608,
          "rotation": 0,
          "target": "1-entre"
        },
        {
          "yaw": 0.0006238987360731585,
          "pitch": 0.9441234327880412,
          "rotation": 0,
          "target": "4-salon-1"
        },
        {
          "yaw": -0.15217322516820175,
          "pitch": 0.30011328169804585,
          "rotation": 0,
          "target": "6-fenetre"
        },
        {
          "yaw": -1.3332400924533712,
          "pitch": 0.5501696318799514,
          "rotation": 0,
          "target": "5-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salon-1",
      "name": "Salon 1",
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
          "yaw": -0.045425543061876184,
          "pitch": 0.5204815061390082,
          "rotation": 0,
          "target": "6-fenetre"
        },
        {
          "yaw": 2.811818957530381,
          "pitch": 0.466224421047718,
          "rotation": 0,
          "target": "3-cuisine"
        },
        {
          "yaw": -2.6018171204630427,
          "pitch": 0.5908475100715371,
          "rotation": 0,
          "target": "5-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salon-2",
      "name": "Salon 2",
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
        "yaw": 0.7497705564566388,
        "pitch": 0.2849114104927395,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": 1.991071352748067,
          "pitch": 0.36931893368985946,
          "rotation": 0,
          "target": "3-cuisine"
        },
        {
          "yaw": 0.011668758191637707,
          "pitch": 0.425173430082328,
          "rotation": 0,
          "target": "4-salon-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-fenetre",
      "name": "Fenetre",
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
        "yaw": 0.06842792574211032,
        "pitch": 0.49232951307376993,
        "fov": 1.8566181960782413
      },
      "linkHotspots": [
        {
          "yaw": -2.7736220770394375,
          "pitch": 0.43169606144009975,
          "rotation": 0,
          "target": "5-salon-2"
        },
        {
          "yaw": 2.9150943562638556,
          "pitch": 0.4689440564377527,
          "rotation": 0,
          "target": "4-salon-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "30 Avenue Salengro Villeurbanne",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
