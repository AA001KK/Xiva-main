import JoditEditor from "jodit-react";
import React, { useState } from "react";

const JoditMore = ({changeHandler, item, defaultContent}) => {
  const [content, setContent] = useState( defaultContent||"");

  return (
    <JoditEditor
      value={content}
      tabIndex={1} 
      
      onBlur={(newContent) => {
        setContent(newContent);
        changeHandler(item.lang, "more", newContent);
      }}
      onChange={(newContent) => {}}
    />
  );
};

export default JoditMore;
