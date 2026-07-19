import https from "https";
import fs from "fs";
import path from "path";

const apiKey = process.env.STITCH_API_KEY;
if (!apiKey) {
  throw new Error("Missing STITCH_API_KEY environment variable");
}
process.env.STITCH_API_KEY = apiKey;

const { stitch } = await import("@google/stitch-sdk");
const OUTPUT_DIR = "./images/stitch-projects";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith("https") ? https : require("http");
    
    const req = protocol.get(url, (response) => {
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
    console.log(`Found ${projects.length} projects\n`);
    
    let totalScreens = 0;
    let downloaded = 0;
    let failed = 0;
    
    for (const project of projects) {
      console.log(`Project: ${project.projectId}`);
      
      try {
        const screens = await project.screens();
        console.log(`  Screens: ${screens.length}`);
        totalScreens += screens.length;
        
        for (const screen of screens) {
          try {
            const imageUrl = await screen.getImage();
            
            if (imageUrl && imageUrl.startsWith("http")) {
              const filename = `${project.projectId}-${screen.screenId}.png`;
              const filepath = path.join(OUTPUT_DIR, filename);
              
              console.log(`    Downloading ${filename}...`);
              await downloadFile(imageUrl, filepath);
              downloaded++;
              console.log(`    ✅ Saved: ${filename}`);
            }
          } catch (screenErr) {
            console.log(`    ❌ Screen error: ${screenErr.message}`);
            failed++;
          }
        }
      } catch (projErr) {
        console.log(`  ❌ Project error: ${projErr.message}`);
      }
      console.log("");
    }
    
    console.log(`=== Summary ===`);
    console.log(`Projects: ${projects.length}`);
    console.log(`Total screens: ${totalScreens}`);
    console.log(`Downloaded: ${downloaded}`);
    console.log(`Failed: ${failed}`);
    console.log(`\nOutput: ${OUTPUT_DIR}/`);
    
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
