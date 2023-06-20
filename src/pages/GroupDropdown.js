import React from 'react';

const GroupDropdown = ({ handleGroupChange }) => {
  // Array of options
  const options = [
    "Shaz's U10s",
    "Faris's U10s",
    "Michael's U11s",
    "Suhail's U11s",
    "Rob's U12s",
    "Nathan's U12s",
    "Meer's U13s",
    "Abdi's U13s",
    "No group",
  ];

  return (
    <div>
      <input
        placeholder="Group"
        id="group"
        type="text"
        list="groups"
        onChange={handleGroupChange}
      />
      <datalist id="groups">
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default GroupDropdown;
