import { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import classNames from 'classnames';

export default function HomePage3StepPath({className}) {
  const classes = classNames("py-[30vh]", {
    [className]: className,
  });

  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start start", "end start"],
  });

  return (
    <svg width="250" height="1300" viewBox="0 0 250 1199" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <g ref={pathRef} clipPath="url(#clip0_684_2186)">
        <motion.path 
            d="M78.8285 31.0684V504.063H176V890.838H72V1167.11" 
            stroke="#080403"
            strokeWidth={1}
            style={{pathLength: scrollYProgress}}
        />
        </g>
        <motion.path d="M36.1362 1195.97C56.0937 1202.98 77.9576 1192.49 84.9706 1172.53C91.9837 1152.58 81.4902 1130.71 61.5327 1123.7C41.5752 1116.69 19.7113 1127.18 12.6982 1147.14C5.68518 1167.09 16.1787 1188.96 36.1362 1195.97Z" fill="#FF9356"/>
        <path d="M27.9357 1159.25C27.9252 1154.44 28.7842 1151.06 30.5127 1149.14C32.2411 1147.21 34.8833 1146.23 38.4391 1146.21C39.8672 1146.16 41.292 1146.37 42.6447 1146.83C43.6431 1147.18 44.5567 1147.74 45.3269 1148.47C45.9787 1149.08 46.5315 1149.8 46.9657 1150.58C47.3965 1151.41 47.7233 1152.28 47.9384 1153.18C48.4198 1155.12 48.6621 1157.1 48.6599 1159.1C48.6781 1163.7 47.9091 1167.06 46.3528 1169.2C44.7965 1171.34 42.1141 1172.43 38.3056 1172.47C36.5244 1172.54 34.7509 1172.2 33.1269 1171.46C31.8021 1170.77 30.6837 1169.74 29.8851 1168.48C29.1813 1167.3 28.6953 1166.01 28.4504 1164.66C28.0955 1162.88 27.923 1161.07 27.9357 1159.25ZM34.9272 1159.26C34.9297 1162.48 35.2342 1164.67 35.7965 1165.86C35.9838 1166.38 36.3218 1166.82 36.7658 1167.13C37.2098 1167.45 37.7391 1167.62 38.2836 1167.63C38.6284 1167.63 38.9705 1167.57 39.2899 1167.44C39.6094 1167.31 39.8999 1167.12 40.1446 1166.87C40.7508 1166.21 41.1501 1165.38 41.2935 1164.5C41.5899 1162.82 41.7117 1161.12 41.6568 1159.42C41.6412 1156.06 41.3494 1153.79 40.7813 1152.64C40.5768 1152.12 40.2212 1151.68 39.7613 1151.38C39.3015 1151.07 38.7591 1150.91 38.2059 1150.92C37.6556 1150.91 37.1185 1151.08 36.671 1151.4C36.2234 1151.73 35.8881 1152.18 35.7126 1152.7C35.1843 1153.88 34.9224 1156.06 34.9272 1159.26Z" fill="#F4F4F4"/>
        <path d="M58.3722 1153.93L51.7125 1152.75C52.1557 1150.8 53.2817 1149.07 54.8873 1147.88C56.457 1146.76 58.6791 1146.2 61.5538 1146.2C64.8655 1146.18 67.2708 1146.77 68.7419 1148.03C69.4459 1148.58 70.0131 1149.28 70.3991 1150.09C70.7852 1150.9 70.9797 1151.78 70.9675 1152.67C70.9868 1153.74 70.6753 1154.78 70.0762 1155.65C69.3696 1156.64 68.4373 1157.44 67.3574 1157.99C68.1443 1158.16 68.9021 1158.44 69.6062 1158.83C70.4316 1159.32 71.1103 1160.03 71.5729 1160.88C72.0669 1161.81 72.3111 1162.85 72.2817 1163.91C72.2811 1165.4 71.8855 1166.87 71.135 1168.16C70.3678 1169.51 69.2075 1170.61 67.8069 1171.29C66.004 1172.1 64.0378 1172.48 62.0633 1172.4C60.2104 1172.48 58.3595 1172.2 56.6072 1171.6C55.3284 1171.1 54.1956 1170.29 53.3137 1169.24C52.392 1168.07 51.7155 1166.73 51.3251 1165.3L58.3619 1164.35C58.4876 1165.44 58.9375 1166.47 59.6533 1167.3C60.2586 1167.85 61.0583 1168.14 61.878 1168.11C62.3237 1168.12 62.7658 1168.03 63.1733 1167.85C63.5808 1167.67 63.9438 1167.4 64.2368 1167.06C64.8921 1166.3 65.2274 1165.31 65.1735 1164.3C65.2315 1163.3 64.9017 1162.32 64.2532 1161.57C63.9395 1161.24 63.559 1160.98 63.1371 1160.8C62.7151 1160.63 62.2612 1160.55 61.8056 1160.57C61.0298 1160.61 60.2628 1160.75 59.5244 1160.99L59.8722 1155.96C60.1762 1156 60.4827 1156.03 60.79 1156.04C61.6454 1156.06 62.4729 1155.74 63.0946 1155.15C63.3883 1154.89 63.6222 1154.56 63.7806 1154.2C63.9389 1153.84 64.018 1153.45 64.0124 1153.06C64.031 1152.72 63.9791 1152.38 63.8599 1152.06C63.7408 1151.75 63.557 1151.46 63.3203 1151.21C63.0667 1150.97 62.767 1150.79 62.4395 1150.67C62.112 1150.55 61.7637 1150.5 61.416 1150.52C61.0454 1150.51 60.6757 1150.57 60.3286 1150.7C59.9815 1150.83 59.6639 1151.03 59.3943 1151.28C58.7802 1152.04 58.4221 1152.96 58.3722 1153.93Z" fill="#F4F4F4"/>
        <motion.path d="M228.231 497.135C233.025 476.825 220.446 456.474 200.135 451.68C179.825 446.886 159.474 459.465 154.68 479.776C149.886 500.086 162.465 520.437 182.776 525.231C203.086 530.025 223.437 517.446 228.231 497.135Z" fill="#FF9356"/>
        <path d="M169.003 487.9C169.003 483.124 169.883 479.781 171.643 477.871C173.403 475.961 176.082 475.005 179.679 475.005C181.127 474.963 182.57 475.174 183.942 475.629C184.95 475.981 185.874 476.532 186.656 477.248C187.316 477.861 187.874 478.571 188.311 479.352C188.743 480.17 189.068 481.038 189.28 481.935C189.765 483.854 190.007 485.825 190 487.803C190 492.358 189.211 495.696 187.633 497.817C186.055 499.937 183.337 500.995 179.481 500.99C177.674 501.066 175.875 500.719 174.234 499.978C172.877 499.3 171.733 498.276 170.923 497.015C170.208 495.843 169.717 494.554 169.475 493.211C169.134 491.461 168.976 489.682 169.003 487.9ZM176.087 487.9C176.087 491.101 176.363 493.286 176.915 494.457C177.101 494.96 177.437 495.396 177.88 495.71C178.323 496.023 178.852 496.198 179.398 496.214C179.746 496.217 180.091 496.153 180.413 496.025C180.736 495.897 181.029 495.708 181.277 495.469C181.896 494.813 182.304 493.994 182.452 493.113C182.757 491.455 182.884 489.771 182.833 488.087C182.833 484.741 182.543 482.496 181.964 481.352C181.758 480.84 181.399 480.402 180.933 480.094C180.468 479.786 179.918 479.624 179.357 479.627C178.794 479.62 178.244 479.787 177.785 480.104C177.326 480.421 176.981 480.872 176.799 481.392C176.344 482.582 176.087 484.752 176.087 487.925V487.9Z" fill="#F4F4F4"/>
        <path d="M212.903 500H192C192.251 497.958 193.001 496.005 194.187 494.307C195.398 492.533 197.674 490.427 201.015 487.99C202.465 487.035 203.781 485.899 204.929 484.61C205.445 483.989 205.745 483.223 205.785 482.423C205.795 482.066 205.728 481.71 205.589 481.38C205.45 481.049 205.242 480.751 204.978 480.504C204.385 479.985 203.618 479.698 202.823 479.698C202.027 479.698 201.26 479.985 200.668 480.504C199.989 481.33 199.591 482.344 199.53 483.402L192.557 482.849C192.714 481.261 193.23 479.726 194.066 478.356C194.825 477.254 195.897 476.392 197.149 475.877C198.909 475.232 200.784 474.94 202.661 475.016C204.602 474.929 206.543 475.196 208.384 475.806C209.698 476.302 210.825 477.181 211.612 478.325C212.391 479.446 212.799 480.775 212.782 482.131C212.774 483.655 212.308 485.143 211.442 486.411C210.124 488.184 208.482 489.705 206.6 490.896C205.196 491.843 204.259 492.506 203.791 492.885C203.323 493.265 202.766 493.762 202.121 494.378H213L212.903 500Z" fill="#F4F4F4"/>
        <motion.path d="M89.7729 51.2564C93.0388 31.1368 79.3762 12.1791 59.2566 8.91321C39.1369 5.64733 20.1793 19.31 16.9134 39.4296C13.6475 59.5492 27.3102 78.5069 47.4298 81.7728C67.5494 85.0386 86.5071 71.376 89.7729 51.2564Z" fill="#FF9356" />
        <path d="M34.0022 44.4043C34.0022 39.812 34.7981 36.5974 36.39 34.7605C37.9819 32.9236 40.4046 32.0051 43.6582 32.0051C44.9673 31.9643 46.2728 32.1673 47.5131 32.6045C48.4265 32.9455 49.2642 33.475 49.9758 34.1612C50.5706 34.7529 51.0754 35.4353 51.4729 36.1849C51.8629 36.9715 52.1571 37.8056 52.3486 38.6679C52.7878 40.5139 53.0065 42.4092 52.9999 44.3109C52.9999 48.6905 52.2863 51.8999 50.8591 53.9392C49.4319 55.9784 46.9742 56.9955 43.486 56.9903C41.8523 57.0626 40.2255 56.7291 38.7404 56.0174C37.5137 55.3657 36.4792 54.3814 35.7462 53.1686C35.0998 52.0419 34.6559 50.8023 34.4363 49.5103C34.1256 47.828 33.9801 46.1172 34.0022 44.4043ZM40.4096 44.4043C40.4096 47.4814 40.6591 49.583 41.1581 50.709C41.3262 51.1923 41.6302 51.6119 42.0307 51.9132C42.4312 52.2144 42.9096 52.3833 43.4037 52.398C44.0411 52.4026 44.6545 52.1452 45.1103 51.6819C45.6646 51.0474 46.0333 50.2617 46.1733 49.4169C46.4417 47.8216 46.5545 46.2022 46.5101 44.5833C46.5101 41.3662 46.2606 39.2075 45.7616 38.1074C45.5761 37.617 45.2524 37.1963 44.833 36.9005C44.4136 36.6047 43.918 36.4475 43.4112 36.4495C42.9016 36.4409 42.4024 36.6005 41.9855 36.9054C41.5686 37.2103 41.2553 37.6447 41.0907 38.1464C40.6366 39.2828 40.4096 41.3765 40.4096 44.4277V44.4043Z" fill="#F4F4F4"/>
        <path d="M71 32V57H64.1453V40.6441C63.1373 41.4295 62.0597 42.1198 60.926 42.7064C59.6616 43.3169 58.3483 43.8191 57 44.2076V38.6214C58.9381 38.0592 60.7581 37.1462 62.3707 35.927C63.6495 34.8758 64.675 33.5467 65.3702 32.0395L71 32Z" fill="#F4F4F4"/>
        <defs>
        <clipPath id="clip0_684_2186">
        <rect width="250" height="1142" fill="white" transform="translate(0 25)"/>
        </clipPath>
        </defs>
    </svg>
  )
}
