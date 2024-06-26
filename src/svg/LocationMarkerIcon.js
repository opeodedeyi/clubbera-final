const LocationMarkerIcon = ({ color='--color-on-brand', className = '', width="14", height="14" }) => (
    <svg className={`${className}`} width={width} height={height} viewBox="0 0 14 14" fill="none">
        <path d="M6.99993 7.83434C8.00509 7.83434 8.81993 7.01949 8.81993 6.01434C8.81993 5.00918 8.00509 4.19434 6.99993 4.19434C5.99477 4.19434 5.17993 5.00918 5.17993 6.01434C5.17993 7.01949 5.99477 7.83434 6.99993 7.83434Z" stroke={`var(${color})`} strokeWidth="0.9"/>
        <path d="M2.11158 4.95234C3.26074 -0.099328 10.7449 -0.0934946 11.8882 4.95817C12.5591 7.92151 10.7157 10.4298 9.09991 11.9815C7.92741 13.1132 6.07241 13.1132 4.89408 11.9815C3.28408 10.4298 1.44075 7.91567 2.11158 4.95234Z" stroke={`var(${color})`} strokeWidth="0.9"/>
    </svg>
);

export default LocationMarkerIcon;