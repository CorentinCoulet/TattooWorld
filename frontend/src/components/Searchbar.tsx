import React, { useEffect, useRef, useState } from "react";
import '../styles/Searchbar.scss';
import tattooStylesData from '../../../bdd/stylesTattoo.json';

interface TattooStyle {
    value: string;
    label: string;
}

const Searchbar: React.FC = () => {

    const [colorboxOpen, setColorboxOpen] = useState(false);
    const [selected, setSelected] = useState<number[]>([]);
    const tattooStyles: TattooStyle[] = tattooStylesData.styles.map((style: string) => ({
        value: style,
        label: style
    })); 
    
    const handleColorboxToggle = () => {
        setColorboxOpen(!colorboxOpen);
    }

    const handleStyleSelected = (index: number) => {
        const isSelected = selected.includes(index);
        if(isSelected){
            setSelected(selected.filter((i) => i !== index));
        } else {
            setSelected([...selected, index]);
        }
    }

    return (
        <div className="searchbar">
            <ul>
                <li className="optionStyleTattoo" onClick={handleColorboxToggle}>
                    Choisissez un style
                </li>
                {colorboxOpen && (
                    <div className="stylesColorbox">
                        {tattooStyles.map((style, index) => (
                            <li 
                                key={index} 
                                value={style.value} 
                                onClick={() => handleStyleSelected(index)}
                                className={selected.includes(index) ? "styleOption selected" : "styleOption"}
                            >
                                {style.label}
                            </li>
                        ))}
                    </div>
                )} 
            </ul>
            <input />
        </div>
    )
}

export default Searchbar;