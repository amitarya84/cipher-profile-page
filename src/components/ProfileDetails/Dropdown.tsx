import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import styles from './Dropdown.module.css'

type Option = {
    name: String,
    value: String
}

export interface IDropdownProps {
    title: String,
    options: Option[]
}

export function Dropdown({ title, options }: IDropdownProps) {
    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className={styles.dropdownContainer}>
            <div onClick={() => setShowOptions(prv => !prv)} className={styles.dropdown}>
                <p>{title}</p>
                <BiChevronDown />
            </div>
            {showOptions && <ul>
                {options.map(opt => <li>{opt.name}</li>)}
            </ul>}
        </div>
    );
}
