import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
import os

input_path = r'C:\Users\HP 840 G3\.gemini\antigravity-ide\brain\d59d2269-0aa0-4b6b-a808-0627091e9344\.user_uploaded\media_1789309458930.png'
output_dir = r'c:\Users\HP 840 G3\Desktop\Web DEVELOPMENT\Dr Tariq Mehmood Dental Surgeon\public\images'

# Load image
img = cv2.imread(input_path)
h, w, c = img.shape
print(f"Original dimensions: {w}x{h}")

# Step 1: Gentle edge-preserving smoothing to remove JPEG compression noise
# flags: RECURS_FILTER or NORMCONV_FILTER
denoised = cv2.edgePreservingFilter(img, flags=1, sigma_s=40, sigma_r=0.25)

# Step 2: Detail enhancement
enhanced = cv2.detailEnhance(denoised, sigma_s=10, sigma_r=0.15)

# Step 3: Super resolution scaling with Lanczos interpolation
scale_factor = 4
target_w = w * scale_factor
target_h = h * scale_factor

upscaled = cv2.resize(enhanced, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)

# Step 4: Unsharp masking for facial features (eyes, mustache, hair, collar)
gaussian = cv2.GaussianBlur(upscaled, (0, 0), 2.0)
unsharp = cv2.addWeighted(upscaled, 1.6, gaussian, -0.6, 0)

# Step 5: Convert to PIL for fine color/contrast balancing
pil_img = Image.fromarray(cv2.cvtColor(unsharp, cv2.COLOR_BGR2RGB))

# Contrast & Sharpness
enhancer_contrast = ImageEnhance.Contrast(pil_img)
pil_img = enhancer_contrast.enhance(1.12)

enhancer_sharp = ImageEnhance.Sharpness(pil_img)
pil_img = enhancer_sharp.enhance(1.25)

enhancer_color = ImageEnhance.Color(pil_img)
pil_img = enhancer_color.enhance(1.08)

# Save intermediate enhanced portrait
enhanced_path = os.path.join(output_dir, 'doctor-enhanced-face.png')
pil_img.save(enhanced_path, quality=98)
print(f"Saved enhanced face to {enhanced_path}")

# Step 6: Create professional medical composite
# 800x800 high definition doctor presentation card
canvas_w, canvas_h = 800, 800

# Background: modern deep medical clinic gradient
bg_gradient = np.zeros((canvas_h, canvas_w, 3), dtype=np.uint8)
for y in range(canvas_h):
    # smooth gradient from navy blue (#0F243E) to deep slate (#060D1A)
    ratio = y / canvas_h
    r = int(12 * (1 - ratio) + 6 * ratio)
    g = int(32 * (1 - ratio) + 13 * ratio)
    b = int(60 * (1 - ratio) + 26 * ratio)
    bg_gradient[y, :] = (b, g, r)

# Resize enhanced doctor portrait to fit nicely into frame (around 520x450)
face_w = 540
face_h = int(target_h * (face_w / target_w))
doctor_resized = cv2.resize(cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR), (face_w, face_h), interpolation=cv2.INTER_LANCZOS4)

# Vignette / soft shadow on doctor edges
mask = np.ones((face_h, face_w), dtype=np.float32)
# feather borders
feather = 35
for i in range(feather):
    alpha = i / feather
    mask[i, :] *= alpha
    mask[face_h - 1 - i, :] *= alpha
    mask[:, i] *= alpha
    mask[:, face_w - 1 - i] *= alpha

# Place on canvas
start_x = (canvas_w - face_w) // 2
start_y = 50

for c in range(3):
    bg_slice = bg_gradient[start_y:start_y+face_h, start_x:start_x+face_w, c].astype(np.float32)
    doc_slice = doctor_resized[:, :, c].astype(np.float32)
    blended = doc_slice * mask + bg_slice * (1 - mask)
    bg_gradient[start_y:start_y+face_h, start_x:start_x+face_w, c] = blended.astype(np.uint8)

# Add soft bottom gradient for name card
for y in range(canvas_h - 180, canvas_h):
    alpha = (y - (canvas_h - 180)) / 180.0
    bg_gradient[y, :] = (bg_gradient[y, :] * (1 - alpha * 0.8)).astype(np.uint8)

cv2.imwrite(os.path.join(output_dir, 'doctor.jpg'), bg_gradient, [cv2.IMWRITE_JPEG_QUALITY, 96])
cv2.imwrite(os.path.join(output_dir, 'doctor-profile.jpg'), bg_gradient, [cv2.IMWRITE_JPEG_QUALITY, 96])
print("Saved final doctor.jpg and doctor-profile.jpg")
