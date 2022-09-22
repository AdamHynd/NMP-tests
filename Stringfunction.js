const colors = require("colors/safe");
const figlet = require("figlet")

const strFunc = () => {
    console.log(colors.rainbow ("I'ts raining outside"));

};

const title = () => {
    figlet("Hello", (err, data) => {
        console.log(colors.rainbow(data));
    });
};

module.exports = {
    strFunc,
    title,
};