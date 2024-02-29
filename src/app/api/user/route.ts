import UserModel from "@/models/User";
import connect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    await connect();
}