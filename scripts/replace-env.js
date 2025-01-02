const fs = require("fs");
const path = require("path");

const envVariables = Object.keys(process.env)
  .filter((key) => key.startsWith("REACT_APP_"))
  .reduce((env, key) => {
    env[key] = process.env[key];
    return env;
  }, {});

const indexPath = path.join(__dirname, "../build/index.html");
let indexHtml = fs.readFileSync(indexPath, "utf8");

Object.keys(envVariables).forEach((key) => {
  const value = envVariables[key];
  indexHtml = indexHtml.replace(`%${key}%`, value);
});

fs.writeFileSync(indexPath, indexHtml);
console.log("Environment variables injected into index.html");
