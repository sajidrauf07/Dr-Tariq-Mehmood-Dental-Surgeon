import cv2
import numpy as np
from PIL import Image, ImageEnhance
import os

input_path = r'C:\Users\HP 840 G3\.gemini\antigravity-ide\brain\d59d2269-0aa0-4b6b-a808-0627091e9344\.user_uploaded\media_1789309458930.png'
output_dir = r'c:\Users\HP 840 G3\Desktop\Web DEVELOPMENT\Dr Tariq Mehmood Dental Surgeon\public\images'

# 1. Read original 184x160 image
img = cv2.imread(input_path)
h, w, _ = img.shape
print(f"Input: {w}x{h}")

# 2. Gentle Bilateral and Edge-Preserving filter:
# Keeps strong structural edges (eyes, pupils, mustache, jawline, shirt collar)
# while smoothing out blocky compression noise from low-res source
bilateral = cv2.bilateralFilter(img, d=9, sigmaColor=75, sigmaSpace=75)
denoised = cv2.edgePreservingFilter(bilateral, flags=1, sigma_s=20, sigma_r=0.18)

# 3. Detail Enhancement
enhanced = cv2.detailEnhance(denoised, sigma_s=10, sigma_r=0.15)

# 4. Super-resolution 4x upscale with INTER_LANCZOS4
scale = 4
up_w, up_h = w * scale, h * scale
upscaled = cv2.resize(enhanced, (up_w, up_h), interpolation=cv2.INTER_LANCZOS4)

# 5. Targeted Unsharp Mask:
# High frequency edge enhancement without creating white halos
gaussian = cv2.GaussianBlur(upscaled, (0, 0), 1.2)
sharpened = cv2.addWeighted(upscaled, 1.55, gaussian, -0.55, 0)

# 6. PIL High Quality Color & Contrast Normalization:
# Increases contrast so eyes and hair look deep and clear, skin looks warm and healthy
pil_img = Image.fromarray(cv2.cvtColor(sharpened, cv2.COLOR_BGR2RGB))
pil_img = ImageEnhance.Contrast(pil_img).enhance(1.16)
pil_img = ImageEnhance.Sharpness(pil_img).enhance(1.22)
pil_img = ImageEnhance.Color(pil_img).enhance(1.08)

final_bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

# Crop nicely centered on Dr. Tariq (tight portrait head & shoulders)
# Size: 600x600 square
crop_dim = min(up_w, up_h) # 640
offset_x = (up_w - crop_dim) // 2
square_crop = final_bgr[:, offset_x:offset_x + crop_dim]

# Save all main targets
cv2.imwrite(os.path.join(output_dir, 'doctor.jpg'), square_crop, [cv2.IMWRITE_JPEG_QUALITY, 98])
cv2.imwrite(os.path.join(output_dir, 'doctor-profile.jpg'), square_crop, [cv2.IMWRITE_JPEG_QUALITY, 98])
cv2.imwrite(os.path.join(output_dir, 'doctor-full.jpg'), final_bgr, [cv2.IMWRITE_JPEG_QUALITY, 98])

# Also create a high-definition circular avatar (400x400 PNG with smooth anti-aliased alpha circle)
avatar_dim = 400
avatar_resized = cv2.resize(square_crop, (avatar_dim, avatar_dim), interpolation=cv2.INTER_LANCZOS4)
avatar_bgra = cv2.cvtColor(avatar_resized, cv2.COLOR_BGR2BGRA)

# Circular mask with smooth anti-aliasing
mask_circle = np.zeros((avatar_dim, avatar_dim), dtype=np.uint8)
cv2.circle(mask_circle, (avatar_dim // 2, avatar_dim // 2), avatar_dim // 2 - 2, 255, -1)
mask_circle_blurred = cv2.GaussianBlur(mask_circle, (5, 5), 0)
avatar_bgra[:, :, 3] = mask_circle_blurred

cv2.imwrite(os.path.join(output_dir, 'doctor-avatar.png'), avatar_bgra)

print("Saved razor-sharp doctor.jpg, doctor-profile.jpg, doctor-full.jpg, and doctor-avatar.png successfully!")
