import './index.css'

const ImageItem = props => {
  const {imageDetails, onImageChange} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails

  const onChangeImage = () => {
    onImageChange(thumbnailUrl)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={onChangeImage}>
        <img src={thumbnailUrl} className="img-item" alt={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageItem
