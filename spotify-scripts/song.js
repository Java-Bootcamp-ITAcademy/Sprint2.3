
db.createCollection( 'song', {validator: {$jsonSchema: {bsonType: 'object',title:'song',required: [         'title',          'length',          'timesplayed'],properties: {title: {bsonType: 'string'},length: {bsonType: 'timestamp'},timesplayed: {bsonType: 'int'}}         }      }});  