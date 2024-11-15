import styled from "../styles/book-list.module.css";

interface IList {
  img: string;
  author: string;
  url: string;
  title: string;
}

export default async function List({ img, author, url, title }: IList) {
  return (
    <div className={styled.container}>
      <div className={styled.credit_container}>
        <img src={img} className={styled.credit_img} />
        <div className={styled.credit_name}>
          <span>{title}</span>
          <br />
          <span>{author}</span>
          <br />
          <br />
          <a href={`${url}`} target={"_blank"} className={styled.aTag}>
            Buy Now!!
          </a>
        </div>
      </div>
    </div>
  );
}
