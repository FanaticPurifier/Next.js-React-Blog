import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import toast from 'react-hot-toast';
import styles from "../styles/Home.module.css";

import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
  );
}
