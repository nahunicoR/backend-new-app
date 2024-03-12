import { Request, Response } from "express"
import { getDataUrl, speciesBaseUrl } from "./services/services";


/*------Species-------*/
export const getSpecies = async (req: Request, res: Response): Promise<void> => {
    const data = await getDataUrl(speciesBaseUrl);
    res.json(data)
}

export const getSpecieById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const data = await getDataUrl(`${speciesBaseUrl}/${id}`);
    res.json(data);
}