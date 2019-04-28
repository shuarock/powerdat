define({ "api": [
  {
    "type": "post",
    "url": "/asset",
    "title": "Create",
    "version": "1.0.0",
    "name": "CreateAsset",
    "group": "Assets",
    "filename": "./src/main/java/hello/AssetController.java",
    "groupTitle": "Assets",
    "description": "<p>Post an Asset.</p>",
    "parameter": {
      "fields": {
        "OneOf": [
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectShipment\">Shipment</a>",
            "optional": false,
            "field": "shipment",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectEquipment\">Equipment</a>",
            "optional": false,
            "field": "equipment",
            "description": ""
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[0..8]",
            "optional": true,
            "field": "postersReferenceId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "ltl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "size": "0.70",
            "optional": true,
            "field": "comments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 99",
            "optional": true,
            "field": "count",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectDimensions\">Dimensions</a>",
            "optional": true,
            "field": "dimensions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stops",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectAvailability\">Availability</a>",
            "optional": true,
            "field": "availability",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "includeAsset",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/asset",
    "title": "Delete",
    "version": "1.1.0",
    "name": "DeleteAsset",
    "group": "Assets",
    "filename": "./src/main/java/hello/AssetController.java",
    "groupTitle": "Assets",
    "description": "<p>Deletes one or more posted assets.</p>",
    "parameter": {
      "fields": {
        "OneOf": [
          {
            "group": "OneOf",
            "type": "AssetId[]",
            "size": "0..8",
            "optional": false,
            "field": "deleteAssetsByAssetIds",
            "description": "<p>Delete one or more assets by AssetId.</p>"
          },
          {
            "group": "OneOf",
            "type": "String",
            "size": "0..8",
            "optional": false,
            "field": "deleteAssetByPostersReferenceId",
            "description": "<p>Delete an asset by PostersReferenceId.</p>"
          },
          {
            "group": "OneOf",
            "type": "Boolean",
            "optional": false,
            "field": "deleteAllMyAssets",
            "description": "<p>Delete all assets owned by the requester.</p>"
          },
          {
            "group": "OneOf",
            "type": "Boolean",
            "optional": false,
            "field": "deleteAllMyGroupsAssets",
            "description": "<p>Delete all assets belonging by the requester or to other member’s of the requester’s sharing group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "deleteAssetsByAssetIds",
          "content": "\n[ \"TS0PdTDs\", \"TS0PdTDt\"]",
          "type": "json"
        },
        {
          "title": "deleteAssetByPostersReferenceId",
          "content": "\n\"customId\"",
          "type": "json"
        },
        {
          "title": "deleteAllMyAssets",
          "content": "\ntrue",
          "type": "json"
        },
        {
          "title": "deleteAllMyGroupsAssets",
          "content": "\nfalse",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "ByAssetId",
        "content": "\nbody:\n\n{ \"deleteAssetsByAssetIds\": [ \"TS0PdTDs\", \"TS0PdTDt\"] }",
        "type": "json"
      },
      {
        "title": "ByPostersId",
        "content": "\nbody:\n\n{ \"deleteAssetByPostersReferenceId\": \"customId\" }",
        "type": "json"
      },
      {
        "title": "ByAllMyAssets",
        "content": "\nbody:\n\n{ \"deleteAllMyAssets\": true }",
        "type": "json"
      },
      {
        "title": "ByAllMyGroupsAssets",
        "content": "\nbody:\n\n{ \"deleteAllMyGroupsAssets\": true }",
        "type": "json"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/asset",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteAsset",
    "group": "Assets",
    "filename": "./src/main/java/hello/AssetController.java",
    "groupTitle": "Assets",
    "description": "<p>Deletes one or more posted assets.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "deleteAssetsByAssetIds",
            "description": "<p>Delete one or more assets by AssetId.</p>"
          },
          {
            "group": "Parameter",
            "type": "AssetId[]",
            "optional": false,
            "field": "deleteAssetsByAssetIds.ids",
            "description": "<p>Asset ids to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "deleteAssetByPostersReferenceId",
            "description": "<p>Delete an asset by PostersReferenceId.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..8",
            "optional": false,
            "field": "deleteAssetByPostersReferenceId.id",
            "description": "<p>poster id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "deleteAllMyAssets",
            "description": "<p>Delete all assets owned by the requester.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "deleteAllMyGroupsAssets",
            "description": "<p>Delete all assets belonging by the requester or to other member’s of the requester’s sharing group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AssetId",
          "content": "\n{ \"ids\": [ \"TS0PdTDs\", \"TS0PdTDt\"] }",
          "type": "json"
        },
        {
          "title": "PostersReferenceId",
          "content": "\n{ \"id\": \"customId\" }",
          "type": "json"
        },
        {
          "title": "deleteAllMyAssets",
          "content": "\ntrue",
          "type": "json"
        },
        {
          "title": "deleteAllMyGroupsAssets",
          "content": "\nfalse",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "ByAssetId",
        "content": "\n{ \"deleteAssetsByAssetIds\": { \"ids\": [\"TS0PdTDs\", \"TS0PdTDt\"] } }",
        "type": "json"
      },
      {
        "title": "ByPostersId",
        "content": "\n{ \"deleteAssetByPostersReferenceId\": { \"id\": \"customId\" } }",
        "type": "json"
      },
      {
        "title": "ByAllMyAssets",
        "content": "\n{ \"deleteAllMyAssets\": true }",
        "type": "json"
      },
      {
        "title": "ByAllMyGroupsAssets",
        "content": "\n{ \"deleteAllMyGroupsAssets\": true }",
        "type": "json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/asset",
    "title": "Get",
    "version": "1.1.0",
    "name": "GetAsset",
    "group": "Assets",
    "filename": "./src/main/java/hello/AssetController.java",
    "groupTitle": "Assets",
    "description": "<p>Lookup currently-booked assets.</p>",
    "parameter": {
      "fields": {
        "OneOf": [
          {
            "group": "OneOf",
            "type": "AssetId[]",
            "size": "0..8",
            "optional": false,
            "field": "queryAssetsByAssetIds",
            "description": "<p>Lookup one or more assets by AssetId.</p>"
          },
          {
            "group": "OneOf",
            "type": "String",
            "size": "0..8",
            "optional": false,
            "field": "queryAssetByPostersReferenceId",
            "description": "<p>Lookup one or more assets by PostersReferenceId.</p>"
          },
          {
            "group": "OneOf",
            "type": "Boolean",
            "optional": false,
            "field": "queryAllMyAssets",
            "description": "<p>Lookup all assets belonging to the requester.</p>"
          },
          {
            "group": "OneOf",
            "type": "Boolean",
            "optional": false,
            "field": "queryAllMyGroupsAssets",
            "description": "<p>Lookup all assets belonging to the requester or to other members of the requester’s sharing group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "queryAssetsByAssetIds",
          "content": "\n[ \"TS0PdTDs\", \"TS0PdTDt\"]",
          "type": "json"
        },
        {
          "title": "queryAssetByPostersReferenceId",
          "content": "\n\"customId\"",
          "type": "json"
        },
        {
          "title": "queryAllMyAssets",
          "content": "\ntrue",
          "type": "json"
        },
        {
          "title": "queryAllMyGroupsAssets",
          "content": "\nfalse",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "ByAssetId",
        "content": "\nbody:\n\n{ \"queryAssetsByAssetIds\": [ \"TS0PdTDs\", \"TS0PdTDt\" ] }",
        "type": "json"
      },
      {
        "title": "ByPostersId",
        "content": "\nbody:\n\n{ \"queryAssetByPostersReferenceId\": \"customId\" }",
        "type": "json"
      },
      {
        "title": "ByAllMyAssets",
        "content": "\nbody:\n\n{ \"queryAllMyAssets\": true }",
        "type": "json"
      },
      {
        "title": "ByAllMyGroupsAssets",
        "content": "\nbody:\n\n{ \"queryAllMyGroupsAssets\": true }",
        "type": "json"
      }
    ]
  },
  {
    "type": "get",
    "url": "/asset",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetAsset",
    "group": "Assets",
    "filename": "./src/main/java/hello/AssetController.java",
    "groupTitle": "Assets",
    "description": "<p>Query asset by specific criteria, you chan choose just one of the specified as parameters. The first criteria to match will be used.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "queryAssetsByAssetIds",
            "description": "<p>Query one or more assets by their AssetId.</p>"
          },
          {
            "group": "Parameter",
            "type": "AssetId[]",
            "optional": false,
            "field": "queryAssetsByAssetIds.ids",
            "description": "<p>Asset ids to search for.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "queryAssetByPostersReferenceId",
            "description": "<p>Query one or more assets by a Poster reference id associated with it.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..8",
            "optional": false,
            "field": "queryAssetByPostersReferenceId.id",
            "description": "<p>poster id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "queryAllMyAssets",
            "description": "<p>Lookup all assets belonging to the requester.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "queryAllMyGroupsAssets",
            "description": "<p>Lookup all assets belonging to the requester or to other members of the requester’s sharing group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AssetId",
          "content": "\n{ \"ids\": [ \"TS0PdTDs\", \"TS0PdTDt\"] }",
          "type": "json"
        },
        {
          "title": "PostersReferenceId",
          "content": "\n{ \"id\": \"customId\" }",
          "type": "json"
        },
        {
          "title": "queryAllMyAssets",
          "content": "\ntrue",
          "type": "json"
        },
        {
          "title": "queryAllMyGroupsAssets",
          "content": "\nfalse",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "ByAssetId",
        "content": "\n{ \"queryAssetsByAssetIds\": { \"ids\": [ \"TS0PdTDs\", \"TS0PdTDt\"] } }",
        "type": "json"
      },
      {
        "title": "ByPostersId",
        "content": "\n{ \"queryAssetByPostersReferenceId\": { \"id\": \"customId\" } }",
        "type": "json"
      },
      {
        "title": "ByAllMyAssets",
        "content": "\n{ \"queryAllMyAssets\": true }",
        "type": "json"
      },
      {
        "title": "ByAllMyGroupsAssets",
        "content": "\n{ \"queryAllMyGroupsAssets\": true }",
        "type": "json"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/asset",
    "title": "Update",
    "version": "1.0.0",
    "name": "UpdateAsset",
    "group": "Assets",
    "filename": "./src/main/java/hello/AssetController.java",
    "groupTitle": "Assets",
    "description": "<p>Update an Asset.</p>",
    "parameter": {
      "fields": {
        "OneOfId": [
          {
            "group": "OneOfId",
            "type": "assetId",
            "size": "0..8",
            "optional": false,
            "field": "assetId",
            "description": ""
          },
          {
            "group": "OneOfId",
            "type": "assetId",
            "size": "0..8",
            "optional": false,
            "field": "postersReferenceId",
            "description": ""
          }
        ],
        "OneOf": [
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectShipmentupdate\">ShipmentUpdate</a>",
            "optional": false,
            "field": "shipmentUpdate",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectEquipmentupdate\">EquipmentUpdate</a>",
            "optional": false,
            "field": "equipmentUpdate",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "OBJECT",
    "url": "Area",
    "title": "Area",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "stateProvince[]",
            "optional": true,
            "field": "stateProvinces",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "zone[]",
            "optional": true,
            "field": "zones",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetPostModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectArea"
  },
  {
    "type": "OBJECT",
    "url": "Availability",
    "title": "Availability",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "earliest",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "latest",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Date",
          "content": "\n2019-05-28T06:30:14.000Z",
          "type": "Date"
        }
      ]
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectAvailability"
  },
  {
    "type": "OBJECT",
    "url": "CityAndState",
    "title": "CityAndState",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..30",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateProvince",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "county",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectCityandstate"
  },
  {
    "type": "OBJECT",
    "url": "Coordinates",
    "title": "Coordinates",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "13.00 - 86.00",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "-177.00 – -52.00",
            "optional": false,
            "field": "longitude",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectCoordinates"
  },
  {
    "type": "OBJECT",
    "url": "Dimensions",
    "title": "Dimensions",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 199",
            "optional": true,
            "field": "lengthFeet",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 199999",
            "optional": true,
            "field": "weightPounds",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 299",
            "optional": true,
            "field": "heightInches",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 9999",
            "optional": true,
            "field": "volumeCubicFeet",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectDimensions"
  },
  {
    "type": "OBJECT",
    "url": "Equipment",
    "title": "Equipment",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "equipmentType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectPlace\">Place</a>",
            "optional": false,
            "field": "origin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectEquipmentdestination\">EquipmentDestination</a>",
            "optional": false,
            "field": "destination",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetPostModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectEquipment"
  },
  {
    "type": "OBJECT",
    "url": "EquipmentDestination",
    "title": "EquipmentDestination",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "OneOf": [
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectPlace\">Place</a>",
            "optional": false,
            "field": "place",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectArea\">Area</a>",
            "optional": false,
            "field": "area",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "Boolean",
            "optional": false,
            "field": "open",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetPostModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectEquipmentdestination"
  },
  {
    "type": "OBJECT",
    "url": "EquipmentUpdate",
    "title": "EquipmentUpdate",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "ltl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "size": "0.70",
            "optional": true,
            "field": "comments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 99",
            "optional": true,
            "field": "count",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectDimensions\">Dimensions</a>",
            "optional": true,
            "field": "dimensions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stops",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetUpdateModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectEquipmentupdate"
  },
  {
    "type": "OBJECT",
    "url": "FmPostalCode",
    "title": "FmPostalCode",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectFmpostalcode"
  },
  {
    "type": "OBJECT",
    "url": "NamedCoordinates",
    "title": "NamedCoordinates",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "13.00 - 86.00",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "-177.00 – -52.00",
            "optional": false,
            "field": "longitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..30",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateProvince",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectNamedcoordinates"
  },
  {
    "type": "OBJECT",
    "url": "NamedPostalCode",
    "title": "NamedPostalCode",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..30",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateProvince",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "county",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectPostalcode\">PostalCode</a>",
            "optional": false,
            "field": "postalCode",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectNamedpostalcode"
  },
  {
    "type": "OBJECT",
    "url": "Place",
    "title": "Place",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "OneOf": [
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectFmpostalcode\">FmPostalCode</a>",
            "optional": false,
            "field": "postalCode",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectCityandstate\">CityAndState</a>",
            "optional": false,
            "field": "cityAndState",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectNamedpostalcode\">NamedPostalCode</a>",
            "optional": false,
            "field": "namedPostalCode",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectCoordinates\">Coordinates</a>",
            "optional": false,
            "field": "coordinates",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectNamedcoordinates\">NamedCoordinates</a>",
            "optional": false,
            "field": "namedCoordinates",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectPlace"
  },
  {
    "type": "OBJECT",
    "url": "PostalCode",
    "title": "PostalCode",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/CommonModels.java",
    "groupTitle": "Custom_types",
    "name": "ObjectPostalcode"
  },
  {
    "type": "OBJECT",
    "url": "Rate",
    "title": "Rate",
    "group": "Custom_types",
    "description": "<p>Payment rate in USD (flat-rate or per-mile).</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0.0 – 99999.99",
            "optional": false,
            "field": "baseRateDollars",
            "description": "<p>Rate in US Dollars.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Flat\"",
              "\"PerMile\""
            ],
            "optional": false,
            "field": "rateBasedOn",
            "description": "<p>Per-mile or flat-rate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0 – 9999",
            "optional": true,
            "field": "rateMiles",
            "description": "<p>If the rate is based on per-mile, or flat-rate for a trip, this is the mileage used by the poster.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Flat Rate",
        "content": "\nbody:\n\n{ \"baseRateDollars\": 55.0, rateBasedOn: \"Flat\", rateMiles: 550 }",
        "type": "json"
      },
      {
        "title": "Per Mile Rate",
        "content": "\nbody:\n\n{ \"baseRateDollars\": 70.0, rateBasedOn: \"PerMile\", rateMiles: 50 }",
        "type": "json"
      },
      {
        "title": "Valid Rate",
        "content": "\nbody:\n\n{ \"baseRateDollars\": 70.0, rateBasedOn: \"PerMile\" }",
        "type": "json"
      }
    ],
    "filename": "./src/main/java/hello/models/AssetPostModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectRate"
  },
  {
    "type": "OBJECT",
    "url": "Shipment",
    "title": "Shipment",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "equipmentType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectPlace\">Place</a>",
            "optional": false,
            "field": "origin",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectPlace\">Place</a>",
            "optional": false,
            "field": "destination",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectTruckstops\">truckStops</a>",
            "optional": true,
            "field": "truckStops",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectRate\">Rate</a>",
            "optional": true,
            "field": "rate",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetPostModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectShipment"
  },
  {
    "type": "OBJECT",
    "url": "ShipmentUpdate",
    "title": "ShipmentUpdate",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "ltl",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "size": "0.70",
            "optional": true,
            "field": "comments",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1 – 99",
            "optional": true,
            "field": "count",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectDimensions\">Dimensions</a>",
            "optional": true,
            "field": "dimensions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "stops",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectTruckstops\">truckStops</a>",
            "optional": true,
            "field": "truckStops",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<a href=\"#api-Custom_types-ObjectRate\">Rate</a>",
            "optional": true,
            "field": "rate",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetUpdateModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectShipmentupdate"
  },
  {
    "type": "OBJECT",
    "url": "TruckStops",
    "title": "TruckStops",
    "group": "Custom_types",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "OneOf": [
          {
            "group": "OneOf",
            "type": "Object",
            "optional": false,
            "field": "truckStopIds",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "Number[]",
            "size": "0 – 9999",
            "optional": false,
            "field": "truckStopIds.ids",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "Boolean",
            "optional": false,
            "field": "closest",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "Object",
            "optional": false,
            "field": "alternateClosest",
            "description": ""
          },
          {
            "group": "OneOf",
            "type": "<a href=\"#api-Custom_types-ObjectPlace\">Place</a>",
            "optional": false,
            "field": "alternateClosest.alternateOrigin",
            "description": ""
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Flash\"",
              "\"Highlight\""
            ],
            "optional": true,
            "field": "enhancements",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..8",
            "optional": true,
            "field": "posterDisplayName",
            "description": ""
          }
        ]
      }
    },
    "filename": "./src/main/java/hello/models/AssetPostModel.java",
    "groupTitle": "Custom_types",
    "name": "ObjectTruckstops"
  }
] });
