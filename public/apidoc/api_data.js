define({ "api": [
  {
    "type": "post",
    "url": "api/booking/create",
    "title": "create booking",
    "name": "createEvent",
    "group": "Booking",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "carId",
            "description": "<p>carId for car reference</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId for user reference</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>date of booking</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of Booking (0|1)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n\"carId\":\"4\",\n\"userId\":1,\n\"bookingDate\":\"12-04-2021\",\n\"status\":0|1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Booking Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "carId",
            "description": "<p>id of car</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Booking status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n   \"carId\": 4,\n   \"userId\": 1,\n   \"status\": 1,\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"userId\":\"User id field is required\",\n\"status\":\"status field is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Booking date</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          }
        ]
      }
    },
    "filename": "src/routes/booking.routes.js",
    "groupTitle": "Booking"
  },
  {
    "type": "delete",
    "url": "api/Booking/delete/:id",
    "title": "delete Booking by id",
    "name": "delete",
    "group": "Booking",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Booking id is required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "{\n \"data\":\"Booking Deleted Successfully.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message after successful deletion</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"id params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Booking with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/booking.routes.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "api/booking/:id",
    "title": "show booking by Id",
    "name": "getBooking",
    "group": "Booking",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>booking id is required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n    \"carId\": 4,\n   \"userId\": 1,\n   \"status\": 1,\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects",
            "optional": false,
            "field": "Object",
            "description": "<p>object of Booking</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Booking with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/booking.routes.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "api/booking/list",
    "title": "show all Bookings",
    "name": "list",
    "group": "Booking",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "[{\n    \"id\": 1,\n    \"carId\": 3,\n    \"bookingDate\": \"2021-01-05T07:01:49.644Z\"\n   \"userId\": 1,\n   \"status\": 1,\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null  }]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "Bookings",
            "description": "<p>Array of bookings</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          }
        ]
      }
    },
    "filename": "src/routes/booking.routes.js",
    "groupTitle": "Booking"
  },
  {
    "type": "put",
    "url": "api/Booking/update/:id",
    "title": "update Booking",
    "name": "update",
    "group": "Booking",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Booking of the Booking</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the Booking</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Booking</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Status of Booking (0|1)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n\"title\":\"name\",\n\"userId\":1,\n\"description\":\"description\",\n\"status\":0|1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n    \"title\": \"title of the Booking\",\n   \"description\": \"description of the Booking\",\n   \"userId\": 1,\n   \"status\": 1,\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Booking",
            "description": "<p>Booking object after updation</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"data\":\"id params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"data\":\"Booking with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/booking.routes.js",
    "groupTitle": "Booking"
  },
  {
    "type": "post",
    "url": "api/car/create",
    "title": "create car",
    "name": "create",
    "group": "Car",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name for car</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>fdescription for car</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "plateNumber",
            "description": "<p>plate number of car</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n\"name\":\"bmw\",\n\"description\":\"car description\",\n\"plateNumber\":\"ww-2\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Car Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of car</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of car</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plateNumber",
            "description": "<p>plate number of car</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n   \"name\": \"bmw\",\n   \"description\": \"car description\",\n   \"plateNumber\": \"ww-2\",\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"name\":\"Naame field is is required\",\n\"description\":\"description field is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "car",
            "description": "<p>sample</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          }
        ]
      }
    },
    "filename": "src/routes/car.routes.js",
    "groupTitle": "Car"
  },
  {
    "type": "delete",
    "url": "api/car/delete/:id",
    "title": "delete car by id",
    "name": "delete",
    "group": "Car",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>car id is required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "{\n \"data\":\"car Deleted Successfully.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message after successful deletion</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"id params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"car with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/car.routes.js",
    "groupTitle": "Car"
  },
  {
    "type": "get",
    "url": "api/car/:id",
    "title": "show car by Id",
    "name": "getCar",
    "group": "Car",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>car id is required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response body",
          "content": "{\n \"data\": {\n  \"id\": 1,\n    \"name\": \"bmw\",\n    \"description\": \"anything\"\n    \"plateNumber\": \"12wr\",\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects",
            "optional": false,
            "field": "Object",
            "description": "<p>of Car</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Car with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/car.routes.js",
    "groupTitle": "Car"
  },
  {
    "type": "get",
    "url": "api/car/list",
    "title": "show all cars",
    "name": "list",
    "group": "Car",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "[{\n    \"id\": 1,\n    \"name\": \"bmw\",\n    \"description\": \"anything\"\n    \"plateNumber\": \"12wr\",\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null  }]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "Cars",
            "description": "<p>Array of Cars</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          }
        ]
      }
    },
    "filename": "src/routes/car.routes.js",
    "groupTitle": "Car"
  },
  {
    "type": "put",
    "url": "api/car/update/:id",
    "title": "update Car",
    "name": "update",
    "group": "Car",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of car</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of car</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plateNumber",
            "description": "<p>number plate of car</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n\"name\":\"name\",\n\"description\":\"description\",\n\"plateNumber\":\"ww-2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n    \"name\": \"name\",\n   \"description\": \"description\",\n   \"plateNumber\": 1,\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Car",
            "description": "<p>object after updation</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"data\":\"id params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"data\":\"Car with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/car.routes.js",
    "groupTitle": "Car"
  },
  {
    "type": "post",
    "url": "api/modal/create",
    "title": "create modal",
    "name": "createEvent",
    "group": "Modal",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "modalId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n\"name\":\"4\",\n\"description\":1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of modal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>of modal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n   \"name\": 4,\n   \"description\": 1,\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"name\":\"name field is required\",\n\"description\":\"description field is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Modal",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          }
        ]
      }
    },
    "filename": "src/routes/modal.routes.js",
    "groupTitle": "Modal"
  },
  {
    "type": "delete",
    "url": "/modal/delete/:id",
    "title": "delete modal by id",
    "name": "delete",
    "group": "Modal",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Modal id is required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "{\n \"data\":\"Modal Deleted Successfully.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message after successful deletion</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"id params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Booking with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/modal.routes.js",
    "groupTitle": "Modal"
  },
  {
    "type": "get",
    "url": "api/modal/:id",
    "title": "show modal by Id",
    "name": "getModal",
    "group": "Modal",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>modal id is required</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n    \"name\": 4,\n   \"description\": \"modal 1\",\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects",
            "optional": false,
            "field": "Object",
            "description": "<p>of Modal</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"error\":\"Modal with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/modal.routes.js",
    "groupTitle": "Modal"
  },
  {
    "type": "get",
    "url": "api/modal/list",
    "title": "show all modals",
    "name": "list",
    "group": "Modal",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "[{\n    \"id\": 1,\n    \"name\": \"model 1\",\n    \"description\": \"description\"\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null  }]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "Modals",
            "description": "<p>Array of Modals</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          }
        ]
      }
    },
    "filename": "src/routes/modal.routes.js",
    "groupTitle": "Modal"
  },
  {
    "type": "put",
    "url": "api/modal/update/:id",
    "title": "update MOdal",
    "name": "update",
    "group": "Modal",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of modal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the modal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body:",
          "content": "{\n\"name\":\"name\",\n\"description\":\"description\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Body",
          "content": "{\n \"data\": {\n    \"id\": 5,\n    \"name\": \"name  of the modal\",\n   \"description\": \"description of the modal\",\n   \"updatedAt\": \"2021-01-05T07:01:49.644Z\",\n   \"createdAt\": \"2021-01-05T07:01:49.644Z\",\n   \"deletedAt\": null\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Modal",
            "description": "<p>object after updation</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n\"message\":\"access denied\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"data\":\"id params is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response Body:",
          "content": "{\n\"data\":\"Modal with this id not found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization is missing or invalid</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>params id must be required</p>"
          }
        ]
      }
    },
    "filename": "src/routes/modal.routes.js",
    "groupTitle": "Modal"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "All Users",
    "name": "AllUser",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Authentication Token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>True if there is some error, otherwise False.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response Success Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "data[]",
            "optional": false,
            "field": "data",
            "description": "<p>Response data which includes Users object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"error\": false,\n      \"message\": \"Request completed and data retrieved.\",\n      \"data\": [\n        {\n          \"id\": 8,\n          \"name\": \"test12\",\n          \"email\": \"test1test.com\",\n          \"password\": \"$2b$10$lYnjHWdz6WZVCt0v76l.Z.T7kS5nlkPu0QLa64dID3Xlz5ZtQD0de\",\n          \"createdAt\": \"2020-12-30T10:03:21.376Z\",\n          \"updatedAt\": \"2020-12-30T10:03:21.376Z\",\n          \"deletedAt\": null\n      },\n      {\n          \"id\": 9,\n          \"name\": \"test12\",\n          \"email\": \"test1@test.com\",\n          \"password\": \"$2b$10$K3RxHq2Tz0uDlupbfRiX0.1QKDmlLW2K.vJl.mZjABDb.sIDcjcLe\",\n          \"createdAt\": \"2020-12-30T10:05:46.634Z\",\n          \"updatedAt\": \"2020-12-30T10:05:46.634Z\",\n          \"deletedAt\": null\n      },\n      {\n          \"id\": 12,\n          \"name\": \"test12\",\n          \"email\": \"test221@test.com\",\n          \"password\": \"$2b$10$pDZQeyZHzzAWtZyLd41Xo.kfaFOGxOYhUi2YqsCMSk0tPREBaRFi2\",\n          \"createdAt\": \"2020-12-30T10:09:32.102Z\",\n          \"updatedAt\": \"2020-12-30T10:09:32.102Z\",\n          \"deletedAt\": null\n      },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>True if there is some error, otherwise False.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response Success Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "data[]",
            "optional": false,
            "field": "data",
            "description": "<p>Response data which includes User object.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"error\": false,\n     \"message\": \"User is logged-in\",\n     \"data\": {\n     \"id\": 36,\n     \"name\": \"testuser\",\n     \"email\": \"testuser1234@test.com\",\n     \"password\": \"$2b$10$1rBkiHgEkvMSRfEiPPfc9e0lOEJGdC/Un1xPSUrX3JlJ0D.FQTKKu\",\n     \"updatedAt\": \"2021-01-05T06:41:41.230Z\",\n     \"createdAt\": \"2021-01-05T06:41:41.230Z\",\n     \"deletedAt\": null\n    },\n    \"token\": \"NDkzfQ.M_CjDmTYnVqhNd9c5bt7plrAZ_Iv4s0k5wkQJRbLlT4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n        {\n            \"error\": true,\n            \"message\": {\n            \"errors\": [\n              {\n            \"value\": \"1231\",\n            \"msg\": \"Invalid value\",\n            \"param\": \"password\",\n            \"location\": \"body\"\n            }\n       ]\n   },\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  }
] });
