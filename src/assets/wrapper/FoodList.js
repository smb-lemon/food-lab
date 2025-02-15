import styled from "styled-components";

const Wrapper = styled.div`

    h1 {
        font-size: 2.5rem;
        text-align: center;
        position: relative;
        margin-bottom: 20px;
        letter-spacing: 2px;
    }
   .container-div {
        max-width: var(--max-width);
        margin: auto;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
   }
    .card-div {
        border: 1px solid #ddd;
        padding: 10px; 
        width: 250px;
        border-radius: var(--borderRadius);
        justify-content: center;
        flex-wrap: wrap;
        padding: 15px;
        transition: transform 0.2s;
        background: var(--background);
        //box-shadow: 0 4px 6px rgba(0,0,0,0,1);
    }
    .card-div:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 6px rgba(0,0,0,0,1);
    }
    h3 {
        font-size: 25px;
        margin: 10px 0;
    }
    .img {
        width: 100%;
        border-radius: 10px;
    }
    p {
        font-size: 15px;
        margin-top: 0.4rem;
        color: var(--grey-500);
    }
    a {
        display: block;
        margin-top: 10px;
        text-decoration: none;
        color: var(--primary-500);
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }
`;

export default Wrapper;