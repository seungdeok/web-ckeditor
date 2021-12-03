/* eslint-disable global-require */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Editor = ({
  onChange,
  isEditorLoaded,
  name,
  value,
}) => {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
  }, []);

  return (
    <div>
      {isEditorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  isEditorLoaded: PropTypes.bool.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Editor.defaultProps = {
  name: '',
};

export default Editor;
