from PIL import Image

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    # The image has a white background. The logo is gold gradient.
    # We'll make white and near-white transparent.
    for item in data:
        # item is (R, G, B, A)
        # If the pixel is very light (near white), make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Crop to bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(output_path, "PNG")
    print(f"Saved processed logo to {output_path}")

input_img = r"C:\Users\Admin\.gemini\antigravity\brain\e68cf080-9bfc-4abb-ba69-eb9582f5b294\media__1777096736124.png"
output_img = r"C:\Users\Admin\Downloads\Updated portfolio\sachin-portfolio-final\sachin-portfolio\public\sach_logo.png"

process_logo(input_img, output_img)
