import React, { useState, useEffect, useRef } from 'react';
import '../styles/Selectpicker.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectpickerProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const Selectpicker: React.FC<SelectpickerProps> = ({
  options,
  selectedOptions,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOption = (value: string) => {
    const isSelected = selectedOptions.includes(value);
    let newSelection;

    if (isSelected) {
      newSelection = selectedOptions.filter(option => option !== value);
    } else {
      newSelection = [...selectedOptions, value];
    }

    onChange(newSelection);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    // Cleanup the event listener when the component unmounts or the select closes
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen]);

  const getSelectedLabels = () => {
    return options
      .filter(option => selectedOptions.includes(option.value))
      .map(option => option.label);
  };

  const renderSelectedLabels = () => {
    const labels = getSelectedLabels();
    if (labels.length > 3) {
      return `${labels.slice(0, 3).join(', ')}...`;
    }
    return labels.join(', ') || 'Select options';
  };

  return (
    <div className="selectpicker" ref={selectRef}>
      <div className="selectpicker__trigger" onClick={() => setIsOpen(!isOpen)}>
        <span>{renderSelectedLabels()}</span>
        <div className="arrow"></div>
      </div>
      {isOpen && (
        <div className="selectpicker__options">
          {options.map(option => (
            <div
              key={option.value}
              className={`selectpicker__option ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
              onClick={() => toggleOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selectpicker;
