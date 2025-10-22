'use client';
import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';



export function HeraMultiSelect ({className, value, setValue, options}
  :
  {
    className : string,
    value : Option[], 
    setValue : React.Dispatch<React.SetStateAction<Option[]>>
    options : Option[]
  }) {
  return (
      <div className={className}>
        <MultipleSelector
        value={value}
        onChange={setValue}
        defaultOptions={options}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
      </div>
  );
};

