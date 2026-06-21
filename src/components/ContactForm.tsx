"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/form.scss";
import sideDecoration from '../imgs/side-decoration.png'

const EMAILJS_SERVICE_ID = "service_o00egss";
const EMAILJS_TEMPLATE_ID = "template_76xh44w";
const EMAILJS_PUBLIC_KEY = "uBpNFO32RZA114N7I";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  naam: string;
  bedrijf: string;
  email: string;
  branche: string;
  onderwerp: string;
  website: string;
  opmerkingen: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    naam: "",
    bedrijf: "",
    email: "",
    branche: "",
    onderwerp: "",
    website: "",
    opmerkingen: "",
  });
  const [emailError, setEmailError] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setEmailError(
        value && !EMAIL_REGEX.test(value)
          ? "Vul een geldig e-mailadres in."
          : ""
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(form.email)) {
      setEmailError("Vul een geldig e-mailadres in.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          naam: form.naam,
          bedrijf: form.bedrijf,
          email: form.email,
          branche: form.branche,
          onderwerp: form.onderwerp,
          website: form.website,
          opmerkingen: form.opmerkingen,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({
        naam: "",
        bedrijf: "",
        email: "",
        branche: "",
        onderwerp: "",
        website: "",
        opmerkingen: "",
      });
      setEmailError("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-form" id="aan-de-slag">
      <div className="form-title">
        <h2>Aan de slag?</h2>
      </div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <span className="form-background">
          <label htmlFor="naam">Naam</label>
          <input
            id="naam"
            type="text"
            name="naam"
            value={form.naam}
            onChange={handleChange}
            required
          />

          <label htmlFor="bedrijf">Bedrijf</label>
          <input
            id="bedrijf"
            type="text"
            name="bedrijf"
            value={form.bedrijf}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {emailError && <span className="field-error">{emailError}</span>}

          <label htmlFor="branche">Branche</label>
          <input
            id="branche"
            type="text"
            name="branche"
            value={form.branche}
            onChange={handleChange}
            required
          />

          <label htmlFor="onderwerp">Onderwerp</label>
          <input
            id="onderwerp"
            type="text"
            name="onderwerp"
            value={form.onderwerp}
            onChange={handleChange}
            required
          />

          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            required
          />

          <label htmlFor="opmerkingen">Opmerkingen</label>
          <textarea
            id="opmerkingen"
            name="opmerkingen"
            value={form.opmerkingen}
            onChange={handleChange}
            rows={4}
            required
          />
        </span>

        <span>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Verzenden…" : "Vraag een gesprek aan"}
          </button>
        </span>

        {status === "success" && (
          <p>✓ Je bericht is verzonden! We nemen snel contact op.</p>
        )}
        {status === "error" && (
          <p>
            ✗ Er ging iets mis. Probeer het opnieuw of stuur een e-mail
            rechtstreeks.
          </p>
        )}
      </form>
      <div className="form-decoration">
        <img id="left-side" src={sideDecoration} />
        <img id="right-side" src={sideDecoration} />
      </div>
    </section>
  );
}
