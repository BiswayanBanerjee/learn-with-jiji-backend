import supabase from "../config/supabaseClient.js";
import { saveUserQuery, fetchResources } from "../services/resourceService.js";

export const askJiji = async (req, res) => {
  try {
    const { query } = req.body;

    await saveUserQuery(query);

    const resources = await fetchResources();

    const answer = `Here is a simple explanation for: ${query}`;

    return res.status(200).json({
      success: true,
      data: {
        answer,
        resources
      }
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

