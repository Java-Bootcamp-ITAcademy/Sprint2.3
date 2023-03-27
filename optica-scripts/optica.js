
/******** Client collection  **********/
db.createCollection('Client', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Client',
      required: ['name', 'contact', 'registeringdate', 'clientrecommended'],
      properties: {
        name: {
          bsonType: 'string'
        },
        contact: {
          bsonType: 'object',
          title: 'object',
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
            },
            phonenumber: {
              bsonType: 'string'
            },
            email: {
              bsonType: 'string'
            }
          }
        },
        registeringdate: {
          bsonType: 'date'
        },
        clientrecommended: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

/******** Provider collection  **********/
db.createCollection('provider', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'provider',
      required: ['name', 'contact', 'NIF'],
      properties: {
        name: {
          bsonType: 'string'
        },
        contact: {
          bsonType: 'object',
          title: 'object',
          required: ['address', 'phonenumber', 'email'],
          properties: {
            address: {
              bsonType: 'object',
              title: 'object',
              required: ['street', 'number', 'floor', 'door', 'city', 'postalcode', 'country'],
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
            },
            phonenumber: {
              bsonType: 'string'
            },
            email: {
              bsonType: 'string'
            },
            FAX: {
              bsonType: 'string'
            }
          }
        },
        NIF: {
          bsonType: 'string'
        }
      }
    }
  }
});

/******** Soldglasses collection  **********/
db.createCollection('soldglasses', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'soldglasses',
      required: ['brand', 'frame', 'glasscolour', 'price', 'provider', 'seller', 'client'],
      properties: {
        brand: {
          bsonType: 'string'
        },
        leftdioptries: {
          bsonType: 'double'
        },
        rightdioptries: {
          bsonType: 'double'
        },
        frame: {
          enum: 'PASTA',
          'FLOTANT',
          'METALLICA'
        },
        glasscolour: {
          bsonType: 'string'
        },
        price: {
          bsonType: 'double'
        },
        provider: {
          bsonType: 'objectId'
        },
        seller: {
          bsonType: 'objectId'
        },
        client: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

/******** Seller collection  **********/
db.createCollection('seller', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'seller',
      required: ['name', 'NIF'],
      properties: {
        name: {
          bsonType: 'string'
        },
        NIF: {
          bsonType: 'string'
        }
      }
    }
  }
});
