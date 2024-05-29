import Wrapper from "../wrappers/NoData";
import nodata from "../assets/nodata.svg";
const NoData = ({ text }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={nodata} alt="" />
      </div>
      <p>{text}</p>
    </Wrapper>
  );
};
export default NoData;
