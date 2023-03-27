
db.createCollection( 'user', {validator: {$jsonSchema: {bsonType: 'object',title:'user',required: [         'email',          'password',          'username',          'birthdate',          'gender',          'country',          'postalcode',          'type',          'playlists',          'artistsfollowed',          'favouritealbums',          'favouritesongs'],properties: {email: {bsonType: 'string'},password: {bsonType: 'string'},username: {bsonType: 'string'},birthdate: {bsonType: 'date'},gender: {bsonType: 'date'},country: {bsonType: 'string'},postalcode: {bsonType: 'string'},type: {enum: 'FREE','PREMIUM'},subscription: {bsonType: 'objectId'},playlists: {bsonType: 'array',items: {bsonType: 'objectId'}},artistsfollowed: {bsonType: 'array',items: {bsonType: 'objectId'}},favouritealbums: {bsonType: 'array',items: {bsonType: 'objectId'}},favouritesongs: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      }});  