import swal from "sweetalert2";

export const errorMessage = (
  customTitle,
  customDescription,
  customButtonText
) =>
  swal({
    title: customTitle || "Ócurrio un error",
    text: customDescription || "Intentalo nuevamente",
    type: "error",
    confirmButtonText: customButtonText || "Verificar"
  });

export const successMessage = (
  customTitle,
  customDescription,
  customButtonText
) =>
  swal({
    title: customTitle || "Datos guardados!",
    text: customDescription,
    type: "success",
    confirmButtonText: customButtonText || "OK"
  });
