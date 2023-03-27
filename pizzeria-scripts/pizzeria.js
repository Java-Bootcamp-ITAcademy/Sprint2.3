/********* Customer collection ********/
db.createCollection('customer', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customer',
      required: ['name', 'surname', 'contact'],
      properties: {
        name: {
          bsonType: 'string'
        },
        surname: {
          bsonType: 'string'
        },
        contact: {
          bsonType: 'object',
          title: 'object',
          required: ['phonenumber', 'address'],
          properties: {
            phonenumber: {
              bsonType: 'string'
            },
            address: {
              bsonType: 'object',
              title: 'object',
              required: ['street', 'number', 'city', 'postalcode', 'country'],
              properties: {
                street: {
                  bsonType: 'string'
                },
                number: {
                  bsonType: 'string'
                },
                floor: {
                  bsonType: 'string'
                },
                door: {
                  bsonType: 'string'
                },
                city: {
                  bsonType: 'string'
                },
                postalcode: {
                  bsonType: 'string'
                },
                country: {
                  bsonType: 'string'
                }
              }
            }
          }
        }
      }
    }
  }
});

/********* Pizza collection ********/
db.createCollection('pizza', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'pizza',
      required: ['name', 'description', 'image', 'price', 'pizzatype'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        image: {
          bsonType: ['double', 'string', 'array', 'binData', 'undefined', 'objectId', 'bool', 'date', 'enum', 'null', 'regex', 'dbPointer', 'javascript', 'symbol', 'javascriptWithScope', 'int', 'timestamp', 'long', 'decimal', 'minKey', 'maxKey']
        },
        price: {
          bsonType: 'double'
        },
        pizzatype: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

/********* Hamburger collection ********/
db.createCollection('hamburger', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'hamburger',
      required: ['name', 'description', 'image', 'price'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        image: {
          bsonType: ['double', 'string', 'array', 'binData', 'undefined', 'objectId', 'bool', 'date', 'enum', 'null', 'regex', 'dbPointer', 'javascript', 'symbol', 'javascriptWithScope', 'int', 'timestamp', 'long', 'decimal', 'minKey', 'maxKey']
        },
        price: {
          bsonType: 'double'
        }
      }
    }
  }
});

/********* Drink collection ********/
db.createCollection('drink', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'drink',
      required: ['name', 'description', 'image', 'price'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        image: {
          bsonType: ['double', 'string', 'array', 'binData', 'undefined', 'objectId', 'bool', 'date', 'enum', 'null', 'regex', 'dbPointer', 'javascript', 'symbol', 'javascriptWithScope', 'int', 'timestamp', 'long', 'decimal', 'minKey', 'maxKey']
        },
        price: {
          bsonType: 'double'
        }
      }
    }
  }
});

/********* Pizzatype collection ********/
db.createCollection('pizzatype', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'pizzatype',
    }
  }
});

/********* Employee collection ********/
db.createCollection('employee', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'employee',
      required: ['name', 'surname', 'NIF', 'position', 'shop'],
      properties: {
        name: {
          bsonType: 'string'
        },
        surname: {
          bsonType: 'string'
        },
        NIF: {
          bsonType: 'string'
        },
        position: {
          enum: 'CUINER',
          'REPARTIDOR'
        },
        shop: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

/********* Order collection ********/
db.createCollection('order', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'order',
      required: ['datetimeorder', 'deliverymethod', 'price', 'employeeorder', 'customer', 'datetimedelivery', 'shop'],
      properties: {
        datetimeorder: {
          bsonType: 'date'
        },
        deliverymethod: {
          enum: 'DELIVERY',
          'PICKUP'
        },
        price: {
          bsonType: 'double'
        },
        pizzas: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        hamburgers: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        drinks: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        employeeorder: {
          bsonType: 'objectId'
        },
        customer: {
          bsonType: 'objectId'
        },
        datetimedelivery: {
          bsonType: 'date'
        },
        shop: {
          bsonType: 'objectId'
        },
        employeedelivery: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

/********* Shop collection ********/
db.createCollection('shop', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'shop',
      required: ['address'],
      properties: {
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'number', 'city', 'postalcode', 'country'],
          properties: {
            street: {
              bsonType: 'string'
            },
            number: {
              bsonType: 'string'
            },
            city: {
              bsonType: 'string'
            },
            postalcode: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});
