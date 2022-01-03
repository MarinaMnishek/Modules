import ('./main.scss')

import { drawGalleryItem } from './item.js'
import items from './items.js'

const galleryRootElement = document.getElementById('gallery')
items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))