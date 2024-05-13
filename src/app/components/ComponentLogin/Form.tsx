import React, { useState, FormEvent } from "react";
import { client } from "../../../supabase/client";
import { redirect } from "next/navigation";


function FormLogin() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function registerUser(name: string, email: string, password: string) {
    try {
      const { error } = await client.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Inserta al usuario en la tabla 'users'
      const { data, error: profileError } = await client
        .from("users")
        .upsert([{ name, email }], { onConflict: "email" });

      if (profileError) {
        throw new Error(profileError.message);
      }

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await registerUser(name, email, password);

      // Registro exitoso, redirige al usuario a la página de inicio
      redirect("/"); // Cambia la redirección según tus necesidades
    } catch (error) {
      setError("Error al registrar usuario. Verifica tus credenciales.");
    }
  };

  return (
    <form className="m-auto text-center w-1/2" onSubmit={handleSubmit}>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-8"
        style={{ cursor: "pointer" }}
        type="submit"
      >
        <h3 className="text-white">Regístrate</h3>
      </button>
      <input
        type="text"
        className="w-full bg-transparent border-b-2 border-white text-white mb-4"
        name="name"
        id="name"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full bg-transparent border-b-2 border-white text-white mb-4"
        type="email"
        name="email"
        id="email"
        autoComplete="username"
        placeholder="Correo Electrónico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full bg-transparent border-b-2 border-white text-white mb-4"
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="current-password"
      />
      {error && (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      )}
    </form>
  );
}

export default FormLogin;
