import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailNotice = () => {
  const [detail, getDetail] = useState([]);
  const [comments, getComments] = useState([]);
  const { id } = useParams();

  const getContent = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getComment = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContent().then((data) => {
      getDetail(data);
    });
    getComment().then((data) => {
      getComments(data);
    });
  }, []);

  return (
    <DetailNoticeContainer>
      <DetailNoticeHeader>
        <DetailNoticeTitle>제목: {detail.title}</DetailNoticeTitle>
        <DetailNoticeWriter>작성자: {detail.userId}</DetailNoticeWriter>
      </DetailNoticeHeader>
      <DetailNoticeBody>{detail.body}</DetailNoticeBody>
      <DetailNoticeComments>
        <DetailNoticeCommentsCnt>
          댓글 ({comments.length})
        </DetailNoticeCommentsCnt>
        {comments.map((el) => {
          return (
            <DetailComments key={el.id}>
              <DetailCommentsWriter>작성자: {el.name}</DetailCommentsWriter>
              <DetailCommentsBody>{el.body}</DetailCommentsBody>
            </DetailComments>
          );
        })}
      </DetailNoticeComments>
    </DetailNoticeContainer>
  );
};

export default DetailNotice;

const DetailCommentsBody = styled.div`
  font-size: 25px;
`;

const DetailCommentsWriter = styled.div`
  font-weight: 300;
  font-size: 20px;
`;

const DetailComments = styled.div`
  border-bottom: 3px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  gap: 8px;
`;

const DetailNoticeComments = styled.div`
  border: 4px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const DetailNoticeCommentsCnt = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-start;
  background-color: #f4f4f4;
  border-bottom: 1px solid #e3e3e3;
  padding: 5px 0 5px 10px;
  font-size: 20px;
`;

const DetailNoticeBody = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 30px;
`;

const DetailNoticeTitle = styled.span`
  font-size: 25px;
  font-weight: 500;
`;

const DetailNoticeWriter = styled.span`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailNoticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 0 20px; ;
`;

const DetailNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  gap: 20px;
`;
