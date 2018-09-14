import * as fs from "fs";
import * as path from "path";

const filepath = path.join(__dirname, "..", "templates", "password-recover.html");

const template = fs.readFileSync(filepath, 'utf8');

const generateTemplete = password => template.replace("{{password}}", password);


export default generateTemplete;
