import React, { useEffect, useRef, useState } from "react";
import '../styles/Searchbar.scss';
import tattooStylesData from '../../../bdd/stylesTattoo.json';

interface TattooStyle {
    value: string;
    label: string;
}

const Searchbar: React.FC = () => {

    const tattooStyles: TattooStyle[] = tattooStylesData.styles.map((style: string) => ({
        value: style,
        label: style
    })); 
    
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [isListVisible, setListVisible] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (listRef.current && !listRef.current.contains(event.target as Node)) {
                setListVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleListVisibility = () => {
        setListVisible(!isListVisible);
    }

    const handleClickStyle = (style: string) => {
        setSelectedStyles([...selectedStyles, style]);
    }

    return (
        <div className="searchbar">
            <ul onClick={toggleListVisibility} ref={listRef}>
                <li className="optionStyleTattoo">Choisissez un style</li>
                {tattooStyles.map((style, index) => (
                    <li
                        className="optionStyleTattoo?"                   
                        key={index} 
                        value={style.value}
                        onClick={() => handleClickStyle(style.value)}
                    >{style.label}
                    </li>
                ))}
            </ul>
            <input />
        </div>
    )
}

export default Searchbar;