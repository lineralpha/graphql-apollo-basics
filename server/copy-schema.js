import fs from "fs";
import path from "path";

const src = path.join("./src", "schema.graphql");
const dst = path.join("./dist", "schema.graphql");

console.log("src = %s", path.resolve(src));
console.log("dst = %s", path.resolve(dst));

fs.copyFileSync(src, dst);
console.log("schema.graphql copied to dist folder");
