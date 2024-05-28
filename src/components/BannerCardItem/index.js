// Write your code here.
import './index.css'

const ReusableBanner = props => {
  const {BannerList} = props
  const {headerText, description, className} = BannerList
  return (
    <li class={className}>
      <h1 class="heading">{headerText}</h1>
      <p class="paragraph">{description}</p>
      <button class="button">Show more</button>
    </li>
  )
}

export default ReusableBanner
