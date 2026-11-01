import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Nikita Sivtsov</p>
          <p>
            Contact us:
            <a href="mailto:astikin27@gmail.com">astikin27@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
