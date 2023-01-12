import Loader from 'react-loader-spinner'

const LoaderView = props => {
  const {isLight} = props
  return (
    <div className="loader-container">
      <Loader
        type="ThreeDots"
        color={isLight ? '#000' : '#fff'}
        height="50"
        width="50"
      />
    </div>
  )
}

export default LoaderView
