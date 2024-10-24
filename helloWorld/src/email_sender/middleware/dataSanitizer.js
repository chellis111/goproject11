const perfectExpressSanitizer = require('perfect-express-sanitizer');

const dataSanitizer = (req, res, next) => {
    console.log(req.body);
    const options = { xss: true, noSql: true, sql: true, level: 5 };

    const sanitizedData = perfectExpressSanitizer.sanitize.prepareSanitize(
        req.body,
        options
    );

    req.body = sanitizedData;

    next();
};

module.exports = dataSanitizer; // Export the middleware