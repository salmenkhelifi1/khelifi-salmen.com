import https from "https";
import fs from "fs";
import path from "path";

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

async function callStitchTool(toolName, args) {
  const requestBody = JSON.stringify({ tool: toolName, arguments: args });
  
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: "stitch.googleapis.com",
      path: "/mcp/v1/call_tool",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Length": Buffer.byteLength(requestBody)
      }
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse response: ${data}`));
        }
      });
    });
    
    req.on("error", reject);
    req.write(requestBody);
    req.end();
  });
}

async function main() {
  console.log("Fetching Stitch projects via MCP...");
  
  try {
    const listResult = await callStitchTool("list_projects", {});
    console.log("List projects result:", JSON.stringify(listResult, null, 2));
  } catch (err) {
    console.error("Error calling Stitch MCP:", err.message);
  }
}

main();
