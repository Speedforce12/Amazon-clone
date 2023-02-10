import connectMongo from "@/lib/connection";
import Users from "@/Model/users";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({ error: "No Data was provided" });
    }

    const { username, email, password } = req.body;

    const existingUser = await Users.findOne({ email });

    //   check for existing user
    if (existingUser) {
      return res
        .status(422)
        .json({error: "User already exists" });
    }

    //   create a new user
    const NewUser = await Users.create({
      email,
      username,
      password: await hash(password, 16),
    });

    res.status(201).json({ success: true, data: NewUser });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
