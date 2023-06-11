import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
`;

const Label = styled.label`
  margin-bottom: 20px;
`;

const Input = styled.input`
margin-left: 20px`;

const AddContactButton = styled.button`
cursor: pointer;`;

export { Form, Label, Input, AddContactButton };
