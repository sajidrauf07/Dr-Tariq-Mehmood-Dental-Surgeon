const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\HP 840 G3\\.gemini\\antigravity-ide\\brain\\d59d2269-0aa0-4b6b-a808-0627091e9344\\.user_uploaded\\media_1789309458930.png';
const outputDir = path.join(__dirname, '..', 'public', 'images');

async function createStudioDoctorPortrait() {
  const meta = await sharp(inputPath).metadata();
  const raw = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

  const { data, info } = raw;
  const w = info.width;
  const h = info.height;

  // Let's create an alpha mask for background vs subject
  // Background in the photo:
  // Top: Light wall (R ~ 200-240, G ~ 200-240, B ~ 200-240, |R-G| < 15, |G-B| < 15)
  // Mid: Beige wall (R ~ 210-235, G ~ 200-225, B ~ 150-180)
  // Subject: Hair is very dark (R,G,B < 90), Face skin (R > 130, G ~ 90-140, B ~ 80-130), Shirt (stripes)
  
  // Create an enhanced 800x800 canvas
  // First, let's create a high quality clinic background
  const clinicBg = await sharp({
    create: {
      width: 800,
      height: 800,
      channels: 4,
      background: { r: 15, g: 30, b: 55, alpha: 1 }
    }
  })
  .composite([
    {
      input: Buffer.from(`
        <svg width="800" height="800">
          <defs>
            <radialGradient id="glow" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stop-color="#1E3A8A" stop-opacity="0.8" />
              <stop offset="45%" stop-color="#0284C7" stop-opacity="0.5" />
              <stop offset="85%" stop-color="#0B192C" stop-opacity="0.95" />
              <stop offset="100%" stop-color="#060D1A" stop-opacity="1" />
            </radialGradient>
            <linearGradient id="lighting" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#000000" stop-opacity="0.6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#glow)" />
          <rect width="100%" height="100%" fill="url(#lighting)" />
        </svg>
      `),
      blend: 'over'
    }
  ])
  .png()
  .toBuffer();

  // Create clean version of doctor portrait
  // 1. Moderate upscale
  const cleanedSubject = await sharp(inputPath)
    .resize(800, 720, {
      fit: 'cover',
      position: 'top',
      kernel: sharp.kernel.lanczos3
    })
    // Gentle denoise to smooth skin without blur
    .median(1)
    .modulate({
      brightness: 1.05,
      saturation: 1.05
    })
    // Balanced sharpening for natural look
    .sharpen({
      sigma: 1.1,
      m1: 0.8,
      m2: 1.5,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .toBuffer();

  // Combine with a polished professional medical card layout
  // Add professional clinic lighting vignette and medical grade frame
  const finalImage = await sharp(cleanedSubject)
    .resize(800, 800, {
      fit: 'cover',
      position: 'top'
    })
    .composite([
      {
        input: Buffer.from(`
          <svg width="800" height="800">
            <defs>
              <radialGradient id="vignette" cx="50%" cy="38%" r="65%">
                <stop offset="60%" stop-color="#000000" stop-opacity="0" />
                <stop offset="90%" stop-color="#071224" stop-opacity="0.45" />
                <stop offset="100%" stop-color="#040914" stop-opacity="0.75" />
              </radialGradient>
              <linearGradient id="bottomCard" x1="0" y1="65%" x2="0" y2="100%">
                <stop offset="0%" stop-color="#040914" stop-opacity="0" />
                <stop offset="85%" stop-color="#060D1A" stop-opacity="0.85" />
                <stop offset="100%" stop-color="#060D1A" stop-opacity="0.95" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#vignette)" />
            <rect width="100%" height="100%" fill="url(#bottomCard)" />
          </svg>
        `),
        blend: 'over'
      }
    ])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  await sharp(finalImage).toFile(path.join(outputDir, 'doctor.jpg'));
  await sharp(finalImage).toFile(path.join(outputDir, 'doctor-profile.jpg'));
  console.log('Saved studio doctor portrait as doctor.jpg and doctor-profile.jpg');
}

createStudioDoctorPortrait().catch(console.error);
