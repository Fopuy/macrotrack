import {prisma} from '../prisma.js'
import type { Request, Response } from 'express'

export async function getMeal(req:Request, res:Response){
    const meals = await prisma.meal.findMany();
    res.json(meals);
    console.log(meals)
}