var APP_DATA = {
  "scenes": [
    {
      "id": "0-acceso-y-estar",
      "name": "ACCESO Y ESTAR",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.05820521497428466,
        "pitch": 0.06544838983404588,
        "fov": 1.4581901255025689
      },
      "linkHotspots": [
        {
          "yaw": -1.6667525603069713,
          "pitch": 0.3734317044711162,
          "rotation": 0,
          "target": "1-cocina-comedor"
        },
        {
          "yaw": 2.669772446923588,
          "pitch": 0.2666559313659498,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina-comedor",
      "name": "COCINA-COMEDOR",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2714782367538264,
          "pitch": 0.4736776487962935,
          "rotation": 0,
          "target": "0-acceso-y-estar"
        },
        {
          "yaw": -2.6237755782887575,
          "pitch": 0.20112585362973512,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo",
      "name": "PASILLO",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1711015421235356,
          "pitch": 0.362487077556624,
          "rotation": 0,
          "target": "1-cocina-comedor"
        },
        {
          "yaw": 1.389912375759394,
          "pitch": -0.02170669757541077,
          "rotation": 0,
          "target": "0-acceso-y-estar"
        },
        {
          "yaw": 2.529437826013618,
          "pitch": 0.5597686488889195,
          "rotation": 0,
          "target": "3-dormitorio-planta-baja"
        },
        {
          "yaw": -2.3113513157239076,
          "pitch": 0.03392598763210408,
          "rotation": 0,
          "target": "4-estar-intimo-planta-alta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormitorio-planta-baja",
      "name": "DORMITORIO PLANTA BAJA",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.916724790022137,
          "pitch": 0.5903825390678268,
          "rotation": 0,
          "target": "2-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-estar-intimo-planta-alta",
      "name": "ESTAR INTIMO PLANTA ALTA",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.138175724203638,
          "pitch": 0.37366334868779916,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": -0.12243991372420027,
          "pitch": 0.24698545601624033,
          "rotation": 0,
          "target": "5-estar-intimo-balconeo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-estar-intimo-balconeo",
      "name": "ESTAR INTIMO, BALCONEO",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2410490544651722,
          "pitch": 0.25297204419477737,
          "rotation": 0,
          "target": "4-estar-intimo-planta-alta"
        },
        {
          "yaw": 0.03304045767091779,
          "pitch": 0.14200327582728178,
          "rotation": 0,
          "target": "6-dormitorio-1"
        },
        {
          "yaw": 0.6258265918150734,
          "pitch": 0.1475215852603018,
          "rotation": 0,
          "target": "7-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dormitorio-1",
      "name": "DORMITORIO 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.292162317320562,
          "pitch": -0.11748105250722318,
          "rotation": 0,
          "target": "7-dormitorio-2"
        },
        {
          "yaw": 2.8355704306171177,
          "pitch": 0.560759916301734,
          "rotation": 0,
          "target": "5-estar-intimo-balconeo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dormitorio-2",
      "name": "DORMITORIO 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9269439352610185,
          "pitch": -0.014937557307273863,
          "rotation": 0,
          "target": "6-dormitorio-1"
        },
        {
          "yaw": -1.1587577504534519,
          "pitch": 0.59314534274999,
          "rotation": 0,
          "target": "5-estar-intimo-balconeo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
