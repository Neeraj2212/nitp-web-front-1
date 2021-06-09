import styled from "styled-components"

export const PageLayout = styled.div`
  width: 100%;
  background: ${props => props.theme.backgroundColor};

  .layoutrowmain {
    .col-6 {
      .row {
        h1 {
          font-weight: bold;
          color: ${props => props.theme.textColor};
          font-size: 3rem;
        }
        h2 {
          p {
            color: ${props => props.theme.textColor};
            font-size: 1.3rem;
            font-weight: 500;
          }
        }
        #aut {
          color: ${props => props.theme.textColor};
          font-weight: bold;
        }
      }
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .layoutrow {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 10vh;
    padding-bottom: 10vh;
    font-family: "Source Sans Pro";
    .layoutrow:nth-of-type(2n + 1) {
      .col-6:nth-child(1) {
        justify-content: center;
      }
    }
    .col-6 {
      padding: 3vw;
      .row {
        #layoutnoticewrap {
          height: 400px;
          overflow: hidden;
          min-width: 80%;
          overflow-y: scroll;
          scrollbar-width: none;
          div {
            p {
              font-size: 1rem;
            }
          }
        }
        p {
          color: ${props => props.theme.textColor};
          font-weight: 500;
        }
        h1 {
          font-weight: bold;
          color: ${props => props.theme.textColor};
          font-size: 2.5rem;
        }
      }
    }
  }

  .layoutabout {
    align-items: center;
    margin-left: 8%;
    margin-right: 8%;
    .row {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        color: ${props => props.theme.textColor};
      }
      p {
        color: ${props => props.theme.textColor};
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }

  .layoutfoot {
    .row {
      padding: 0vw 0vw 0vw 3vw;
      h1 {
        font-weight: bold;
        color: ${props => props.theme.textColor};
        font-size: 3rem;
      }
    }
  }

  @media (max-width: 768px) {
    .layoutrow1 {
      flex-direction: column-reverse;
    }
    .col-6 {
      padding: 1vw;
    }
    .layoutrow > .col-6 > div > h1 {
      font-size: 1.8rem;
    }
    .layoutrow > .col-6 > div > p {
      font-size: 1rem;
    }
  }
`
