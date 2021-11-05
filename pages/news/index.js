import Head from 'next/head';
import Link from 'next/link';
import Layout from "../../components/layout/layout";
import {useState} from "react";

export default function News() {
  return (
    <Layout route="news">
      <Head>
        <title>Tales of the Township - News</title>
      </Head>
    </Layout>
  )
}
