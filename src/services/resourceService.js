import supabase from "../config/supabaseClient.js";

export const saveUserQuery = async (query) => {
  const { data, error } = await supabase
    .from("queries")
    .insert([{ query_text: query }]);

  if (error) throw error;
  return data;
};

export const fetchResources = async () => {
  const { data, error } = await supabase
    .from("resources")
    .select("*");

  if (error) throw error;
  return data;
};
