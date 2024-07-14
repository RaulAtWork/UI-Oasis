import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";
import "./A_Separation.css";

const separationList = [
  { size: "4px", calculation: "16 x .25", className: "w-xxs", display: "XXS" },
  { size: "8px", calculation: "16 x .5", className: "w-xs", display: "XS" },
  { size: "12px", calculation: "16 x .75", className: "w-s", display: "S" },
  { size: "16px", calculation: "16 x 1", className: "w-m", display: "M" },
  { size: "24px", calculation: "16 x 1.5", className: "w-l", display: "L" },
  { size: "32px", calculation: "16 x 2", className: "w-xl", display: "XL" },
  { size: "48px", calculation: "16 x 3", className: "w-xxl", display: "XXL" },
];
const codeCSS=`:root{
    --separation-xxs: 4px;
    --separation-xs: 8px;
    --separation-s: 12px;
    --separation-m: 16px;
    --separation-l: 24px;
    --separation-xl: 32px;
    --separation-xxl: 48px;
}`

const tabbedData =[{title:"CSS", codeString: codeCSS, language: "css"}] 

function A_Separation() {
  return (
    <article className="component-details">
      <h1>Margin and Padding</h1>
      <p>
        When deciding on separation in terms of padding and margin, it is always
        beneficial to have predefined sizes for separation. We recommend 3
        small, 1 medium, and 3 large sizes, for a total of 7 separation sizes.
        In this particular example, we have chosen the medium size to be 16px.
        To determine the smaller sizes, we will multiply the medium size by 0.X,
        where the result is a whole number. The same process will be applied to
        determine the larger sizes.
      </p>
      <h2>Preview</h2>
      {separationList.map((elem, index) => (
        <SeparationPreview
          size={elem.size}
          calculation={elem.calculation}
          className={elem.className}
          displayName={elem.display}
        />
      ))}
      <h2>Code</h2>
      <TabbedCodeSyntax data={tabbedData}/>
    </article>
  );
}

export default A_Separation;

function SeparationPreview({ displayName, size, calculation, className }) {
  return (
    <div className="separation-preview">
      <span>{displayName}</span>
      <span>
        <b>{size}</b> ({calculation}){" "}
      </span>
      <div className={className} />
    </div>
  );
}
