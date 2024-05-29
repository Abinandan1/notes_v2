import { colors, fonts } from "../utils/fonts-colors";
import Wrapper from "../wrappers/EditPanel";

const EditPanel = ({
  transform,
  currentColor,
  currentFont,
  setCurrentColor,
  setCurrentFont,
}) => {
  return (
    <Wrapper className="edit-panel">
      <select
        name="font"
        id="font"
        className="form-select"
        defaultValue={currentFont || fonts[0]}
        onChange={(e) => setCurrentFont(e.currentTarget.value)}
      >
        {fonts.map((font) => {
          return (
            <option key={font} value={font}>
              {font}
            </option>
          );
        })}
      </select>

      <button
        className="color selected"
        style={{ background: currentColor }}
        onClick={(e) =>
          e.currentTarget.nextElementSibling.classList.toggle(
            "show-color-container"
          )
        }
      ></button>
      <div className="color-container">
        {colors.map((color) => {
          return (
            <button
              type="button"
              className="color"
              key={color}
              style={{ background: color }}
              onClick={(e) => {
                e.currentTarget.parentElement.classList.toggle(
                  "show-color-container"
                );
                setCurrentColor(color);
              }}
            ></button>
          );
        })}
      </div>

      <div className="transform-btns">
        <button
          className="textTransform bold"
          onClick={(e) => {
            transform("bold");
          }}
        >
          b
        </button>
        <button
          className="textTransform italic"
          onClick={(e) => {
            transform("italic");
          }}
        >
          i
        </button>
        <button
          className="textTransform underline"
          onClick={(e) => {
            transform("underline");
          }}
        >
          u
        </button>
      </div>
    </Wrapper>
  );
};
export default EditPanel;
