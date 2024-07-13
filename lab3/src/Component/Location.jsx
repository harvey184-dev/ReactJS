import { useState } from "react";
import './Location.css';

function getLocation(setLocation) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            setLocation(lat)
        })
    }
}

const getSeason = (lat, month) => {
    if (month < 3 && month > 8) {
        return lat > 0 ? 'winter' : 'summer'
    } else {
        return lat > 0 ? 'summer' : 'winter'
    }
}

const seasonconfig = {
    summer: {
        text: 'Nóng quá, thèm VitaminC',
        iconName: 'sun'
    },
    winter: {
        text: 'Trời ơi nó lạnh!',
        iconName: 'snowflake'
    }
}

export default function Location() {
    const [lat, setLocation] = useState(null)
    const season = getSeason(lat, new Date().getMonth())
    const { text, iconName } = seasonconfig[season]
    return (
        <>
            <div>
                <button onClick={() => getLocation(setLocation)}>Get Location</button>
                <div className={`season-display ${season}`}>
                    <i className={`${iconName} icon`}></i>
                    <h1>{text}</h1>
                    <i className={`${iconName} icon`}></i>
                </div>
            </div>
        </>
    )
}