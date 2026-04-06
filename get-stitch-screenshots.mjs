// Script to download screenshots from Google Stitch projects
// Run with: node get-stitch-screenshots.js

import { stitch } from "@google/stitch-sdk";
import https from "https";
import fs from "fs";
import path from "path";

const API_KEY = process.env.STITCH_API_KEY;
if (!API_KEY) {
  throw new Error("Missing STITCH_API_KEY environment variable");
}
const OUTPUT_DIR = "./images/stitch-projects";

// Configure the SDK with the API key
const { StitchToolClient } = await import("@google/stitch-sdk");
const client = new StitchToolClient({ apiKey: API_KEY });

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve(filepath);
      });
    }).on("error", (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
}

async function main() {
  console.log("Fetching Stitch projects...");

  try {
    // Get all projects
    const projects = await stitch.projects();
    console.log(`Found ${projects.length} projects`);

    for (const project of projects) {
      console.log(`\nProject: ${project.id} (${project.projectId})`);

      try {
        // Get screens for this project
        const screens = await project.screens();
        console.log(`  Found ${screens.length} screens`);

        for (let i = 0; i < screens.length; i++) {
          const screen = screens[i];
          console.log(`  Screen ${i + 1}: ${screen.id}`);

          try {
            // Get screenshot URL
            const imageUrl = await screen.getImage();
            console.log(`    Image URL: ${imageUrl}`);

            if (imageUrl && imageUrl.startsWith("http")) {
              // Download the screenshot
              const filename = `${project.projectId}-screen-${screen.screenId}.png`;
              const filepath = path.join(OUTPUT_DIR, filename);

              console.log(`    Downloading to ${filename}...`);
              await downloadFile(imageUrl, filepath);
              console.log(`    ✅ Downloaded successfully!`);
            }
          } catch (screenErr) {
            console.error(`    ❌ Error getting screen image: ${screenErr.message}`);
          }
        }
      } catch (projErr) {
        console.error(`  ❌ Error getting screens: ${projErr.message}`);
      }
    }

    console.log("\n✅ Done!");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

main();
