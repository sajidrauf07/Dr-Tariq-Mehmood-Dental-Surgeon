import cv2
import numpy as np
from PIL import Image, ImageEnhance
import os

input_path = r'C:\Users\HP 840 G3\.gemini\antigravity-ide\brain\d59d2269-0aa0-4b6b-a808-0627091e9344\.user_uploaded\media_1789309458930.png'
output_dir = r'c:\Users\HP 840 G3\Desktop\Web DEVELOPMENT\Dr Tariq Mehmood Dental Surgeon\public\images'

img = cv2.imread(input_path)
h, w, _ = img.shape
print(f"Original: {w}x{h}")

# Clean and enhance with OpenCV edge-preserving filter
denoised = cv2.edgePreservingFilter(img, flags=1, sigma_s=25, sigma_r=0.20)
enhanced = cv2.detailEnhance(denoised, sigma_s=10, sigma_r=0.15)

# Upscale 4x with Lanczos interpolation
scale = 4
up_w, up_h = w * scale, h * scale
upscaled = cv2.resize(enhanced, (up_w, up_h), interpolation=cv2.INTER_LANCZOS4)

# Build precise subject mask (keeping all of Dr. Tariq + entire shirt)
# Below y = 110*scale, it is 100% Dr. Tariq
# Above y = 110*scale, the background is light colored (R > 180, G > 180, B > 160)
# while hair is dark (R < 80, G < 80, B < 80) and skin is R > 120, B < 120
gray = cv2.cvtColor(upscaled, cv2.COLOR_BGR2GRAY)

mask = np.ones((up_h, up_w), dtype=np.float32)

shoulder_y = int(112 * scale)

# For the head region above shoulders, detect background by color
for y in range(shoulder_y):
    for x in range(up_w):
        b, g, r = upscaled[y, x]
        # Wall color: high luminance and low saturation, or greenish/beige wall
        # Hair is dark:
        is_hair = (r < 95 and g < 95 and b < 95)
        # Face is warm:
        is_face = (r > 115 and r > b + 15)
        
        if not (is_hair or is_face):
            # It's wall/background
            mask[y, x] = 0.0

# Clean up noise in the mask: morphology close and blur
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
mask_uint = (mask * 255).astype(np.uint8)
mask_closed = cv2.morphologyEx(mask_uint, cv2.MORPH_CLOSE, kernel)
mask_clean = cv2.GaussianBlur(mask_closed.astype(np.float32) / 255.0, (11, 11), 0)

# 3-channel mask
mask_3ch = np.repeat(mask_clean[:, :, np.newaxis], 3, axis=2)

# High-resolution modern medical clinic studio backdrop
studio_bg = np.zeros((up_h, up_w, 3), dtype=np.uint8)
for y in range(up_h):
    ratio = y / up_h
    # Clean professional gradient from soft dental cyan-blue to white
    b = int(246 * (1 - ratio) + 254 * ratio)
    g = int(238 * (1 - ratio) + 252 * ratio)
    r = int(224 * (1 - ratio) + 248 * ratio)
    studio_bg[y, :] = (b, g, r)

# Soft radial spotlight behind doctor's head
cy, cx = int(up_h * 0.35), up_w // 2
Y, X = np.ogrid[:up_h, :up_w]
dist = np.sqrt((X - cx)**2 + (Y - cy)**2)
glow = np.clip(1.0 - (dist / (up_w * 0.7)), 0, 1)

for c in range(3):
    studio_bg[:, :, c] = np.clip(studio_bg[:, :, c].astype(float) + glow * 20, 0, 255).astype(np.uint8)

# Composite subject onto studio backdrop
composite = (upscaled.astype(float) * mask_3ch + studio_bg.astype(float) * (1.0 - mask_3ch)).astype(np.uint8)

# Selective facial sharpening
gaussian = cv2.GaussianBlur(composite, (0, 0), 1.2)
sharpened = cv2.addWeighted(composite, 1.6, gaussian, -0.6, 0)

# PIL contrast & color enhancement for realistic natural skin tones
pil_img = Image.fromarray(cv2.cvtColor(sharpened, cv2.COLOR_BGR2RGB))
pil_img = ImageEnhance.Contrast(pil_img).enhance(1.10)
pil_img = ImageEnhance.Sharpness(pil_img).enhance(1.20)
pil_img = ImageEnhance.Color(pil_img).enhance(1.05)

final_bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

# Crop to square / professional 4:5 portrait
# Center on Dr. Tariq
target_size = min(up_w, up_h)
crop_x = (up_w - target_size) // 2
final_square = final_bgr[:, crop_x:crop_x + target_size]

cv2.imwrite(os.path.join(output_dir, 'doctor.jpg'), final_square, [cv2.IMWRITE_JPEG_QUALITY, 98])
cv2.imwrite(os.path.join(output_dir, 'doctor-profile.jpg'), final_square, [cv2.IMWRITE_JPEG_QUALITY, 98])
cv2.imwrite(os.path.join(output_dir, 'doctor-clean-portrait.jpg'), final_bgr, [cv2.IMWRITE_JPEG_QUALITY, 98])

print("Generated clean, complete portrait with intact shirt and studio backdrop!")
