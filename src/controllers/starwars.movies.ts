import { Request, Response } from "express"
import { getDataUrl, movieBaseUrl } from "./services/services";


/*------Movies------*/
export const getMovies = async (req: Request, res: Response): Promise<void> => {
    const data = await getDataUrl(movieBaseUrl)
    res.json(data)
}

export const getMovieById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await getDataUrl(`${movieBaseUrl}/${id}`);
    res.json(data);
}
