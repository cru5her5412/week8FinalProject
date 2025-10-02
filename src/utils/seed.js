import { db } from "./dbCon.js";

async function seedDatabases() {
  let response = await db.query(
    "INSERT INTO posts (post_title,post_content,post_image_url,post_category) VALUES ('test', 'test', 'test', 'test')"
  );
}
