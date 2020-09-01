const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
  uid: "ABC123",
  username: "JohnDoe",
});

export const getUsuarioActivo = (nombre = "John") => ({
  uid: "ABC123",
  username: nombre,
});
