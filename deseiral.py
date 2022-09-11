import ccl_chromium_indexeddb
leveldb_folder_path = "./IndexedDB/vector_vector_0.indexeddb.leveldb" # ex)"./IndexedDB (2)/vector_vector_0.indexeddb.leveldb"
blob_folder_path = "./IndexedDB/vector_vector_0.indexeddb.blob" # ex)"./IndexedDB (2)/vector_vector_0.indexeddb.blob"

db = ccl_chromium_indexeddb.IndexedDb(leveldb_folder_path, blob_folder_path)
print(db.global_metadata.db_ids)

for db_id_meta in db.global_metadata.db_ids:
    max_objstore_id = db.get_database_metadata(
        db_id_meta.dbid_no,
        ccl_chromium_indexeddb.DatabaseMetadataType.MaximumObjectStoreId)
    print("---------------------------------------------------------------", db_id_meta.dbid_no)
    if max_objstore_id is None:
        continue
    for obj_store_id in range(1, max_objstore_id + 1):
        for record in db.iterate_records(db_id_meta.dbid_no, obj_store_id, bad_deserializer_data_handler=lambda k, v: print(f"error: {k}{v}")):
            print(f"key: {record.key}{record.value}")
