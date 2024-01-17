import Heading from './Heading'
import classNames from 'classnames'

export default function RoundedFullCard({
    heading,
    subHeading,
    className, 
    headingClassName,
    subHeadingClassName,
    allHeadingClassName,
    text, 
    textClassName, 
    linearGradient = {"backgroundImage": "linear-gradient(0deg, #080403 50%, #f4f4f4 50%)"}, 
    illustration,
}) {
  
  const classes = classNames("rounded-none sm:rounded-[5rem]", {
     [className]: className,
  });

  return (
    <section style={linearGradient} className="sm:px-screen-padding">
      <div className={classes}>
        <div className='flex flex-col items-start justify-between'>
            <Heading
              heading={heading}
              headingClassName={headingClassName}
              subHeading={subHeading}
              subHeadingClassName={subHeadingClassName}
              className={allHeadingClassName}
            />
            {text && <p className={textClassName}>{text}</p>}
        </div>
        {illustration && illustration}
      </div>
    </section>
  )
}
