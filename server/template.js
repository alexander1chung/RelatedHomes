const serialize = require('serialize-javascript');

const template = (initialData) => (
    `<!DOCTYPE html>
<html>
    <head>
    <title>Relax.db</title>
    <script>window.__INITIAL_DATA__ = ${serialize(initialData)}</script>
    <script src="/bundle.js" defer></script>
    </head>
    <body>
    <div id="RelatedHomesModule"></div>
    <script src="bundle.js"></script>
    </body>
</html>
`
)
module.exports = template;