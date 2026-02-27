import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Usando FormSubmit.co - substitua com seu email
      const response = await fetch(
        "https://formsubmit.co/ajax/fernandesdenzo223@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    }
  };

  return (
    <div className={`container ${styles.contact}`}>
      <div className={styles.header}>
        <span className="eyebrow">Contato</span>
        <h2 className="sectionTitle">Vamos conversar</h2>
        <p className={styles.intro}>
          Disponível para projetos. Respondo em até 24h.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.info}>
          <h3>Outras formas de contato</h3>
          <div className={styles.methods}>
            <a
              href="mailto:fernandesdenzo223@gmail.com"
              className={styles.method}
            >
              <strong>Email</strong>
              <span>fernandesdenzo223@gmail.com</span>
            </a>
            <a
              href="https://wa.me/5511940354855"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.method}
            >
              <strong>WhatsApp</strong>
              <span>+55 11 94035-4855</span>
            </a>
            <a
              href="https://github.com/fernandes-ez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.method}
            >
              <strong>GitHub</strong>
              <span>@fernandes-ez</span>
            </a>
            <a
              href="https://linkedin.com/in/fernandes-ez"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.method}
            >
              <strong>LinkedIn</strong>
              <span>Enzo Fernandes Dantas</span>
            </a>
            <a
              href="https://instagram.com/ezf.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.method}
            >
              <strong>Instagram</strong>
              <span>ezf.dev</span>
            </a>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Envie uma mensagem</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte sobre seu projeto..."
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.submitBtn}
          >
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </button>
          {status === "success" && (
            <p className={styles.successMessage}>
              Mensagem enviada com sucesso!
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMessage}>
              Erro ao enviar. Tente novamente ou entre em contato por email.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
