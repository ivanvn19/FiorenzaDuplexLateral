var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada-exterior",
      "name": "Fachada exterior",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06945028821868249,
        "pitch": -0.3953381152861759,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.01441367902404167,
          "pitch": -0.15809762796828153,
          "rotation": 0,
          "target": "1-acceso-escaleras"
        },
        {
          "yaw": 0.6518504303838828,
          "pitch": -0.06184641522475687,
          "rotation": 0,
          "target": "5-acceso-veichulos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-acceso-escaleras",
      "name": "acceso escaleras",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.008610877732699862,
        "pitch": -0.02902832315039916,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.012099552648399126,
          "pitch": -0.16945357335626277,
          "rotation": 0,
          "target": "2-hall-central"
        },
        {
          "yaw": -3.0601814326784886,
          "pitch": 0.09586227119463686,
          "rotation": 0,
          "target": "0-fachada-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-central",
      "name": "hall central",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.27831394325616365,
          "pitch": 0.04245919801726927,
          "rotation": 0,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": 3.109535585696018,
          "pitch": 0.17576032834269384,
          "rotation": 0,
          "target": "1-acceso-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ascensor-cocheras",
      "name": "ascensor/ cocheras",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22584227995422523,
          "pitch": 0.01435332716065929,
          "rotation": 0,
          "target": "4-cocheras-descubiertas"
        },
        {
          "yaw": -1.7579937114292221,
          "pitch": 0.1406825478637188,
          "rotation": 0,
          "target": "7-palier"
        },
        {
          "yaw": 2.7850346360287705,
          "pitch": 0.05707424563486363,
          "rotation": 0,
          "target": "2-hall-central"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocheras-descubiertas",
      "name": "cocheras descubiertas",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.041424322996356,
          "pitch": 0.03477807256583887,
          "rotation": 0,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -1.3036400850034333,
          "pitch": 0.0761486571711707,
          "rotation": 0,
          "target": "6-vista-cocheras-descubiretas"
        },
        {
          "yaw": 1.7148332249058438,
          "pitch": 0.10616743668712303,
          "rotation": 1.5707963267948966,
          "target": "5-acceso-veichulos-"
        },
        {
          "yaw": 0.21763311214365189,
          "pitch": 0.1264377793531004,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acceso-veichulos-",
      "name": "acceso veichulos ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5218178273819731,
        "pitch": -0.10390296619701012,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.1357048354911274,
          "pitch": 0.12758164747296696,
          "rotation": 0,
          "target": "0-fachada-exterior"
        },
        {
          "yaw": -0.4280717638308609,
          "pitch": -0.027344446397515654,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-vista-cocheras-descubiretas",
      "name": "vista cocheras descubiretas",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.14772171900281,
        "pitch": 0.07858989373579917,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.1995322799090147,
          "pitch": 0.03727523261241927,
          "rotation": 1.5707963267948966,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -2.470461997551748,
          "pitch": 0.09411547896680794,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-palier",
      "name": "palier",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8726709068927345,
        "pitch": 0.05322752990768187,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.042707282455634044,
          "pitch": 0.019990333866150678,
          "rotation": 3.141592653589793,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -1.1511448742515888,
          "pitch": 0.06296185395290621,
          "rotation": 1.5707963267948966,
          "target": "9-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cocheras-descubiertas",
      "name": "cocheras descubiertas",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7172309959700858,
        "pitch": 0.40851148319419117,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.7140849278089156,
          "pitch": 0.013314623479281806,
          "rotation": 0,
          "target": "4-cocheras-descubiertas"
        },
        {
          "yaw": 2.6030445202446195,
          "pitch": 0.051570673129575084,
          "rotation": 0,
          "target": "5-acceso-veichulos-"
        },
        {
          "yaw": -2.2340370626360393,
          "pitch": 0.027637799012593334,
          "rotation": 0,
          "target": "6-vista-cocheras-descubiretas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ingreso-al-dpto",
      "name": "Ingreso al dpto",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2813131638605668,
          "pitch": -0.36092824312011906,
          "rotation": 5.497787143782138,
          "target": "12-descanso-escalera-"
        },
        {
          "yaw": -1.1629569575027663,
          "pitch": 0.15882822552918618,
          "rotation": 0,
          "target": "10-living--comedor"
        },
        {
          "yaw": 1.2165681343640617,
          "pitch": 0.06154601855254427,
          "rotation": 0,
          "target": "17-cocina"
        },
        {
          "yaw": 0.5706368543645066,
          "pitch": 0.14746010696746836,
          "rotation": 0,
          "target": "18-bao-pb"
        },
        {
          "yaw": -1.675724720671722,
          "pitch": 0.09222514519510838,
          "rotation": 0,
          "target": "11-balcn-c-parrilla"
        },
        {
          "yaw": 2.8761071121458635,
          "pitch": 0.0759798110920844,
          "rotation": 0,
          "target": "7-palier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-living--comedor",
      "name": "Living / comedor",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.647407530416947,
          "pitch": 0.13477891805064246,
          "rotation": 0.7853981633974483,
          "target": "9-ingreso-al-dpto"
        },
        {
          "yaw": 3.109092755328417,
          "pitch": 0.01734931016664021,
          "rotation": 0,
          "target": "17-cocina"
        },
        {
          "yaw": 2.377688457596606,
          "pitch": -0.25030518987184003,
          "rotation": 0,
          "target": "12-descanso-escalera-"
        },
        {
          "yaw": -0.3802715231545051,
          "pitch": 0.05081404418440627,
          "rotation": 0,
          "target": "11-balcn-c-parrilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcn-c-parrilla",
      "name": "Balcón c/ parrilla",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0257888220071294,
          "pitch": 0.10649124453308367,
          "rotation": 0,
          "target": "10-living--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-descanso-escalera-",
      "name": "Descanso escalera ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4836090019021668,
          "pitch": 0.3999895200068835,
          "rotation": 8.63937979737193,
          "target": "9-ingreso-al-dpto"
        },
        {
          "yaw": -0.22167905800631793,
          "pitch": -0.425441999905237,
          "rotation": 0,
          "target": "13-ingreso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ingreso-pa",
      "name": "Ingreso PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8142333223340215,
          "pitch": 0.2154403452916398,
          "rotation": 8.63937979737193,
          "target": "12-descanso-escalera-"
        },
        {
          "yaw": 1.0866516448762926,
          "pitch": 0.17553800274472664,
          "rotation": 0,
          "target": "14-habitacin-principal"
        },
        {
          "yaw": -1.486777068017421,
          "pitch": 0.04941943306808838,
          "rotation": 0,
          "target": "15-habitacin"
        },
        {
          "yaw": -1.849863905989693,
          "pitch": 0.1813186394774675,
          "rotation": 5.497787143782138,
          "target": "16-bao-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-habitacin-principal",
      "name": "Habitación principal",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.4779765160584937,
          "pitch": 0.1495422431156932,
          "rotation": 0,
          "target": "13-ingreso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-habitacin",
      "name": "Habitación",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6959858306779507,
          "pitch": 0.18565232105757445,
          "rotation": 0,
          "target": "13-ingreso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bao-pa",
      "name": "Baño PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.20480904487688534,
        "pitch": 0.010136874750930502,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.9643340686813033,
          "pitch": 0.24140642611962448,
          "rotation": 0,
          "target": "13-ingreso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cocina",
      "name": "Cocina",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4131799861864174,
        "pitch": -3.552713678800501e-15,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.0736383870389705,
          "pitch": 0.16499185927441573,
          "rotation": 5.497787143782138,
          "target": "9-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bao-pb",
      "name": "Baño PB",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9132137878562485,
          "pitch": 0.17114357991426843,
          "rotation": 0,
          "target": "9-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FiorenzaDuplexLateral",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
