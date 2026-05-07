const { Jimp } = require('jimp');

async function processImage() {
    const input = "C:\\Users\\Admin\\.gemini\\antigravity\\brain\\e68cf080-9bfc-4abb-ba69-eb9582f5b294\\media__1777096736124.png";
    const output = "C:\\Users\\Admin\\Downloads\\Updated portfolio\\sachin-portfolio-final\\sachin-portfolio\\public\\sach_logo.png";
    
    try {
        const image = await Jimp.read(input);
        console.log(`Original size: ${image.bitmap.width}x${image.bitmap.height}`);
        
        // Autocrop the transparent edges
        image.autocrop();
        console.log(`Cropped size: ${image.bitmap.width}x${image.bitmap.height}`);
        
        // Save
        await image.write(output);
        console.log("Processed logo saved!");
    } catch (err) {
        console.error(err);
    }
}
processImage();
