#!/usr/bin/env python3
"""Optimize images for web performance."""
import os
from PIL import Image

PUBLIC_DIR = "public/image"


def optimize_image(src_path, dst_path=None, max_width=None, max_height=None, 
                   quality=85, fmt=None, remove_src=False):
    """Open, resize, and save an image."""
    if dst_path is None:
        dst_path = src_path
    
    img = Image.open(src_path)
    orig_w, orig_h = img.size
    
    # Convert palette images with transparency to RGBA
    if img.mode == 'P':
        img = img.convert('RGBA')
    
    # Calculate new size
    w, h = orig_w, orig_h
    if max_width and w > max_width:
        ratio = max_width / w
        w = max_width
        h = int(h * ratio)
    if max_height and h > max_height:
        ratio = max_height / h
        h = max_height
        w = int(w * ratio)
    
    if (w, h) != (orig_w, orig_h):
        img = img.resize((w, h), Image.LANCZOS)
    
    # Determine format
    if fmt is None:
        ext = os.path.splitext(dst_path)[1].lower()
        if ext in ('.jpg', '.jpeg'):
            fmt = 'JPEG'
        elif ext == '.png':
            fmt = 'PNG'
        elif ext == '.webp':
            fmt = 'WEBP'
        else:
            fmt = img.format or 'PNG'
    
    # Save options
    save_kwargs = {}
    if fmt == 'JPEG':
        save_kwargs['quality'] = quality
        save_kwargs['optimize'] = True
        save_kwargs['progressive'] = True
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
    elif fmt == 'PNG':
        save_kwargs['optimize'] = True
    elif fmt == 'WEBP':
        save_kwargs['quality'] = quality
        save_kwargs['method'] = 6
    
    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    img.save(dst_path, format=fmt, **save_kwargs)
    
    orig_size = os.path.getsize(src_path)
    new_size = os.path.getsize(dst_path)
    print(f"  {os.path.basename(src_path)}: {orig_size/1024/1024:.2f}MB → {os.path.basename(dst_path)}: {new_size/1024/1024:.2f}MB ({new_size/orig_size*100:.1f}%)")
    
    if remove_src and src_path != dst_path and os.path.exists(src_path):
        os.remove(src_path)


def process_team_images():
    print("\n=== Team Images ===")
    team_dir = os.path.join(PUBLIC_DIR, "Team")
    for fname in os.listdir(team_dir):
        if fname.lower().endswith(('.png', '.jpg', '.jpeg')):
            src = os.path.join(team_dir, fname)
            if os.path.isdir(src):
                continue
            base = os.path.splitext(fname)[0]
            dst = os.path.join(team_dir, base + ".webp")
            optimize_image(src, dst, max_width=600, quality=85, fmt='WEBP')
            os.remove(src)
    
    # Mentors subfolder
    mentors_dir = os.path.join(team_dir, "Mentors")
    if os.path.isdir(mentors_dir):
        for fname in os.listdir(mentors_dir):
            if fname.lower().endswith(('.png', '.jpg', '.jpeg')):
                src = os.path.join(mentors_dir, fname)
                base = os.path.splitext(fname)[0]
                dst = os.path.join(mentors_dir, base + ".webp")
                optimize_image(src, dst, max_width=600, quality=85, fmt='WEBP')
                os.remove(src)


def process_other_images():
    print("\n=== Other Images ===")
    
    # Robot (hero, above fold) - keep PNG for transparency
    optimize_image(
        os.path.join(PUBLIC_DIR, "robot.png"),
        max_width=1200,
        fmt='PNG'
    )
    
    # CTA background
    optimize_image(
        os.path.join(PUBLIC_DIR, "image.jpg"),
        max_width=1920,
        quality=75,
        fmt='JPEG'
    )
    
    # About section images
    for fname in ["image 1.jpeg", "image 2.jpeg", "image 3.jpeg", "image 5.jpeg"]:
        path = os.path.join(PUBLIC_DIR, fname)
        if os.path.exists(path):
            optimize_image(path, max_width=800, quality=80, fmt='JPEG')
    
    # Press images
    optimize_image(os.path.join(PUBLIC_DIR, "ancheta.png"), max_width=800, quality=85, fmt='WEBP')
    os.remove(os.path.join(PUBLIC_DIR, "ancheta.png"))
    
    optimize_image(os.path.join(PUBLIC_DIR, "antena pitesti.png"), max_width=800, quality=85, fmt='WEBP')
    os.remove(os.path.join(PUBLIC_DIR, "antena pitesti.png"))
    
    optimize_image(os.path.join(PUBLIC_DIR, "institutii.jpeg"), max_width=800, quality=80, fmt='JPEG')
    
    # Sponsors
    optimize_image(os.path.join(PUBLIC_DIR, "sponsors logo.png"), max_width=1200, fmt='PNG')
    
    # Logo
    optimize_image(os.path.join(PUBLIC_DIR, "logo.png"), max_height=200, fmt='PNG')
    
    # Icon/favicon
    optimize_image(os.path.join(PUBLIC_DIR, "icon.png"), max_width=256, max_height=256, fmt='PNG')
    
    # Backgrounds (small already, just optimize)
    for fname in ["background_section1.png", "background_section1_flipped.png", 
                  "bg section 3.png", "card.png"]:
        path = os.path.join(PUBLIC_DIR, fname)
        if os.path.exists(path):
            optimize_image(path, fmt='PNG')
    
    # Logo rebuild
    optimize_image(os.path.join(PUBLIC_DIR, "logo rebuild.png"), max_height=300, fmt='PNG')
    
    # Sponsors section image
    optimize_image(os.path.join(PUBLIC_DIR, "sponsors.png"), max_width=1200, fmt='PNG')


if __name__ == "__main__":
    process_team_images()
    process_other_images()
    print("\nDone!")
