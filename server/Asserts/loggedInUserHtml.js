const escape = require("html-escape");
const format = require("string-template");

exports.LoggedInUserHtml = function (balance) {
    return escape(format(`
<div class="row mt-1">
<div class="col">
<small>
<button type="button" class="btn btn-link btn-zippay pl-1 py-1" data-toggle="modal" data-target="#zippay-modal">
<span class="img-zippay" title="ZipPay"></span>
<span>{balance}</span>
</button>
</small>
</div>
</div>
`, { balance }));
};
