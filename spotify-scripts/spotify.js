/******** User collection  **********/
db.createCollection('user', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'user',
      required: ['email', 'password', 'username', 'birthdate', 'gender', 'country', 'postalcode', 'type', 'playlists', 'artistsfollowed', 'favouritealbums', 'favouritesongs'],
      properties: {
        email: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        username: {
          bsonType: 'string'
        },
        birthdate: {
          bsonType: 'date'
        },
        gender: {
          bsonType: 'date'
        },
        country: {
          bsonType: 'string'
        },
        postalcode: {
          bsonType: 'string'
        },
        type: {
          enum: 'FREE',
          'PREMIUM'
        },
        subscription: {
          bsonType: 'objectId'
        },
        playlists: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        artistsfollowed: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        favouritealbums: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        favouritesongs: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

/******** Subscription collection  **********/
db.createCollection('subscription', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'subscription',
      required: ['startingdate', 'renewaldate', 'paymentmethod', 'payments'],
      properties: {
        startingdate: {
          bsonType: 'date'
        },
        renewaldate: {
          bsonType: 'date'
        },
        paymentmethod: {
          bsonType: 'object',
          title: 'object',
          properties: {
            creditcard: {
              bsonType: 'object',
              title: 'object',
              required: ['cardnumber', 'expiringdate', 'CVV'],
              properties: {
                cardnumber: {
                  bsonType: 'string'
                },
                expiringdate: {
                  bsonType: 'date'
                },
                CVV: {
                  bsonType: 'date'
                }
              }
            },
            paypal: {
              bsonType: 'object',
              title: 'object',
              required: ['username'],
              properties: {
                username: {
                  bsonType: 'string'
                }
              }
            }
          }
        },
        payments: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['orderid', 'paymentdate', 'totalamount'],
            properties: {
              orderid: {
                bsonType: 'string'
              },
              paymentdate: {
                bsonType: 'date'
              },
              totalamount: {
                bsonType: 'double'
              }
            }
          }
        }
      }
    }
  }
});

/******** Playlist collection  **********/
db.createCollection('playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'playlist',
      required: ['name', 'numbersongs', 'datecreation', 'status', 'songs'],
      properties: {
        name: {
          bsonType: 'string'
        },
        numbersongs: {
          bsonType: 'int'
        },
        datecreation: {
          bsonType: 'date'
        },
        status: {
          enum: 'ACTIVE',
          'DELETED'
        },
        deletiondate: {
          bsonType: 'date'
        },
        songs: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['idsong', 'addedby', 'dateaddition'],
            properties: {
              idsong: {
                bsonType: 'objectId'
              },
              addedby: {
                bsonType: 'objectId'
              },
              dateaddition: {
                bsonType: 'date'
              }
            }
          }
        }
      }
    }
  }
});

/******** Song collection  **********/
db.createCollection('song', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'song',
      required: ['title', 'length', 'timesplayed'],
      properties: {
        title: {
          bsonType: 'string'
        },
        length: {
          bsonType: 'timestamp'
        },
        timesplayed: {
          bsonType: 'int'
        }
      }
    }
  }
});

/******** Album collection  **********/
db.createCollection('album', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'album',
      required: ['title', 'yearreleased', 'cover', 'songs'],
      properties: {
        title: {
          bsonType: 'string'
        },
        yearreleased: {
          bsonType: 'date'
        },
        cover: {
          bsonType: ['double', 'string', 'array', 'binData', 'undefined', 'objectId', 'bool', 'date', 'enum', 'null', 'regex', 'dbPointer', 'javascript', 'symbol', 'javascriptWithScope', 'int', 'timestamp', 'long', 'decimal', 'minKey', 'maxKey']
        },
        songs: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

/******** Artist collection  **********/
db.createCollection('artist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'artist',
      required: ['name', 'image', 'albums', 'relatedartists'],
      properties: {
        name: {
          bsonType: 'string'
        },
        image: {
          bsonType: ['double', 'string', 'array', 'binData', 'undefined', 'objectId', 'bool', 'date', 'enum', 'null', 'regex', 'dbPointer', 'javascript', 'symbol', 'javascriptWithScope', 'int', 'timestamp', 'long', 'decimal', 'minKey', 'maxKey']
        },
        albums: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        relatedartists: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});
