const DownArrowIcon = ({ color='--svg-sub-color', className = '', width="12", height="12" }) => (
    <svg className={`${className}`} width={width} height={height} viewBox="0 0 12 12" fill="none">
        <path d="M9.96004 4.4751L6.70004 7.7351C6.31504 8.1201 5.68504 8.1201 5.30004 7.7351L2.04004 4.4751" stroke={`var(${color})`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default DownArrowIcon;