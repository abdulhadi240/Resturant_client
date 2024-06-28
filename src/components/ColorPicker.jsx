// components/ColorPicker.js
import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onChange }) => {
  const [color, setColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div>
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
