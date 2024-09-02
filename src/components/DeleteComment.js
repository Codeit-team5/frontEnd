import styled from "styled-components";
const DeleteComment = () => {
  return (
    <>
      <FormGroup>
        <label htmlFor="check" style={{ display: "block" }}>
          삭제 권한 인증
        </label>
        <input
          placeholder="댓글 비밀번호를 입력해 주세요"
          type="text"
          id="check"
        />
      </FormGroup>
      <EditButton>삭제하기</EditButton>
    </>
  );
};

const FormGroup = styled.div`
  margin-top: 40px;
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 20px;
  }
  input {
    width: 100%;
    border-radius: 6px;
    padding: 14px 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #282828;
    border: 1px solid #dddddd;
  }
  textarea {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #dddddd;
    height: 120px;
    resize: none;
    font-size: 14px;
    text-indent: 1em;
    line-height: 40px;
  }
  strong {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
const EditButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  background: #282828;
  margin-top: 60px;
  padding: 15px;
  font-size: 16px;
`;

export default DeleteComment;
