import { useState } from 'react';
import styles from './SearchBar.module.css'
import { BiSearch } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';

type Props = {}

type Option = {
  name: String
}

const options: Option[] = [
  { name: 'Video' },
  { name: 'Course' },
  { name: 'Instructor' },
  { name: 'All' },
]


function SearchFilter() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={styles.searchFilter}>
      <BsFilter onClick={() => setShowOptions(prv => !prv)} color={'var(--text-color)'} size={'16px'} />
      {showOptions && <ul className={styles.filterOptionsBox}>
        {options.map((opt) => <li>{opt.name}</li>)}
      </ul>}
    </div>
  )
}

export default function SearchBar({ }: Props) {
  return (
    <div className={styles.searchBox}>
      <BiSearch color={'var(--text-color)'} size={'16px'} />
      <input type="search" placeholder='Search and Learn' />
      <SearchFilter />
    </div>
  )
}