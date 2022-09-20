import React from "react";
import { useDropzone } from "react-dropzone";
import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
export function DropZoneInput({
  setValue,
  getValues,
  setError,
  fieldName,
  clearErrors,
  error
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": []
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        );
        setValue(fieldName, file[0], {
          shouldValidate: true
        });
        clearErrors([fieldName]);
      } else {
        setError(fieldName, { message: "Selecione apenas uma imagem!" });
      }
    }
  });

  function handleClickClear() {
    setValue(fieldName, null, {
      shouldValidate: true
    });
  }

  return (
    <Container isDragActive={isDragActive} error={error}>
      <div {...getRootProps({ className: "dropzone" })}>
        {!getValues(fieldName) && (
          <p>{error ? error.message : "Adicione uma imagem."}</p>
        )}
        <input {...getInputProps()} />
      </div>

      {getValues(fieldName) && <AiOutlineClose onClick={handleClickClear} />}
      <aside>
        {getValues(fieldName) && (
          <img src={getValues(fieldName).preview} alt="" />
        )}
      </aside>
    </Container>
  );
}
