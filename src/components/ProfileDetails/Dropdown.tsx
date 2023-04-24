import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import styles from './Dropdown.module.css'

type Option = {
    name: string,
    value: string
}

export interface IDropdownProps {
    title: string,
    options: Option[],
    editable: Boolean,
    selectState: string,
    setOption: (value: string) => void
}

export function Dropdown({ title, options, editable, setOption, selectState }: IDropdownProps) {
    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className={styles.dropdownContainer}>
            <div onClick={() => {if(editable) setShowOptions(prv => !prv)}} className={styles.dropdown}>
                <p>{selectState}</p>
                <BiChevronDown />
            </div>
            {showOptions && editable && <ul>
                {options.map(opt => <li className={selectState === opt.value ? styles.selected : ''} onClick={(e) => setOption(opt.value)}>{opt.name}</li>)}
            </ul>}
        </div>
    );
}
