import styled from 'styled-components';

export const AreaLogin = styled.div`

    padding: 30px;
    max-width: 300px;
    margin: 50px auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 5px black;

    .form-input {
        text-align: left;

        label {
            margin-bottom: 10px;
            display: block;
        }

        input {
            margin-bottom: 5px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 10px;
            width: 280px;

            &:hover, &:focus {
                border: 1px solid black;
            }
        }
    }

    .form-footer {
        font-size: 13px;

        a {
            font-weight: bold;
            text-decoration: none;
            color: #000;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .errorMsg {
        text-align: right;
        font-size: 12px;
        color: red;
        font-weight: bold;
        margin: 0;
    }
`;