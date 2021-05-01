// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// API isn't used at the moment, can't really disable it either
// https://github.com/vercel/next.js/discussions/11785
// TO:DO use serverless
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ name: "Jimmy Wei" });
};
