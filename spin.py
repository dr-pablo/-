from PIL import Image, ImageDraw
import math
import random

def ease_in_out_sine(t):
    return 0.5 - 0.5 * math.cos(math.pi * t)

def move_image(input_path, output_path, num_frames, output_width, output_height, max_translation=10, zoom_factor=2, randomness=0.2):
    input_image = Image.open(input_path)
    original_width, original_height = input_image.size
    frames = []

    # # Randomly select a point inside the image
    # target_x = random.randint(0, original_width - int(original_width / zoom_factor))
    # target_y = random.randint(0, original_height - int(original_height / zoom_factor))

    # Generate frames for zooming in
    for i in range(num_frames // 2):
        t = ease_in_out_sine(i / ((num_frames // 2) - 1))  # Apply easing function to control acceleration and deceleration
        # Randomly select a point inside the image
        target_x = random.randint(0, original_width - int(original_width / zoom_factor))
        target_y = random.randint(0, original_height - int(original_height / zoom_factor))

        # Calculate translation along the circular path
        angle = t * 2 * math.pi  # Calculate angle from 0 to 2*pi for circular motion
        translation_x = int(max_translation * math.cos(angle))  # Horizontal translation
        translation_y = int(max_translation * math.sin(angle))  # Vertical translation

        # Calculate zooming factors based on easing function and randomness
        zoom_factor_x = 1 + (zoom_factor - 1) * ease_in_out_sine(t) * random.uniform(1 - randomness, 1 + randomness)
        zoom_factor_y = 1 + (zoom_factor - 1) * ease_in_out_sine(t) * random.uniform(1 - randomness, 1 + randomness)

        # Calculate the target area within the image for zooming
        target_width = int(original_width / zoom_factor_x)
        target_height = int(original_height / zoom_factor_y)

        # Apply translation and zooming to the input image
        zoomed_image = input_image.crop((target_x, target_y, target_x + target_width, target_y + target_height))
        zoomed_image = zoomed_image.resize((int(target_width * zoom_factor), int(target_height * zoom_factor)))

        transparent_canvas = Image.new("RGBA", input_image.size, (0, 0, 0, 0))
        transparent_canvas.paste(zoomed_image, (translation_x, translation_y))

        frames.append(transparent_canvas)


    # Save the frames as a GIF without looping back to the initial state
    frames[0].save(output_path, save_all=True, append_images=frames[1:], duration=300, loop=0, width=output_width, height=output_height)

if __name__ == "__main__":
    input_image_path = "src/assets/yabadaba.webp"  # Replace with the path to your input image
    output_gif_path = "src/assets/run.gif"  # Path where the output GIF will be saved
    num_frames = 144  # Number of frames in each zoom in/out cycle
    output_width = 300  # Output image width
    output_height = 300  # Output image height
    max_translation = 10  # Maximum translation in pixels
    zoom_factor = 2  # Zoom factor for the image
    randomness = 0.2  # Randomness parameter for selecting the zoom area

    move_image(input_image_path, output_gif_path, num_frames, output_width, output_height, max_translation, zoom_factor, randomness)
