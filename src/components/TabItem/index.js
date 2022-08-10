import './index.css'

const TabItem = props => {
  const {eachTab, clickTabItem, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'add-style' : ''
  return (
    <li className="item">
      <button
        type="button"
        className={`btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
