const NewUserHtml = require('../Asserts/newUserHtml');
const { LoggedInUserHtml } = require('../Asserts/loggedInUserHtml');
const format = require("string-template");
const escape = require("html-escape")

function GetWidgetData(req, res) {
    const response = 'Hello';
    res.send(response);
}

module.exports = { GetWidgetData }