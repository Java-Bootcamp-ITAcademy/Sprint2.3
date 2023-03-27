/******** User collection  **********/
db.createCollection('user', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'user',
      required: ['email', 'password', 'username', 'birthdate', 'gender', 'country', 'postalcode', 'ownchannel', 'subscribedchannel', 'playlist'],
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
          enum: 'M',
          'F'
        },
        country: {
          bsonType: 'string'
        },
        postalcode: {
          bsonType: 'string'
        },
        ownchannel: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        subscribedchannel: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        playlist: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

/******** Video collection  **********/
db.createCollection('video', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'video',
      required: ['title', 'description', 'size', 'filename', 'length', 'thumbnail', 'numberplays', 'numberlikes', 'numberdislikes', 'status', 'datePublication', 'userauthor', 'tag', 'userslikes', 'usercomments'],
      properties: {
        title: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        size: {
          bsonType: 'double'
        },
        filename: {
          bsonType: 'string'
        },
        length: {
          bsonType: 'date'
        },
        thumbnail: {
          bsonType: ['double', 'string', 'array', 'binData', 'undefined', 'objectId', 'bool', 'date', 'enum', 'null', 'regex', 'dbPointer', 'javascript', 'symbol', 'javascriptWithScope', 'int', 'timestamp', 'long', 'decimal', 'minKey', 'maxKey']
        },
        numberplays: {
          bsonType: 'long'
        },
        numberlikes: {
          bsonType: 'long'
        },
        numberdislikes: {
          bsonType: 'long'
        },
        status: {
          enum: 'PUBLIC',
          'HIDDEN',
          'PRIVATE'
        },
        datePublication: {
          bsonType: 'date'
        },
        userauthor: {
          bsonType: 'objectId'
        },
        tag: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        },
        userslikes: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['userid', 'likedislike', 'dateoflike'],
            properties: {
              userid: {
                bsonType: 'objectId'
              },
              likedislike: {
                enum: 'LIKE',
                'DISLIKE'
              },
              dateoflike: {
                bsonType: 'date'
              }
            }
          }
        },
        usercomments: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['userid', 'comment', 'commentslikes', 'dateofcomment'],
            properties: {
              userid: {
                bsonType: 'objectId'
              },
              comment: {
                bsonType: 'string'
              },
              commentslikes: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  required: ['userid', 'likedislike', 'dateoflike'],
                  properties: {
                    userid: {
                      bsonType: 'objectId'
                    },
                    likedislike: {
                      enum: 'LIKE',
                      'DISLIKE'
                    },
                    dateoflike: {
                      bsonType: 'date'
                    }
                  }
                }
              },
              dateofcomment: {
                bsonType: 'date'
              }
            }
          }
        }
      }
    }
  }
});

/******** Channel collection  **********/
db.createCollection('channel', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'channel',
      required: ['name', 'description', 'dateofcreation', 'videos'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        dateofcreation: {
          bsonType: 'date'
        },
        videos: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
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
      required: ['name', 'creationdate', 'status', 'videos'],
      properties: {
        name: {
          bsonType: 'string'
        },
        creationdate: {
          bsonType: 'date'
        },
        status: {
          enum: 'PUBLIC',
          'PRIVATE'
        },
        videos: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});
