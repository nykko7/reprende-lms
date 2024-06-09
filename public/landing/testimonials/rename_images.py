import os

def rename_images_in_folder():
    # Obtener la ruta de la carpeta actual
    folder_path = os.path.dirname(os.path.realpath(__file__))
    
    # Obtener la lista de archivos en la carpeta
    files = os.listdir(folder_path)
    
    # Filtrar solo archivos que son imágenes y no comienzan con "testimonial-student"
    image_files = [file for file in files if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')) and not file.startswith('testimonial-student')]
    
    # Renombrar cada imagen secuencialmente
    for index, filename in enumerate(sorted(image_files), start=1):
        # Obtener la extensión del archivo
        file_extension = os.path.splitext(filename)[1]
        
        # Crear el nuevo nombre
        new_name = f"testimonial-image{index}{file_extension}"
        
        # Obtener la ruta completa de los archivos
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)
        
        # Renombrar el archivo
        os.rename(old_file, new_file)
        print(f"Renamed: {old_file} to {new_file}")

# Uso del script
rename_images_in_folder()
