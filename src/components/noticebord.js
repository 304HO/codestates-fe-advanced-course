import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNation from "./pagenation";

const NoticeBoard = () => {
  const [contentsTitle, setContetnsTitle] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offSet = (page - 1) * limit;
  const navigator = useNavigate();

  const getContents = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log(res.data); userId
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContents().then((data) => {
      setContetnsTitle(data);
    });
  }, []);

  const detailHandler = (id) => {
    navigator(`/posts/${id}`);
  };

  console.log(contentsTitle.length);

  return (
    <NoticeContainer>
      <TagBlock>
        <Text>게시글</Text>
        <Text>작성자</Text>
      </TagBlock>
      {contentsTitle.slice(offSet, offSet + limit).map((el) => {
        return (
          <Notice key={el.id}>
            <NoticeTitle
              onClick={() => {
                detailHandler(el.id);
              }}
            >
              {el.title}
            </NoticeTitle>
            <NoticeWriter>작성자: {el.userId}</NoticeWriter>
          </Notice>
        );
      })}
      <PageNation
        pageLength={contentsTitle.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </NoticeContainer>
  );
};
export default NoticeBoard;

const Text = styled.div`
  font-size: 25px;
`;

const NoticeContainer = styled.div`
  max-width: 1000px;
  height: 92vh;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TagBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 0 30px;
`;

const Notice = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const NoticeTitle = styled.div`
  line-height: 30px;
  font-size: 23px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    font-family: sans-serif;
    font-weight: 800;
    font-size: 26px;
  }
`;

const NoticeWriter = styled.div`
  font-size: 23px;
`;
