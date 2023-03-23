import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ setValue, config }) => {
  const editor = useRef(null);

  return (
    <div className="RichTextEditor">
      <JoditEditor ref={editor} onChange={(content) => setValue(content)} />
    </div>
  );
};

export default RichTextEditor;
