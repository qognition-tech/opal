type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    Logo: (props: IconProps) => (
        <svg width="400" height="300" viewBox="70 70 260 160" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#4F46E5", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#312E81", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FCD34D", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#F59E0B", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <circle cx="150" cy="150" r="80" fill="url(#blueGradient)" strokeWidth="0" />
            <circle cx="250" cy="150" r="80" fill="url(#yellowGradient)" strokeWidth="0" />
            <circle cx="150" cy="150" r="40" fill="white" />
            <circle cx="250" cy="150" r="40" fill="white" />
        </svg>
    ),
    Quote: (props: IconProps) => (
        <svg
            fill="currentColor"
            width="800px"
            height="800px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M5.315 3.401c-1.61 0-2.916 1.343-2.916 3 0 1.656 1.306 3 2.916 3 2.915 0 .972 5.799-2.916 5.799v1.4c6.939.001 9.658-13.199 2.916-13.199zm8.4 0c-1.609 0-2.915 1.343-2.915 3 0 1.656 1.306 3 2.915 3 2.916 0 .973 5.799-2.915 5.799v1.4c6.938.001 9.657-13.199 2.915-13.199z" />
        </svg>
    ),
    Facebook: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#facebook__a)" {...props}>
            <defs>
                <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="facebook__a">
                    <stop offset="0%" stopColor="#0062E0" />
                    <stop offset="100%" stopColor="#19AFFF" />
                </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
            <path
                fill="#FFF"
                d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            />
        </svg>
    ),
};
