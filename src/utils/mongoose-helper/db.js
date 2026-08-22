import { MONGODB_URI } from "@/constants/env";
import mongoose from "mongoose";

if (!MONGODB_URI) {
  throw new Error(
    "MongoDB: Error critico no existe la variable de entorno MONGODB_URI",
  );
}

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

export const createConnetion = async () => {
  try {
    const moongosePromise = await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    return moongosePromise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
};

export const conectToData = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("=> Creando nueva conexión a MongoDB...");
    cached.promise = createConnetion(); // Importante devolver la promea sin resolver
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.error(
      "MongoDB: error critico en la conexion a la base de datos - ",
      error,
    );
    throw error;
  }

  return cached.conn;
};

mongoose.connection.on("connected", () =>
  console.log("=> Conexión exitosa a MongoDB..."),
);

mongoose.connection.on("error", (error) =>
  console.log(`MongoDB: Error en la conexion ... ${error}`),
);
