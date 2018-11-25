import propTypes from "prop-types";

let { string } = propTypes;

const Balance = ({ name, amount }) => {
  return (
    <svg
      version="1.1"
      id="elp-badge"
      className="badge"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 289.1 289.1"
      enableBackground="new 0 0 289.1 289.1"
      xmlSpace="preserve"
    >
      <defs>
        <filter id="dropshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
          <feOffset dx="-5" dy="5" result="offsetblur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        className="circle"
        fill="#28BDEE"
        cx="144.5"
        cy="144.5"
        r="144.5"
      />
      <path
        id="SVGID_x5F_2_x5F_"
        fill="none"
        d="M31.1,129c10.4-62.1,69.2-104,131.4-93.6s104,69.2,93.6,131.4
        c-10.4,62.1-69.2,104-131.4,93.6C62.5,249.9,20.6,191.1,31.1,129z"
      />
      <text textAnchor="middle">
        <textPath xlinkHref="#SVGID_x5F_2_x5F_" startOffset="160">
          <tspan
            className="badge-header"
            fill="#FFFFFF"
            fontFamily="'Open Sans'"
            fontSize="40"
          >{`Hello ${name}`}</tspan>
        </textPath>
      </text>
      <text
        className="badge-balance"
        transform="matrix(0.9862 0.1656 -0.1656 0.9862 135 150)"
        fill="#FFFFFF"
        fontFamily="'Open Sans'"
        fontWeight="bold"
        fontSize="60"
        textAnchor="middle"
      >{`${amount}`}</text>
      <text
        transform="matrix(0.9862 0.1656 -0.1656 0.9862 245.5249 190)"
        fill="#FFFFFF"
        fontFamily="'Open Sans'"
        fontWeight="400"
        fontSize="32"
        textAnchor="middle"
      />
      <path
        id="SVGID_x5F_1_x5F_"
        fill="none"
        d="M263.9,172.8c11-65.5-33.2-127.6-98.7-138.6S37.5,67.4,26.5,133s33.2,127.6,98.7,138.6
                                               C190.8,282.6,252.9,238.4,263.9,172.8z"
      />
      <text textAnchor="middle">
        <textPath xlinkHref="#SVGID_x5F_1_x5F_" startOffset="580">
          <tspan
            className="badge-footer"
            fill="#FFFFFF"
            fontFamily="'Open Sans'"
            fontSize="40"
          >
            your balance
          </tspan>
        </textPath>
      </text>
    </svg>
  );
};

Balance.propTypes = {
  name: string.isRequired,
  amount: string.isRequired
};

export default Balance;
