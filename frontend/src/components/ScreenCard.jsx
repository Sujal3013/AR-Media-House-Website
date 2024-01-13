import classNames from 'classnames'

export default function ScreenCard({headingComponent, illustration, button1, button2, className, shapes, style, ...other}) {
  const classes = classNames("px-screen-padding py-screen-padding rounded-3xl bg-secondary-500 relative", {
      [className]: className,
  })

  return (
    <section
      className='px-screen-padding'
      style={style}
    >
      <div className={classes} {...other}>
        <div className='flex flex-col'>
          {headingComponent && headingComponent}
          <div className='flex gap-4'>
              {button1 && button1}
              {button2 && button2}
          </div>
        </div>
          {illustration && illustration}
  
        {shapes && shapes}
        </div>
    </section>
  )
}
