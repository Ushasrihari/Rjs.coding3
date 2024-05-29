// Write your code here.
import './index.css'

const ReusableBanner = props => {
  const {BannerDetails, Key} = props

  const {headerText, description, className} = BannerDetails
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <button className="button">Show more</button>
    </li>
  )
}

export default ReusableBanner
