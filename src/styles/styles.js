import styled from "styled-components"
import Footer from "../components/Footer.js"

export const AppContainer = styled.main`
    top: 120px;
    width: 100vw;

    min-height: calc(100vh - 100px);

    margin: 100px auto;
    .title {
        color: #66d7d1;
        padding: 50px;
        font-size: 50px;
        font-weight: 700;
    }
`

export const PageContainer = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px);

    margin: 100px auto 0;
`

export const Header = styled.header`
    background-color: orange;

    position: fixed;
    top: 0;

    width: 100%;
    z-index: 10;
    height: 100px;
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fc7753;
    color: #403d58;
    align-items: center;
    .logoNtitle {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .title {
        font-size: 35px;
        font-weight: 700;
    }
    .options {
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    img {
    }
    button {
        &:hover {
            cursor: pointer;
        }
        font-family: "Inter", sans-serif;
        width: 150px;
        height: 50px;
        border: none;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        border: 1px solid white;
        /* background-color: ${(props) => {
            //console.log(props)
        }}; */
        color: #ffff;
    }
    .firstButton {
        background-color: #403d58;
    }
    .secondtButton {
        background-color: #66d7d1;
    }
    .thirdButton {
        background-color: #dbd56e;
    }
`
export const VideoCollection = styled.section`
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    box-sizing: border-box;
    width: 280px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 20px;
    background-color: #d6f8f9;
    opacity: 0.8;
    img {
        padding: 3px 0 0 0;
        z-index: 1;
        position: absolute;
        top: 0;
        width: 260px;
        height: 260px;
    }
    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 261px;
        padding: 10px;
        h1 {
            font-weight: 700;
            padding-bottom: 15px;
            font-family: "Inter", sans-serif;
        }
        p {
            font-weight: 400;
            color: #403d58;
            font-family: "Inter", sans-serif;
        }
    }
`
export const VideoCollectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
`
export const ColletionContainer = styled.div`
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    box-sizing: border-box;

    position: relative;

    width: 400px;
    height: 380px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 20px;
    background-color: #f2efea;
    opacity: 0.8;
    img {
        padding: 3px 0 0 0;
        z-index: 1;
        position: absolute;
        top: 0;
        width: 400px;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        height: auto;
    }
    .description {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 261px;
        padding: 10px;
        flex-direction: columns;
        align-items: center;
        h1 {
            font-weight: 700;
            padding-bottom: 15px;
            font-family: "Inter", sans-serif;
            color: #403d58;
            text-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        }
        p {
            font-weight: 400;
            color: #403d58;
            font-family: "Inter", sans-serif;
            text-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
        }
        .time {
            position: absolute;
            z-index: 5;
            bottom: 0px;
            right: 10px;
        }
    }
`

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 200px;
    background: #403d58;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 10px 10px 10px 10px rgba(1, 1, 1, 0.2),
        2px 6px 20px 2px rgba(1, 1, 1, 0.19);
    .collaborator {
        img {
            width: 100px;
            border-radius: 50%;
        }
    }
`
// VIDEO PAGE

export const VideoPageContainer = styled.div`
    /* background-color: blue; */

    display: flex;

    padding-top: 20px;
`

export const VideosSidebar = styled.aside`
    /* background-color: green; */

    max-width: 500px;
    height: 100%;

    padding: 10px;

    border-right: 2px solid black;

    @media (max-width: 1100px) {
        display: none;
    }
`
export const SidebarTitle = styled.h3`
    display: flex;
    justify-content: center;

    font-size: 18px;
    text-align: center;
    font-weight: 600;

    padding-bottom: 10px;
    margin: 10px 0 10px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const SidebarVideos = styled.div``

export const SidebarVideo = styled.div`
    background-color: white;

    padding: 10px 5px;
    margin: 5px 0;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const SidebarVideoTitle = styled.p`
    font-weight: 700;
    font-size: 14px;
`

export const SidebarVideoAuthor = styled.p`
    font-weight: 600;
    font-size: 12px;
`

export const SidebarVideoReleaseDate = styled.p`
    font-size: 12px;
`

export const MainContent = styled.section`
    /* background-color: red; */

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const VideoInfoContainer = styled.div`
    /* background-color: purple; */

    display: flex;
    height: 100%;
    width: 100%;
`

export const Video = styled.div`
    /* background-color: yellow; */

    align-self: center;

    height: 100%;
    width: 50%;

    padding: 10px;
    margin: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
`

export const VideoInfo = styled.div`
    /* background-color: aliceblue;
     */
    background-color: #66d7d1;

    /*height: 100%; */
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;

    padding: 10px;
    margin: 0 0 0 20px;

    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);

    border-radius: 10px 0 0 10px;
`

export const MainInfo = styled.div`
    height: 100%;
`

export const SecondaryInfo = styled.div`
    /* height: 100%; */
    font-size: 14px;
`

export const VideoTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;

    margin-bottom: 10px;
`

export const VideoAuthor = styled.h4`
    font-size: 18px;
    font-weight: 600;

    margin-bottom: 15px;
`

export const VideoDescription = styled.p`
    font-size: 16px;
    margin-bottom: 10px;

    min-height: 100px;
    max-height: 200px;

    overflow: auto;
`

export const Categories = styled.div`
    /* background-color: bisque; */

    display: flex;

    border-radius: 5px;
    /* padding: 5px; */
`

export const Category = styled.div`
    background-color: #fc7753;

    padding: 10px;
    margin: 5px;

    border-radius: 5px;

    color: white;

    &:first-of-type {
        margin-left: 0;
    }
`

export const ReleaseDate = styled.p`
    padding: 15px 0 5px;
`

export const Comments = styled.div`
    background-color: white;
    height: 100%;
    padding: 30px 20px;
    margin: 30px 20px;
    border-radius: 10px;

    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.2);
`

export const Comment = styled.div`
    padding: 15px 0;

    display: flex;
    flex-direction: column;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-of-type {
        border-bottom: none;
    }
`

export const CommentForm = styled.form`
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;

    gap: 5px;

    input {
        font-family: "Inter", sans-serif;
        width: 300px;
        padding: 5px;
        border-radius: 5px;
        border: none;
        background-color: #66d7d1;

        /* color: white; */

        &::placeholder {
            /* color: white; */
            font-weight: 600;
            font-family: "Inter", sans-serif;
        }
    }

    textarea {
        font-family: "Inter", sans-serif;
        resize: vertical;
        padding: 5px;
        border-radius: 5px;
        border: none;
        background-color: #66d7d1;
        /* color: white; */

        &::placeholder {
            /* color: white; */
            font-weight: 600;
            font-family: "Inter", sans-serif;
        }
    }

    button {
        font-family: "Inter", sans-serif;

        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #403d58;

        margin-top: 10px;

        color: white;
        font-weight: 600;
    }
`

export const CommentAuthor = styled.p`
    margin: 0 0 5px;
`

export const CommentText = styled.p`
    margin: 0 0 10px;
`

export const CommentsLabel = styled.h2`
    margin-top: 20px;
    font-weight: 600;
`

export const CommentsLabelTitle = styled(CommentsLabel)`
    margin-top: 0;
    margin-bottom: 20px;
`
