import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
import os

input_path = r'C:\Users\HP 840 G3\.gemini\antigravity-ide\brain\d59d2269-0aa0-4b6b-a808-0627091e9344\.user_uploaded\media_1789309458930.png'
clinic_bg_path = r'c:\Users\HP 840 G3\Desktop\Web DEVELOPMENT\Dr Tariq Mehmood Dental Surgeon\public\images\clinic.jpg'
output_dir = r'c:\Users\HP 840 G3\Desktop\Web DEVELOPMENT\Dr Tariq Mehmood Dental Surgeon\public\images'

# Load original
img = cv2.imread(input_path)
h, w, _ = img.shape
print(f"Original: {w}x{h}")

# Step 1: Crop tightly around Dr. Tariq (center head & collar, remove dead space on sides)
# w=184, h=160
crop_x1 = 15
crop_x2 = 175
crop_y1 = 0
crop_y2 = 160
cropped = img[crop_y1:crop_y2, crop_x1:crop_x2]
ch, cw, _ = cropped.shape

# Step 2: Denoise & Detail Enhancement with OpenCV
denoised = cv2.edgePreservingFilter(cropped, flags=1, sigma_s=30, sigma_r=0.20)
enhanced = cv2.detailEnhance(denoised, sigma_s=12, sigma_r=0.18)

# Step 3: Super-Resolution Upscale 4x with INTER_LANCZOS4
target_w = cw * 4
target_h = ch * 4
upscaled = cv2.resize(enhanced, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)

# Step 4: Selective Unsharp Masking
# Sharpen eyes, mustache, hair while keeping skin smooth
gray = cv2.cvtColor(upscaled, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 40, 110)
edges_blurred = cv2.GaussianBlur(edges, (5, 5), 0) / 255.0
edges_mask = np.repeat(edges_blurred[:, :, np.newaxis], 3, axis=2)

gaussian = cv2.GaussianBlur(upscaled, (0, 0), 1.5)
sharp = cv2.addWeighted(upscaled, 1.8, gaussian, -0.8, 0)
# Blend: more sharpness on edges, smoother on flat skin
final_doctor = (sharp * edges_mask + upscaled * (1 - edges_mask)).astype(np.uint8)

# Step 5: PIL Color & Contrast Tuning
pil_doc = Image.fromarray(cv2.cvtColor(final_doctor, cv2.COLOR_BGR2RGB))
pil_doc = ImageEnhance.Contrast(pil_doc).enhance(1.15)
pil_doc = ImageEnhance.Sharpness(pil_doc).enhance(1.3)
pil_doc = ImageEnhance.Color(pil_doc).enhance(1.08)
doc_rgb = np.array(pil_doc)
doc_bgr = cv2.cvtColor(doc_rgb, cv2.COLOR_RGB2BGR)

# Step 6: Create high-end Doctor Clinic Card (600x700)
# Background: Clinic interior with professional bokeh blur
card_w = 600
card_h = 720

clinic_bg = cv2.imread(clinic_bg_path)
clinic_resized = cv2.resize(clinic_bg, (card_w, card_h))
clinic_blurred = cv2.GaussianBlur(clinic_resized, (35, 35), 0)

# Add dark blue/slate medical wash to background so doctor stands out prominently
medical_wash = np.zeros((card_h, card_w, 3), dtype=np.uint8)
medical_wash[:, :] = [45, 25, 12] # B, G, R
bg_composite = cv2.addWeighted(clinic_blurred, 0.45, medical_wash, 0.55, 0)

# Resize doctor to fit nicely in center (about 480 wide)
dw = 460
dh = int(target_h * (dw / target_w))
doc_scaled = cv2.resize(doc_bgr, (dw, dh), interpolation=cv2.INTER_LANCZOS4)

# Alpha mask with smooth feathered border and rounded bottom
mask = np.ones((dh, dw), dtype=np.float32)
feather = 20
for i in range(feather):
    factor = i / feather
    mask[i, :] *= factor
    mask[:, i] *= factor
    mask[:, dw - 1 - i] *= factor
    mask[dh - 1 - i, :] *= factor

# Place doctor onto clinic bokeh background
offset_x = (card_w - dw) // 2
offset_y = 60

for c in range(3):
    bg_slice = bg_composite[offset_y:offset_y+dh, offset_x:offset_x+dw, c].astype(np.float32)
    doc_slice = doc_scaled[:, :, c].astype(np.float32)
    bg_composite[offset_y:offset_y+dh, offset_x:offset_x+dw, c] = (doc_slice * mask + bg_slice * (1 - mask)).astype(np.uint8)

# Dark gradient at the bottom for doctor name & PMDC badge
bottom_gradient = np.zeros((card_h, card_w, 3), dtype=np.uint8)
for y in range(card_h - 220, card_h):
    alpha = (y - (card_h - 220)) / 220.0
    bg_composite[y, :] = (bg_composite[y, :] * (1 - alpha * 0.9)).astype(np.uint8)

# Save as doctor.jpg and doctor-profile.jpg
cv2.imwrite(os.path.join(output_dir, 'doctor.jpg'), bg_composite, [cv2.IMWRITE_JPEG_QUALITY, 96])
cv2.imwrite(os.path.join(output_dir, 'doctor-profile.jpg'), bg_composite, [cv2.IMWRITE_JPEG_QUALITY, 96])

# Also save standalone high-res doctor photo directly without background
doc_direct = cv2.resize(doc_bgr, (600, int(target_h * (600 / target_w))), interpolation=cv2.INTER_LANCZOS4)
cv2.imwrite(os.path.join(output_dir, 'doctor-clean-direct.jpg'), doc_direct, [cv2.IMWRITE_JPEG_QUALITY, 96])

print("Generated clean, high-resolution doctor-clean-direct.jpg, doctor.jpg, and doctor-profile.jpg")
