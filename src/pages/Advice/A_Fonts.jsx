import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";

const codeCSS = `:root{
    font-family: "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell";
}`;

const tabbedData = [{ title: "CSS", codeString: codeCSS, language: "css" }];

function A_Fonts() {
  return (
    <article className="component-details">
      <h1>FONTS</h1>
      <p>
        Fonts give personality to your website. If you're looking for a quick
        setup, try using the following font stack <span className="secondary-text">—you may need to add the font
        to your web—</span>:
      </p>
      <TabbedCodeSyntax data={tabbedData} />
      <h2>Preview</h2>
      <p style={{ fontFamily: "segoe UI" }}>
        The quick brown fox jumps over the lazy dog. Segoe UI.
      </p>
      <p style={{ fontFamily: "Roboto" }}>
        The quick brown fox jumps over the lazy dog. Roboto
      </p>
      <p style={{ fontFamily: "Noto Sans" }}>
        The quick brown fox jumps over the lazy dog. Noto Sans.
      </p>
      <p style={{ fontFamily: "Ubuntu" }}>
        The quick brown fox jumps over the lazy dog. Ubuntu.
      </p>
      <p style={{ fontFamily: "Cantarell" }}>
        The quick brown fox jumps over the lazy dog. Cantarell.
      </p>
      <h2>Why Those Fonts Are the Best Choices?</h2>
      <ul className="bullet-list">
        <li>
          <b>Segoe UI</b>: This font is widely recognized for its clean and
          modern appearance, making it an excellent choice for user interfaces.
          <span className="secondary-text"> It’s the default font for Microsoft products, ensuring familiarity and
          readability.</span>
        </li>
        <li>
          <b>Roboto</b>: Developed by Google, Roboto is designed for optimal
          readability on screens. <span className="secondary-text">It is why it’s
          commonly used in Android applications.</span>
        </li>
        <li>
          <b>Noto Sans</b>: This font aims to achieve visual harmony by
          supporting multiple languages and scripts.
        </li>
        <li>
          <b>Ubuntu</b>: The Ubuntu font family is known for its distinctive and
          modern look. <span className="secondary-text">It’s designed to be used on screens, making it a solid
          choice for web design.</span>
        </li>
        <li>
          <b>Cantarell</b>: This font is designed for clarity and legibility,
          particularly at smaller sizes. <span className="secondary-text"> It’s often used in user interfaces and
          is a good option for body text.</span>
        </li>
      </ul>

      <h2> Best Font Type Based on the Situation</h2>
      <ul className="bullet-list">
        <li>
          <b>Serif</b>: Serif fonts are characterized by small lines or
          decorative strokes at the ends of their letters. They are often seen
          as traditional and formal, making them suitable for print materials
          like books and newspapers.<span className="secondary-text"> Examples include Times New Roman and
          Georgia. Best used for: Long texts, formal documents, and print media.</span>
        </li>
        <li>
          <b>Sans Serif</b>: Sans serif fonts lack the decorative strokes found
          in serif fonts, giving them a clean and modern appearance. They are
          highly legible on screens, which makes them popular for web design.
          <span className="secondary-text"> Examples include Arial, Helvetica, and Roboto. Best used for:
          Websites, digital interfaces, and informal documents.</span>
        </li>
        <li>
          <b>Script</b>: Script fonts mimic handwritten text and often have a
          flowing, cursive style. They can convey elegance and creativity,
          making them ideal for invitations, greeting cards, and branding.
          <span className="secondary-text">Examples include Brush Script and Pacifico. Best used for:
          Invitations, logos, and decorative purposes.</span>
        </li>
        <li>
          <b>Display</b>: Decorative fonts are highly stylized and often used
          for specific themes or artistic expressions. They can be playful,
          quirky, or thematic, but should be used sparingly to avoid
          overwhelming the viewer. <span className="secondary-text">Examples include Comic Sans and Impact. Best
          used for: Headlines, posters, and special occasions.</span>
        </li>
        <li>
          <b>Monospaced</b>: Courier. Monospaced fonts, also known as
          fixed-width fonts, are characterized by each character occupying the
          same amount of horizontal space. This uniformity makes them
          particularly useful in coding and technical applications, as it allows
          for easy alignment of text and code.<span className="secondary-text"> Best uses: Programming code,
          Terminal emulators, Data bases</span>
        </li>
      </ul>
    </article>
  );
}

export default A_Fonts;
