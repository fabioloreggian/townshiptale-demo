import {useRouter} from "next/router";
import Layout from "../../../components/layout/layout";
import styles from "./newsItem.module.css";

export default function NewsItem() {
  const router = useRouter()
  const { pid } = router.query

  return <Layout route="news">
    <h1>Hello there: {pid}</h1>
  </Layout>
}
