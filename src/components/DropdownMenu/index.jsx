import React, { useState } from "react";

const DropdownMenu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelect, setCurrentSelect] = useState("한국어");
  return (
    <div className="relative inline-block text-left">
      {isOpen && (
        <div
          className="origin-bottom-left absolute right-0 mt-2 w-56 transform -translate-y-[100%]
        bg-white-A700
          max-h-[200px] overflow-y-scroll"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuItems.map((item, index) => (
              <span
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700
                      hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setCurrentSelect(item.text);
                  setIsOpen(false);
                }}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center min-w-[50px] 
        px-4 py-2
        font-medium hover:bg-gray-50"
      >
        {currentSelect} ▼
      </button>
    </div>
  );
};

export { DropdownMenu };
