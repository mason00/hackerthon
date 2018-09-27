const escape = require("html-escape");

exports.NewUserHtml = escape(`
<div class="row mt-1">
<div class="col">
<small>
Buy now, pay later. Interest free with<button type="button" class="btn btn-link btn-zippay pl-1 py-1" data-toggle="modal" data-target="#zippay-modal">
<span class="img-zippay" title="ZipPay"></span><small class="align-text-top">More&nbsp;Info</small>
</button>
</small>
</div>
</div>
`)