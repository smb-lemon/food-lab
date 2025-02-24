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
        justify-content: center;
        gap: 20px;
    }

    .card-div {
        border: 1px solid #ddd;
        padding: 15px;
        width: 280px;
        border-radius: var(--borderRadius);
        background: var(--background);
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .card-div:hover {
        transform: scale(1.05);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
        font-size: 1.6rem;
        margin: 10px 0;
        color: var(--primary-600);
        text-align: center;
    }

    .img {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
    }


    p {
        font-size: 14px;
        margin-top: 0.4rem;
        color: var(--grey-500);
    }

    a {
        display: block;
        margin-top: 10px;
        text-decoration: none;
        color: var(--primary-500);
        font-weight: bold;
        transition: color 0.2s ease-in-out;
    }

    a:hover {
        text-decoration: underline;
        color: var(--primary-700);
    }
`;

export default Wrapper;
