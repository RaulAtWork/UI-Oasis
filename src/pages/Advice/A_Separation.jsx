import "./A_Separation.css";

const separationList = [
  { size: "4px", calculation: "16 x .25", className: "w-xxs" },
  { size: "8px", calculation: "16 x .5", className: "w-xs" },
  { size: "12px", calculation: "16 x .75", className: "w-s" },
  { size: "16px", calculation: "16 x 1", className: "w-m" },
  { size: "24px", calculation: "16 x 1.5", className: "w-l" },
  { size: "32px", calculation: "16 x 2", className: "w-xl" },
  { size: "48px", calculation: "16 x 3", className: "w-xxl" },
];

function A_Separation() {
  return (
    <article className="component-details">
      <h1>Margin and Padding</h1>
      <h2>Preview</h2>
        {separationList.map((elem, index) =>(
          <SeparationPreview size={elem.size} calculation={elem.calculation} className={elem.className}/>
        ))}
      <h2>Code</h2>
    </article>
  );
}

export default A_Separation;

function SeparationPreview({ size, calculation, className }) {
  return (
    <div className="separation-preview">
      <span>
        <b>{size}</b> ({calculation}){" "}
      </span>
      <div className={className}/>
    </div>
  );
}
