require("dotenv").config();

console.log(
  `My name is ${process.env.MY_NAME}, I live in ${process.env.MY_CITY}, I speak ${process.env.MY_LANGUAGE}`
);
