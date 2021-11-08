import Link from "next/link";
import Layout from "../components/Layout";
import { sampleSpeciesData } from "../utils/sample-data";
import ListSpecies from "../components/ListSpecies";

const IndexPage = () => (
  <Layout title="Natural Solutions | Next.js + TypeScript test">
    <h1>👋 Natural Solutions | Test technique Next.js + TypeScript</h1>
    <ListSpecies items={sampleSpeciesData}></ListSpecies>
  </Layout>
);

export default IndexPage;
