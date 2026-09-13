import cv2
import numpy as np
import os

input_path = r'C:\Users\HP 840 G3\.gemini\antigravity-ide\brain\d59d2269-0aa0-4b6b-a808-0627091e9344\.user_uploaded\media_1789309458930.png'
output_dir = r'c:\Users\HP 840 G3\Desktop\Web DEVELOPMENT\Dr Tariq Mehmood Dental Surgeon\public\images'

# Load
img = cv2.imread(input_path)
h, w, _ = img.shape
print(f"Original: {w}x{h}")

# Clean and enhance first
denoised = cv2.edgePreservingFilter(img, flags=1, sigma_s=25, sigma_r=0.20)
enhanced = cv2.detailEnhance(denoised, sigma_s=10, sigma_r=0.15)

# Upscale 4x with Lanczos
scale = 4
up_w, up_h = w * scale, h * scale
upscaled = cv2.resize(enhanced, (up_w, up_h), interpolation=cv2.INTER_LANCZOS4)

# GrabCut segmentation
mask = np.zeros((up_h, up_w), np.uint8)
bgdModel = np.zeros((1, 65), np.float64)
fgdModel = np.zeros((1, 65), np.float64)

# Bounding box around Dr. Tariq (subject is inside)
rect = (20, 5, up_w - 40, up_h - 10)
cv2.grabCut(upscaled, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

# 0 and 2 are background, 1 and 3 are foreground
fg_mask = np.where((mask == 1) | (mask == 3), 1, 0).astype('uint8')

# Feather / smooth the mask edges
fg_mask_blurred = cv2.GaussianBlur(fg_mask.astype('float32'), (9, 9), 0)
fg_mask_3ch = np.repeat(fg_mask_blurred[:, :, np.newaxis], 3, axis=2)

# Create a clean, crisp, premium medical studio background (HD 736x640)
# Soft gradient from clean light medical cyan-slate (#E0F2FE to #F8FAFC)
studio_bg = np.zeros((up_h, up_w, 3), dtype=np.uint8)
for y in range(up_h):
    ratio = y / up_h
    # Top: soft clinic blue (B: 245, G: 235, R: 220)
    # Bottom: clean medical white (B: 255, G: 250, R: 245)
    b = int(245 * (1 - ratio) + 252 * ratio)
    g = int(230 * (1 - ratio) + 248 * ratio)
    r = int(215 * (1 - ratio) + 242 * ratio)
    studio_bg[y, :] = (b, g, r)

# Add subtle radial lighting glow behind Dr. Tariq's head
cx, cy = up_w // 2, int(up_h * 0.35)
Y, X = np.ogrid[:up_h, :up_w]
dist_from_center = np.sqrt((X - cx)**2 + (Y - cy)**2)
max_dist = np.sqrt(cx**2 + cy**2)
glow = np.clip(1.0 - (dist_from_center / max_dist), 0, 1)

for c in range(3):
    studio_bg[:, :, c] = np.clip(studio_bg[:, :, c].astype(float) + glow * 25, 0, 255).astype(np.uint8)

# Composite subject onto clean studio background
subject = upscaled.astype(float)
background = studio_bg.astype(float)
composite = (subject * fg_mask_3ch + background * (1.0 - fg_mask_3ch)).astype(np.uint8)

# Selective feature sharpening (eyes, hair, mustache, collar)
gaussian = cv2.GaussianBlur(composite, (0, 0), 1.5)
sharpened = cv2.addWeighted(composite, 1.7, gaussian, -0.7, 0)

# Final high-res square crop (640x640) centered on Dr. Tariq
crop_offset_x = (up_w - up_h) // 2
square_crop = sharpened[:, crop_offset_x:crop_offset_x + up_h] if up_w > up_h else sharpened

# Output paths
cv2.imwrite(os.path.join(output_dir, 'doctor.jpg'), square_crop, [cv2.IMWRITE_JPEG_QUALITY, 98])
cv2.imwrite(os.path.join(output_dir, 'doctor-clean.jpg'), square_crop, [cv2.IMWRITE_JPEG_QUALITY, 98])
cv2.imwrite(os.path.join(output_dir, 'doctor-profile.jpg'), square_crop, [cv2.IMWRITE_JPEG_QUALITY, 98])

print("Successfully generated clean studio portrait with GrabCut segmentation!")
