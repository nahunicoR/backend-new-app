import { Request, Response } from "express"
import { getDataUrl, planetBaseUrl } from "./services/services";


/*------Planets-----*/
export const getPlanets = async (req: Request, res: Response): Promise<void> => {
    const data = await getDataUrl(planetBaseUrl)
    res.json(data)
}

export const getPlanetById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await getDataUrl(`${planetBaseUrl}/${id}`)
    res.json(data)
}
