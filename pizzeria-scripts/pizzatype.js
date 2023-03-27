
db.createCollection( 'pizzatype', {validator: {$jsonSchema: {bsonType: 'object',title:'pizzatype',         }      }});  