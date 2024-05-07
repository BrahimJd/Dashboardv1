/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dbyxbhe9kgxkyfj",
    "created": "2024-04-08 16:03:09.253Z",
    "updated": "2024-04-08 16:03:09.253Z",
    "name": "psots",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2sriu9xp",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dbyxbhe9kgxkyfj");

  return dao.deleteCollection(collection);
})
