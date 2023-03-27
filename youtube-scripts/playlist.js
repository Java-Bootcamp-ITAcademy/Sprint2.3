
db.createCollection( 'playlist', {validator: {$jsonSchema: {bsonType: 'object',title:'playlist',required: [         'name',          'creationdate',          'status',          'videos'],properties: {name: {bsonType: 'string'},creationdate: {bsonType: 'date'},status: {enum: 'PUBLIC','PRIVATE'},videos: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      }});  