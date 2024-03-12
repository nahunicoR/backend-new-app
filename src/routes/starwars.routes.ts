import express from 'express'

import {
    getCharacterById,
    getCharacters,
    getMovieById,
    getMovies,
    getSpecieById,
    getSpecies,
    getVehicles,
    getPlanets,
    getPlanetById
} from '../controllers/index.starwars'

const router = express.Router();

/*------Movies------*/
router.get('/movies', getMovies)
router.get('/movies/:id', getMovieById)


/*------Planets-----*/
router.get('/world', getPlanets)
router.get('/world/:id', getPlanetById)


/*------Characters----*/
router.get('/characters', getCharacters)
router.get('/characters', getCharacterById)


/*------Vehicles------*/
router.get('/vehicles', getVehicles)
router.get('/vehicles/:id', getCharacterById)


/*------Species-------*/
router.get('/species', getSpecies)
router.get('/species/:id', getSpecieById)


export default router;