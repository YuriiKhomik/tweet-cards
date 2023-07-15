import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['all', 'follow', 'followings'];
const defaultOption = options[0];

export const DropdownMenu = ({ onChange }) => {
  return (
    <Dropdown
      options={options}
      onChange={onChange}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};
