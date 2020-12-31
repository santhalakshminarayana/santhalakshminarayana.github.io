import os
import argparse
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('image_name')
args = parser.parse_args()

im = Image.open('images/' + args.image_name)
bg = Image.new('RGB', im.size, (255, 255, 255))
bg.paste(im, (0, 0), im)
bg.save('images/' + args.image_name.split('.')[0] + '.jpg', quality = 70)
if (args.image_name.split('.')[1] == 'png'):
	os.remove('images/' + args.image_name)