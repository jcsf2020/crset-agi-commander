import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          nome: name,
          email,
          empresa,
          mensagem,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setResult("✅ Mensagem enviada com sucesso!");
        form.reset();
      } else {
        setResult("❌ Erro ao enviar. Tenta mais tarde.");
      }
    } catch (err) {
      console.error(err);
      setResult("❌ Erro técnico. Ver consola.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Nome" className="w-full p-2 border" required />
      <input type="email" name="email" placeholder="Email" className="w-full p-2 border" required />
      <input type="text" name="empresa" placeholder="Empresa" className="w-full p-2 border" />
      <textarea name="message" placeholder="Mensagem" className="w-full p-2 border" required />
      <button type="submit" className="bg-black text-white px-4 py-2">Enviar</button>
      {result && <p>{result}</p>}
    </form>
  );
};

export default ContactForm;
