import { Webhook } from "svix";
import userModel from "../models/usermodels.js"; // Import your user model

const clerkwebHooks = async (req, res) => {
    try {
        const { "svix-id": svixId, "svix-timestamp": svixTimestamp, "svix-signature": svixSignature } = req.headers;

        if (!svixId || !svixTimestamp || !svixSignature) {
            return res.status(400).json({
                success: false,
                message: "Missing required webhook headers: svix-id, svix-timestamp, or svix-signature"
            });
        }

        // Create a new Webhook object to verify the request
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": svixId,
            "svix-timestamp": svixTimestamp,
            "svix-signature": svixSignature
        });

        const { data, type } = req.body;

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
                await userModel.create(userData);
                return res.json({ success: true, message: "User created" });
            }
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0]?.email_address || null,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                };
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                return res.json({ success: true, message: "User updated" });
            }
            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });
                return res.json({ success: true, message: "User deleted" });
            }
            default:
                return res.status(400).json({ success: false, message: "Unknown event type" });
        }

    } catch (error) {
        console.error("Error in clerkwebHooks:", error); // Log full error
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { clerkwebHooks };
