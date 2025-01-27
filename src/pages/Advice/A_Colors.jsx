import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";
import "./A_Colors.css";

const codeCSS = `:root{
    --blue-shade-900: hsl(230, 55%, 27%);
    --blue-shade-800: hsl(230, 56%, 33%);
    --blue-shade-700: hsl(230, 51%, 42%);
    --blue-shade-600: hsl(230, 51%, 27%);
    --blue-shade-500: hsl(230, 65%, 62%);
    --blue-shade-400: hsl(230, 63%, 66%);
    --blue-shade-300: hsl(230, 70%, 75%);
    --blue-shade-200: hsl(230, 72%, 90%);
    --blue-shade-100: hsl(230, 87%, 96%);

    --dark-shade-900: hsl(214, 22%, 16%);
    --dark-shade-800: hsl(214, 16%, 30%);
    --dark-shade-700: hsl(214, 11%, 48%);
    --dark-shade-600: hsl(214, 16%, 63%);
    --dark-shade-500: hsl(214, 23%, 74%);
    --dark-shade-400: hsl(214, 17%, 82%);
    --dark-shade-300: hsl(214, 23%, 88%);
    --dark-shade-200: hsl(214, 22%, 90%);
    --dark-shade-100: hsl(214, 16%, 97%);
}`;

const tabbedData = [{ title: "CSS", codeString: codeCSS, language: "css" }];

function A_Colors() {
  return (
    <article className="component-details">
      <h1>COLOR SHADES</h1>
      <p>
        To create a diverse palette of color shades, we recommend generating{" "}
        <b>8 to 10 shades</b> of the same color. When selecting a shade{" "}
        <b>
          move away from hex codes and utilize HSL (Hue, Saturation, Lightness)
        </b>
        . By using this color definition method, you can maintain the hue while
        adjusting the saturation and lightness to produce various shades of the
        same color. This approach allows for greater flexibility and creativity
        in your color selection, ensuring that all shades harmonize beautifully
        while still offering distinct variations.
      </p>
      <h2>Preview</h2>
      <div className="shades-showcase">
        <div className="grid-display grid-color">
          <HSL_Color hue="230" saturation="55" lightness="27" />
          <span className="secondary-text-s">hsl(230, 55%, 27%)</span>
          <HSL_Color hue="230" saturation="56" lightness="33" />
          <span className="secondary-text-s">hsl(230, 56%, 33%)</span>
          <HSL_Color hue="230" saturation="51" lightness="42" />
          <span className="secondary-text-s">hsl(230, 51%, 42%)</span>
          <HSL_Color hue="230" saturation="52" lightness="53" />
          <span className="secondary-text-s">hsl(230, 52%, 53%)</span>
          <HSL_Color hue="230" saturation="65" lightness="62" />
          <span className="secondary-text-s">hsl(230, 65%, 62%)</span>
          <HSL_Color hue="230" saturation="63" lightness="66" />
          <span className="secondary-text-s">hsl(230, 63%, 66%)</span>
          <HSL_Color hue="230" saturation="70" lightness="75" />
          <span className="secondary-text-s">hsl(230, 70%, 75%)</span>
          <HSL_Color hue="230" saturation="72" lightness="90" />
          <span className="secondary-text-s">hsl(230, 72%, 90%)</span>
          <HSL_Color hue="230" saturation="87" lightness="96" />
          <span className="secondary-text-s">hsl(230, 687%, 96%)</span>
        </div>
        <div className="grid-display grid-color">
          <HSL_Color hue="214" saturation="22" lightness="16" />
          <span className="secondary-text-s">hsl(214, 22%, 16%)</span>
          <HSL_Color hue="214" saturation="16" lightness="30" />
          <span className="secondary-text-s">hsl(214, 16%, 30%)</span>
          <HSL_Color hue="214" saturation="11" lightness="48" />
          <span className="secondary-text-s">hsl(214, 11%, 48%)</span>
          <HSL_Color hue="214" saturation="16" lightness="63" />
          <span className="secondary-text-s">hsl(214, 16%, 63%)</span>
          <HSL_Color hue="214" saturation="23" lightness="74" />
          <span className="secondary-text-s">hsl(214, 23%, 74%)</span>
          <HSL_Color hue="214" saturation="17" lightness="82" />
          <span className="secondary-text-s">hsl(214, 17%, 82%)</span>
          <HSL_Color hue="214" saturation="23" lightness="88" />
          <span className="secondary-text-s">hsl(214, 23%, 88%)</span>
          <HSL_Color hue="214" saturation="22" lightness="90" />
          <span className="secondary-text-s">hsl(214, 22%, 90%)</span>
          <HSL_Color hue="214" saturation="16" lightness="97" />
          <span className="secondary-text-s">hsl(214, 16%, 97%)</span>
        </div>
      </div>

      <h2>Code</h2>
      <TabbedCodeSyntax data={tabbedData} />
    </article>
  );
}

export default A_Colors;

function HSL_Color({ hue, saturation, lightness }) {
  const hsl = `hsl(${hue}, ${saturation}%,${lightness}%)`;
  return <div className="hsl-color" style={{ backgroundColor: hsl }}></div>;
}
