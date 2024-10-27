import { Webhook } from "svix";
import userModel from "../models/usermodels.js";

const clerkwebHooks = async (req, res) => {
    try {
        console.log("Received request:", req.body);
        console.log("Headers received:", req.headers);

        const { headers, body } = req;

        // Check for required headers
        if (!headers["svix-id"] || !headers["svix-timestamp"] || !headers["svix-signature"]) {
            return res.status(400).json({ success: false, message: "Missing required headers" });
        }

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(JSON.stringify(body), {
            "svix-id": headers["svix-id"],
            "svix-timestamp": headers["svix-timestamp"],
            "svix-signature": headers["svix-signature"]
        });

        const { data, type } = body;
        console.log("Webhook verified. Type:", type, "Data:", data);

        if (!data) {
            return res.status(400).json({ success: false, message: "Invalid data" });
        }

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0]?.email_address || null,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                };
                try {
                    console.log("Creating user:", userData);
                    await userModel.create(userData);
                    return res.json({ success: true, message: "User created" });
                } catch (dbError) {
                    console.error("Database error while creating user:", dbError);
                    return res.status(500).json({ success: false, message: "Database error" });
                }
            }
            // Handle other cases similarly...
            default:
                return res.status(400).json({ success: false, message: "Unknown event type" });
        }

    } catch (error) {
        console.error("Error in clerkwebHooks:", error); // Log full error
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { clerkwebHooks };
