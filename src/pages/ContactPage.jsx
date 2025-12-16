// src/pages/ContactPage.jsx
import { useState } from "react";
import "./ContactPage.scss";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok || !data.ok) {
      alert("오류 발생");
      return;
    }

    alert("메시지가 성공적으로 전송되었습니다!");
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error(err);
    alert("서버에 연결할 수 없음");
  }
};



  return (
    <main className="contact-page contact-page--enter">
      <section className="contact-page__inner">
        <div className="contact-page__grid">
          {/* ===== LEFT: TITLE + INFO ===== */}
          <section className="contact-page__left">
            <header className="contact-page__header">
              <h1 className="contact-page__title title">Drop Me a Line</h1>
              <p className="contact-page__description">
                안녕하세요, 개발자 정혜진입니다.
                프론트엔드 기반으로 인터페이스와 사용자 흐름을 설계하고 구현하며
                아이디어를 구조화해 화면 위에서 자연스럽게 동작하도록 만드는 데 집중합니다.
              </p>
            </header>

            <dl className="contact-page__info-list">
              <div className="contact-page__info-row">
                <dt className="contact-page__info-label">E-mail</dt>
                <dd className="contact-page__info-value">
                  <a href="mailto:jh030424@kaywon.ac.kr">
                    jh030424@kaywon.ac.kr
                  </a>
                </dd>
              </div>

              <div className="contact-page__info-row">
                <dt className="contact-page__info-label">Instagram</dt>
                <dd className="contact-page__info-value">
                  <a
                    href="https://instagram.com/4444.22.4444"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @4444.22.4444
                  </a>
                </dd>
              </div>

              <div className="contact-page__info-row">
                <dt className="contact-page__info-label">Resume</dt>
                <dd className="contact-page__info-value">
                  <a href="/assets/resume.pdf" download="resume.pdf">
  Download
</a>
                </dd>
              </div>
            </dl>
          </section>


          <section className="contact-page__right">
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__row contact-page__row--two">
                <div className="contact-page__field">
                  <label htmlFor="name" className="contact-page__label">
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact-page__input"
                    placeholder=""
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-page__field">
                  <label htmlFor="email" className="contact-page__label">
                    e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-page__input"
                    placeholder=""
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* 메세지 */}
              <div className="contact-page__field contact-page__field--full">
                <label htmlFor="message" className="contact-page__label">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-page__textarea"
                  placeholder=""
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              {/* 버튼 */}
              <div className="contact-page__actions">
                <button type="submit" className="contact-page__submit">
                  SEND
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
