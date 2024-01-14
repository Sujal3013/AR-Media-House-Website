import { useInView } from "react-intersection-observer"
import CountUp from "react-countup";
import classNames from "classnames";

const AnimateNumber = ({from=0, to=1000, duration=1000, className}) => {
  const [ref, inView] = useInView({triggerOnce: true});
  
  const classes = ("", {
    [className]: className
  })
  return (
    <h1 ref={ref}>
      {
        inView ? 
        <CountUp start={from} end={to} duration={duration} />
        :
        from
      }
    </h1>
  )
};

export default AnimateNumber;
