const express = require("express");
const router = express.Router();

const CategoryRouter = require('./Category.route');
const ProblemRouter = require('./Problem.route');
const ProfileRouter = require('./Profile.route');
const SolutionRouter = require('./Solution.route');
const StatusRouter = require('.//Status.route');
const TagRouter = require('.//Tag.route');
const UserRouter = require('./User.route');
const UserSolutionRouter = require('./UserSolution.route');

router.use('/category', CategoryRouter);
router.use('/problem', ProblemRouter);
router.use('/profile', ProfileRouter);
router.use('/solution', SolutionRouter);
router.use('/status', StatusRouter);
router.use('/tag', TagRouter);
router.use('/user', UserRouter);
router.use('/user-solution', UserSolutionRouter);

module.exports = router;