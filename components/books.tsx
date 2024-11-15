"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/books.module.css";

interface IBOOK {
  id: string;
  title: string;
}

export default function Book({ id, title }: IBOOK) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/book/${id}`);
  };
  return (
    <div className={styles.Button} onClick={onClick}>
      {/* <Link href={`/book/${id}`}>{title} &rarr;</Link> */}
      <a href={`/book/${id}`} className={styles.aTag}>
        {title} &rarr;
      </a>
    </div>
  ); // 반환값 추가
}
