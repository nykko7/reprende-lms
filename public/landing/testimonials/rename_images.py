import os
from PIL import Image

def rename_and_get_images_info(folder_path):
    # Obtener la lista de archivos en la carpeta
    files = os.listdir(folder_path)
    
    # Filtrar solo archivos que son imágenes y no comienzan con "testimonial-student"
    image_files = [file for file in files if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')) and not file.startswith('testimonial-student')]
    
    # Lista para almacenar el nuevo nombre y el tamaño de cada imagen
    image_info = []
    
    # Renombrar cada imagen secuencialmente segun el orden en que se guardaron
    for index, filename in enumerate(sorted(image_files), start=1):
        # Obtener la extensión del archivo
        file_extension = os.path.splitext(filename)[1].lower()
        
        # Crear el nuevo nombre
        new_name = f"testimonial-image{index}{file_extension}"
        
        # Obtener la ruta completa de los archivos
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)
        
        # Renombrar el archivo
        os.rename(old_file, new_file)
        
        # Obtener el tamaño de la imagen
        with Image.open(new_file) as img:
            width, height = img.size
        
        # Guardar la información de la imagen
        image_info.append({
            "name": new_name,
            "width": width,
            "height": height,
            "area": width * height
        })
        
        print(f"Renamed: {old_file} to {new_file}")
    
    return image_info

def distribute_images_in_columns(image_info, num_columns):
    # Ordenar las imágenes por tamaño (área) en orden descendente
    image_info.sort(key=lambda x: x["area"], reverse=True)
    
    # Inicializar las columnas
    columns = [[] for _ in range(num_columns)]
    column_heights = [0] * num_columns
    
    # Distribuir las imágenes en las columnas
    for image in image_info:
        # Encontrar la columna con la menor altura actual
        min_height_index = column_heights.index(min(column_heights))
        # Agregar la imagen a esta columna
        columns[min_height_index].append(image)
        # Actualizar la altura de la columna
        column_heights[min_height_index] += image["height"]
    
    return columns

# Uso del script
folder_path = os.path.dirname(os.path.realpath(__file__))
num_columns = 3  # Número de columnas para el layout de masonry

image_info = rename_and_get_images_info(folder_path)
columns = distribute_images_in_columns(image_info, num_columns)

# Imprimir la distribución de imágenes por columnas
for i, column in enumerate(columns):
    print(f"Column {i + 1}:")
    for image in column:
        print(f"  {image['name']} (height: {image['height']}, width: {image['width']}, area: {image['area']})")
