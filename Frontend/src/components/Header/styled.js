import styled from 'styled-components';

export const AreaHeader = styled.div`
    heigth: 60px;
    width: 100%;
    background-color: #E3B700;
    color: #000;
    box-shadow: 0 2px 2px black;


    .container{
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 13px;
    }
    
    .menu-principal {

        ul {
            padding: 0;

            li {
                display: inline-block;
                cursor: pointer;
                list-style: none;
                padding: 0 5px;
                margin-left: 5px;
            }
        }
    }

    .menu-usuario {
        text-align: right;
        flex: 1;

        ul {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            li {
                margin: 5px;
                list-style: none;
            }
        }
        
    }

    .sair {
        border-left: 1px inset grey;
        padding-left: 5px;
        margin: 0 5px;

        ul{
            align-items: center;
            padding-left: 10px;
            // display: flex;

            li {
                list-style: none;
                display: inline-block;

                a {
                    color: #000;
                    text-decoration: none;
                    display: flex;
                    align-items: center;

                    &:hover {
                        color: #4a4948;
                    }
                }
            }
        }
    }

    

    .header-icon {
        width: 30px;
        cursor: pointer;
    }

    #label-btn-menu {
        padding: 5px;
        background-color: #E3B700;
        color: #000;
        text-align: center;
        font-size: 30px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        visibility: hidden;

    }

    #btn-menu {
        visibility: hidden;
    }

    @media(max-width: 1100px) {
        
        .menu-principal {
            ul {
                position: fixed;
                width: 20%;
                height: 100vh;
                top: 60px;
                left: -100%;
                text-align: left;
                display: flex;
                flex-direction: column;
                background-color: #fceeb1;
                
                li {
                    padding:  0 10px 10px;
                    border-bottom: 1px inset grey;
                    margin: 20px 0 0 0;
                    float: left;
                }
            }
        }

        #label-btn-menu {
            visibility: visible;
        }

        #btn-menu:checked + .menu-principal > ul  {
            left: 0;
        }

    }
`;


