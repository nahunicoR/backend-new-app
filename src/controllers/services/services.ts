import { Welcome, Result } from "../../interfaces/Istarwars";

export const getDataUrl = async (url: string): Promise<Result> => {
    const dataFromUrl = await fetch(url);
    const data = await dataFromUrl.json()
    return data.results
}

export const movieBaseUrl = "https://swapi.py4e.com/api/films"

export const planetBaseUrl = "https://swapi.py4e.com/api/planets"

export const starshipsBaseUrl = "https://swapi.py4e.com/api/starships"

export const peopleBaseUrl = "https://swapi.py4e.com/api/people"

export const vehiclesBaseUrl = "https://swapi.py4e.com/api/vehicles"

export const speciesBaseUrl = "https://swapi.py4e.com/api/species"