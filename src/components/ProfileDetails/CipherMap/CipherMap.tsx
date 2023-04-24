import { useEffect, useState } from "react";
import styles from './CipherMap.module.css'

export interface ICipherMapProps {

}

const cipherMapArr = [

]

type CalObject = { cp: Number, date: Number };

function generateCalArray(): CalObject[] {
    let calArray = [];
    let firstDate = 1672531200; //timestapm 1 jan 2023
    // const date = new Date(1666632563517);
    for (let i = 0; i <= 365; i++) {
        calArray.push({ cp: 0, date: (firstDate + 86400) })
    }
    return calArray
}



export function CipherMap({user}: any) {
    const [cpArr, setCpArr] = useState<CalObject[]>()
    useEffect(() => {
        let cpArrr = generateCalArray();
        setCpArr(cpArrr)
    }, [])
    return (
        <div className={styles.cipherMap}>
            <h3>Cipher Map</h3>
            <svg style={{width: '100%', height: '180px'}}>
                {cpArr?.map((item, i) => <rect x={(Math.floor(i / 7) * 26)}
                    y={(26 * (i % 7))} width="24" height="24"
                    onMouseOver={e => (e.target as HTMLElement).setAttribute('style', 'stroke-width:1;stroke:rgb(255,255,255)')}
                />)}
            </svg>
        </div>
    );
}
