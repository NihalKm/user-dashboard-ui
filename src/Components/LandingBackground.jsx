export default function LandingBackground () {

    return(
        <div style={{top:"-50px",width:"100%",position:"fixed"}}>
            <svg style={{background:"white"}} viewBox="0 0 120 100">
            <defs>
                <radialGradient id="RadialGradient1">
                <stop offset="0%" stopColor="#3F55C8" />
                <stop offset="50%" stopColor="#3F55C8" />
                <stop offset="100%" stopColor="#6932C8" />
                </radialGradient>
            </defs>
            <path d="M 0 0 L 128 0 L 128 34 C 91 47 85 30 74 42 C 35 7 19 47 0 23 L 0 0" fill="url(#RadialGradient1)" stroke="#DED3F2"></path>
            </svg>
        </div>
    )
}