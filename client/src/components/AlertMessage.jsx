import Wrapper from "../wrappers/AlertMessage";

const AlertMessage = ({ msg }) => {
  return (
    <Wrapper>
      <div className="form-row">
        <p className="alert-success form-label">{msg}</p>
      </div>
    </Wrapper>
  );
};
export default AlertMessage;
