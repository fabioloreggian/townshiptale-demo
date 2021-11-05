import Head from 'next/head';
import Link from 'next/link';
import Layout from "../../../components/layout/layout";
import {useState} from "react";

export default function Signup() {
  return (
    <Layout route="signup">
      <Head>
        <title>Tales of the Township - Sign Up</title>
      </Head>
    </Layout>
  )
}
