import {
  FailureImg,
  FailureHeading,
  FailureDesc,
  FailureBtn,
} from './styledComponents'

const FailureView = props => {
  const {isLight, clickRetry} = props
  const notFoundImg = isLight
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
  const onCLickRetry = () => {
    clickRetry()
  }
  return (
    <>
      <FailureImg src={notFoundImg} alt="failure view" />
      <FailureHeading isLight={isLight}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDesc isLight={isLight}>
        We are having some trouble to complete your request. Please try again
      </FailureDesc>
      <FailureBtn type="button" onClick={onCLickRetry}>
        Retry
      </FailureBtn>
    </>
  )
}

export default FailureView
