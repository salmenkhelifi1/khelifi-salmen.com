import https from "https";
import fs from "fs";
import path from "path";

const apiKey = process.env.STITCH_API_KEY;
if (!apiKey) {
  throw new Error("Missing STITCH_API_KEY environment variable");
}
process.env.STITCH_API_KEY = apiKey;

const { stitch } = await import("@google/stitch-sdk");
const OUTPUT_DIR = "./nextjs-portfolio/public/images/anlingo/stitch";
const TARGET_PROJECT_ID = "8709454523950175307";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const req = https.get(url, (response) => {
      if (response.statusCode === 403) {
        file.close();
        try { fs.unlinkSync(filepath); } catch {}
        reject(new Error("403 Forbidden"));
        return;
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve(filepath);
      });
    });
    req.on("error", reject);
  });
}

async function main() {
  console.log("Fetching Stitch projects...");

  try {
    const projects = await stitch.projects();
    console.log(`Found ${projects.length} projects`);

    const targetProject = projects.find((p) => p.projectId === TARGET_PROJECT_ID);

    if (!targetProject) {
      console.log(`Project ${TARGET_PROJECT_ID} not found.`);
      console.log("Available project IDs:", projects.map((p) => p.projectId).join(", "));
      return;
    }

    console.log(`Found target project: ${targetProject.projectId}`);

    const screens = await targetProject.screens();
    console.log(`  Screens: ${screens.length}`);

    let downloaded = 0;
    let failed = 0;

    for (const screen of screens) {
      try {
        const imageUrl = await screen.getImage();

        if (imageUrl && imageUrl.startsWith("http")) {
          const label = (screen.name || screen.screenId || "screen")
            .toString()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
          const filename = `${label}-${screen.screenId}.png`;
          const filepath = path.join(OUTPUT_DIR, filename);

          console.log(`    Downloading ${filename}...`);
          await downloadFile(imageUrl, filepath);
          downloaded++;
          console.log(`    Saved: ${filename}`);
        }
      } catch (screenErr) {
        console.log(`    Screen error: ${screenErr.message}`);
        failed++;
      }
    }

    console.log(`\n=== Summary ===`);
    console.log(`Downloaded: ${downloaded}`);
    console.log(`Failed: ${failed}`);
    console.log(`Output: ${OUTPUT_DIR}/`);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
