const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:\\Users\\HP 840 G3\\.gemini\\antigravity-ide\\brain\\d59d2269-0aa0-4b6b-a808-0627091e9344\\.user_uploaded\\media_1789309458930.png';
const outputDir = path.join(__dirname, '..', 'public', 'images');

async function cleanDoctorPortrait() {
  // Load original raw pixels
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Original: ${width}x${height}, ${channels} channels`);

  // Target high-res canvas
  // First, smooth upscale using cubic/lanczos without harsh unsharp mask
  const cleanUpscaledBuffer = await sharp(inputPath)
    // Smooth out JPEG compression blocks gently
    .median(2)
    .resize(720, 640, {
      kernel: sharp.kernel.cubic,
      fit: 'cover'
    })
    .blur(0.8) // smooth pixel grid
    .sharpen({
      sigma: 0.9,
      m1: 0.6,
      m2: 1.2,
      x1: 2,
      y2: 8,
      y3: 15
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.04
    })
    .toBuffer();

  // Create an aesthetic medical studio backdrop:
  // A clean, soft clinical gradient with vignette and subtle medical cyan/navy tint
  const targetW = 800;
  const targetH = 800;

  // Background gradient
  const studioBackdropSvg = Buffer.from(`
    <svg width="${targetW}" height="${targetH}">
      <defs>
        <radialGradient id="clinicGlow" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stop-color="#EBF5FF" stop-opacity="0.9" />
          <stop offset="60%" stop-color="#DCEBFA" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#0F243E" stop-opacity="0.4" />
        </radialGradient>
        <linearGradient id="softFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0" />
          <stop offset="70%" stop-color="#0F172A" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#091322" stop-opacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#clinicGlow)" />
      <rect width="100%" height="100%" fill="url(#softFloor)" />
    </svg>
  `);

  // Composite the cleaned doctor image over the frame with soft rounded lighting
  const finalDoctor = await sharp(cleanUpscaledBuffer)
    .resize(targetW, targetH, {
      fit: 'cover',
      position: 'top',
      kernel: sharp.kernel.lanczos3
    })
    .composite([
      {
        input: studioBackdropSvg,
        blend: 'soft-light'
      },
      {
        input: Buffer.from(`
          <svg width="${targetW}" height="${targetH}">
            <defs>
              <linearGradient id="bottomShadow" x1="0" y1="65%" x2="0" y2="100%">
                <stop offset="0%" stop-color="#091424" stop-opacity="0" />
                <stop offset="100%" stop-color="#091424" stop-opacity="0.7" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#bottomShadow)" />
          </svg>
        `),
        blend: 'over'
      }
    ])
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toBuffer();

  await sharp(finalDoctor).toFile(path.join(outputDir, 'doctor.jpg'));
  await sharp(finalDoctor).toFile(path.join(outputDir, 'doctor-profile.jpg'));
  console.log('Cleaned doctor.jpg saved without halos!');
}

cleanDoctorPortrait().catch(console.error);
