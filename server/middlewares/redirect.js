const redirect = {};

redirect.ifLoggedIn = (route) =>
<<<<<<< HEAD
  (req, res, next) => (req.user ? res.redirect(route) : next());

redirect.ifNotLoggedIn = (route = '/login') =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

redirect.ifNotAuthorized = (route) =>
  (req, res, next) => (req.user.username !== req.params.username ? res.redirect(route) : next());
=======
	(req, res, next) => (req.user ? res.redirect(route) : next());

redirect.ifNotLoggedIn = (route = '/login') =>
	(req, res, next) => (req.user ? next() : res.redirect(route));
>>>>>>> 52225259e60746a1fa75e7892b509cac6f7b637b

module.exports = redirect;