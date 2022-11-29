import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import { ContactFormInputs } from "../contact";
import { addEnquiry } from "../../services/fire";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    addEnquiry(name, email, message);
    res.status(200).json({ message: "Successful" });
  } else {
    res.status(200).json({ message: "John Doe" });
  }
}
