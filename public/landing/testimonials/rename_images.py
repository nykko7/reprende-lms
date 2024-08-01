import os
import json
from PIL import Image


def rename_and_get_images_info(folder_path):
    files = os.listdir(folder_path)
    image_files = [file for file in files if file.lower().endswith(
        ('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')) and not file.startswith('testimonial-student')]
    image_info = []

    for index, filename in enumerate(sorted(image_files), start=1):
        file_extension = os.path.splitext(filename)[1].lower()
        new_name = f"testimonial-image-{index}{file_extension}"
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)
        os.rename(old_file, new_file)

        with Image.open(new_file) as img:
            width, height = img.size

        image_info.append({
            "name": new_name,
            "width": width,
            "height": height,
            "area": width * height
        })

        print(f"Renamed: {old_file} to {new_file}")

    return image_info


def distribute_images_in_columns(image_info, num_columns):
    image_info.sort(key=lambda x: x["area"], reverse=True)
    columns = [[] for _ in range(num_columns)]
    column_heights = [0] * num_columns

    for image in image_info:
        min_height_index = column_heights.index(min(column_heights))
        columns[min_height_index].append(image)
        column_heights[min_height_index] += image["height"]

    return columns


def generate_json(image_info):
    json_data = {
        "imageTestimonials": [
            {
                "imageSrc": f"/landing/testimonials/{image['name']}",
                "imageAlt": f"Pantallazo del mensaje de un estudiante {index + 1}"
            }
            for index, image in enumerate(image_info)
        ]
    }
    return json_data


# Uso del script
folder_path = os.path.dirname(os.path.realpath(__file__))
num_columns = 3

image_info = rename_and_get_images_info(folder_path)
columns = distribute_images_in_columns(image_info, num_columns)

# Generar y imprimir el JSON
json_data = generate_json(image_info)
print(json.dumps(json_data, indent=2, ensure_ascii=False))


# Imprimir la distribución de imágenes por columnas
for i, column in enumerate(columns):
    print(f"Column {i + 1}:")
    for image in column:
        print(
            f"  {image['name']} (height: {image['height']}, width: {image['width']}, area: {image['area']})")
