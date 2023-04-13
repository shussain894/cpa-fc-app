import React from 'react';

const GroupDropdown = ({ handleGroupChange }) => {
  // Array of options
  const options = [
    "Shaz's U9s",
    "Faris's U9s",
    "Michael's U10s",
    "Suhail's U10s",
    "Rob's U11s",
    "Meer's U12s",
    "Amjid's U12s",
    "Pravin's U13s",
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
