const express = require('express');
const router = express.Router();

const TournamentMatchesController = require('../controllers/tournamentmatches.controller');
const Auth = require('../middleware/auth');

router.post('/', TournamentMatchesController.createTournamentMatches);
router.get('/', TournamentMatchesController.getTournamentMatches);
router.get('/future',  TournamentMatchesController.getFutureTournamentMatches);
router.get('/past',  TournamentMatchesController.getPastTournamentMatches);
router.get('/present', TournamentMatchesController.getPresentTournamentMatches);
router.get('/:id',  TournamentMatchesController.getTournamentMatchesById);
router.patch('/:id',  TournamentMatchesController.updateTournamentMatches);
router.delete('/',  TournamentMatchesController.deleteTournamentMatches);

router.post('/', Auth.verifyToken, TournamentMatchesController.createTournamentMatches);
router.get('/', Auth.verifyToken, TournamentMatchesController.getTournamentMatches);
router.get('/future', Auth.verifyToken, TournamentMatchesController.getFutureTournamentMatches);
router.get('/past', Auth.verifyToken, TournamentMatchesController.getPastTournamentMatches);
router.get('/present', Auth.verifyToken, TournamentMatchesController.getPresentTournamentMatches);
router.get('/:id', Auth.verifyToken, TournamentMatchesController.getTournamentMatchesById);
router.patch('/:id', Auth.verifyToken, TournamentMatchesController.updateTournamentMatches);
router.delete('/', Auth.verifyToken, TournamentMatchesController.deleteTournamentMatches);

module.exports = router;