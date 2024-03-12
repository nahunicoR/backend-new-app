import { Request, Response } from "express"
import { getDataUrl, peopleBaseUrl } from "./services/services";


/*------Characters----*/
export const getCharacters = async (req: Request, res: Response) => {
    const data = await getDataUrl(peopleBaseUrl)
    res.json(data)
}

export const getCharacterById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    const data = await getDataUrl(`${peopleBaseUrl}/${id}`)
    res.json(data)
}
