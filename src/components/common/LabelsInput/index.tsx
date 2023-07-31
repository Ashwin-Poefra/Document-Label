import React, { KeyboardEvent } from 'react';

interface LabelsInputProps {
  labels: string[];
  onChange: (labels: string[]) => void;
}

export const LabelsInputComponent: React.FC<LabelsInputProps> = ({
  labels,
  onChange,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    const value = event.currentTarget.value;
    if (!value.trim()) {
      return;
    }

    onChange([...labels, value]);
    event.currentTarget.value = '';
  };

  function removeTag(index: number) {
    onChange(labels.filter((label, i) => i !== index));
  }

  return (
    <div className="flex items-center flex-wrap gap-2 border-2 rounded-sm p-2">
      {labels.map((label, index) => (
        <div
          className="inline-flex gap-2 bg-blue-400 py-1 pl-3 pr-1 rounded-2xl cursor-pointer"
          key={index}
        >
          <span className="">{label}</span>
          <span
            className="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-[50%] hover:bg-gray-400"
            onClick={() => removeTag(index)}
          >
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className=" flex-grow py-2 px-0 border-none outline-none"
        placeholder="Type new label..."
      />
    </div>
  );
};
