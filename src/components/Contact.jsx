import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import image from "../data/assets/networks.jpeg";
import "./css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const EMAILJS_SERVICE_ID = "service_6azquej";
  const EMAILJS_TEMPLATE_ID = "template_9a0efzb";
  const EMAILJS_PUBLIC_KEY = "Ij_6CXQW6l5KQjum7";

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      await Swal.fire({
        title: "Thank You!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#00bcd4",
      });

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      await Swal.fire({
        title: "Something went wrong",
        text: "Please try again in a moment.",
        icon: "error",
        confirmButtonColor: "#00bcd4",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title about-title" data-aos="fade-up">
            Get In Touch
          </h2>
          <p
            className="section-subtitle about-subtitle"
            data-aos="fade-up"
            data-aos-delay="100">
            Have a business opportunity or inquiry? We'd love to hear from you
          </p>
        </div>

        <div className="row gap-4">
          <div className="col-lg-12" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-floating mb-3">
                <input
                  id="floatingInputName"
                  type="text"
                  name="from_name"
                  className="form-control floatingInput"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInputName">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  id="floatingInputEmail"
                  type="email"
                  name="from_email"
                  className="form-control floatingInput"
                  value={formData.from_email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInputEmail">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  id="floatingInputSubject"
                  type="text"
                  name="subject"
                  className="form-control floatingInput"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInputSubject">Subject</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  id="floatingInputMessage"
                  name="message"
                  className="form-control floatingInput"
                  placeholder="Message"
                  style={{ height: "160px" }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInputMessage">Message</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100"
                disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <img src={image} className="img-fluid mt-5" alt="network" />
      </div>
    </section>
  );
}
