import https from "https";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const API_KEY = process.env.STITCH_API_KEY;
if (!API_KEY) {
  throw new Error("Missing STITCH_API_KEY environment variable");
}
const OUTPUT_DIR = "./images/stitch-projects";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith("https") ? https : require("http");
    
    const req = protocol.get(url, (response) => {
      if (response.statusCode === 403) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error("403 Forbidden - authentication required"));
        return;
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve(filepath);
      });
    });
    
    req.on("error", (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
}

async function main() {
  console.log("Fetching Stitch projects...");
  
  const script = `
const { stitch } = require("@google/stitch-sdk");
const https = require("https");
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.STITCH_API_KEY;
if (!API_KEY) {
  throw new Error("Missing STITCH_API_KEY environment variable");
}
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
        fs.unlinkSync(filepath);
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

(async () => {
  try {
    const projects = await stitch.projects();
    console.log("Found " + projects.length + " projects");
    
    for (const project of projects) {
      console.log("\\nProject:", project.projectId);
      
      const screens = await project.screens();
      console.log("  Screens:", screens.length);
      
      for (const screen of screens) {
        console.log("  Screen:", screen.screenId);
        
        try {
          const imageUrl = await screen.getImage();
          console.log("    Image URL:", imageUrl);
          
          if (imageUrl && imageUrl.startsWith("http")) {
            const filename = project.projectId + "-screen-" + screen.screenId + ".png";
            const filepath = path.join(OUTPUT_DIR, filename);
            
            await downloadFile(imageUrl, filepath);
            console.log("    Downloaded:", filename);
          }
        } catch (e) {
          console.log("    Error:", e.message);
        }
      }
    }
    
    console.log("\\nDone!");
  } catch (err) {
    console.error("Error:", err.message);
  }
  process.exit(0);
})();
`;
  
  const child = spawn("node", ["-e", script], {
    cwd: process.cwd(),
    env: { ...process.env, STITCH_API_KEY: API_KEY }
  });
  
  child.stdout.on("data", (d) => console.log(d.toString()));
  child.stderr.on("data", (d) => console.error(d.toString()));
  
  return new Promise((resolve) => {
    child.on("close", resolve);
  });
}

main();
