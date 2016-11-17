
/**
 * Default middleware
 *
 * This middleware exists only for be able to
 * set the middleware configuration option.
 * It will simply dispatch the request
 * to the next middleware in the chain.
 *
 * @param req
 * @param res
 * @param next
 */
module.exports = function (req, res, next) {
  next();
}