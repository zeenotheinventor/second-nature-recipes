import axios from "axios";

/** Recipe URL is Hard coded because this is a quick project. In the real world, this
 * would be parameterized for the environment via a .env file or similar
 */
const RECIPE_URL = "https://www.secondnature.io/api/test-recipes";

export async function loadRecipes() {
  try {
    // call recipes API
    let response = await axios({
      url: RECIPE_URL,
      method: "GET",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.recipes;
  } catch (e) {
    console.log("Failed to load recipes", e);
    throw e;
  }
}
