import { Request, Response } from "express"
import { getDataUrl, vehiclesBaseUrl } from "./services/services";



/*------Vehicles------*/
export const getVehicles = async (req: Request, res: Response): Promise<void> => {
    const data = await getDataUrl(vehiclesBaseUrl);
    res.json(data)
}

export const getVehiclesById = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const data = await getDataUrl(`${vehiclesBaseUrl}/${id}`);
    res.json(data)
}