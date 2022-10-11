import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadowColor: 'var(--shadow)',
            // boxShadow; 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: 'var(--color-bg)'
        }),
    },
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }
  
  & input{
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }
  
  & > div[id]{
    background-color: var(--colors-ui-base);
  }
`;