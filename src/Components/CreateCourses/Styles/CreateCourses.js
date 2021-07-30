import styled from "styled-components";

export const Container = styled.div`
    flex: 4;
    padding: 30px 30px;
`

export const Title = styled.h3`
    font-size: 3rem;
`

export const GroupInput = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;

    .MuiFormControl-root{
        width: 400px;
    }

    .MuiFilledInput-root{
        background-color: white;
    }

    .MuiInputLabel-filled{
        font-size: 1.5rem;
    }

    .MuiFilledInput-input{
        font-size: 1.5rem;
    }

    .MuiFormHelperText-root.Mui-error{
        font-size: 1.3rem;
    }

`

export const GroupSelect = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;

    .MuiMenuItem-root{
        font-size: 1.5rem;
    }

    .MuiFormControl-root{
        width: 400px;
    }

    .MuiFilledInput-root{
        background-color: white;
    }

    .MuiInputLabel-filled.MuiInputLabel-shrink{
        font-size: 1.5rem;
    }

    .MuiSelect-filled.MuiSelect-filled {
        font-size: 1.5rem;
    }

    .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover{
        font-size: 1.5rem;
    }
    
    .MuiInputLabel-filled{
        font-size: 1.5rem;
    }

    .MuiFormHelperText-root.Mui-error{
        font-size: 1.3rem;
    }
`

export const ButtonUpload = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 60px;
`

