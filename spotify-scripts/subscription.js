
db.createCollection( 'subscription', {validator: {$jsonSchema: {bsonType: 'object',title:'subscription',required: [         'startingdate',          'renewaldate',          'paymentmethod',          'payments'],properties: {startingdate: {bsonType: 'date'},renewaldate: {bsonType: 'date'},paymentmethod: {bsonType: 'object',
title:'object',properties: {creditcard: {bsonType: 'object',
title:'object',required: [         'cardnumber',          'expiringdate',          'CVV'],properties: {cardnumber: {bsonType: 'string'},expiringdate: {bsonType: 'date'},CVV: {bsonType: 'date'}}},paypal: {bsonType: 'object',
title:'object',required: [         'username'],properties: {username: {bsonType: 'string'}}}}},payments: {bsonType: 'array',items: {
title:'object',required: [         'orderid',          'paymentdate',          'totalamount'],properties: {orderid: {bsonType: 'string'},paymentdate: {bsonType: 'date'},totalamount: {bsonType: 'double'}}}}}         }      }});  