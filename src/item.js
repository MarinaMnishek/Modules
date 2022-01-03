const ITEM_TYPES = {
  image: drawImage,
  audio: drawAudio,
  video: drawVideo
}

function drawImage(item) {
  const imgElement = document.createElement('img')
  imgElement.classList = 'gallery__item__image'
  imgElement.src = item.resource
  return imgElement
}

function drawAudio(item) {
  const audioElement = document.createElement('audio')
  audioElement.classList = 'gallery__item__audio'
  audioElement.src = item.resource
  audioElement.controls = true
  return audioElement
}

function drawVideo(item) {
  const videoElement = document.createElement('video')
  videoElement.classList = 'gallery__item__video'
  videoElement.src = item.resource
  videoElement.controls = true
  return videoElement
}


export function drawGalleryItem(item) {
  const itemElement = document.createElement('div')
  itemElement.classList = 'gallery__item'

  const resourseWrapElement = document.createElement('div')
  resourseWrapElement.classList = 'gallery__item__resourse'

  const drawerForType = ITEM_TYPES[item.type]
  resourseWrapElement.appendChild((drawerForType(item)))

  const titleElement = document.createElement('span')
  titleElement.classList = 'gallery__item__title'
  titleElement.textContent = item.title

  itemElement.appendChild(resourseWrapElement)
  itemElement.appendChild(titleElement)

  return itemElement
}