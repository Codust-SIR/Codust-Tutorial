import React, { FC } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start learning Now with our cuting edge course
          </Link>
        </div>
      </div>
    </header>
  );
}

const CourseContents: FC = () => {
  return (
    <section className={styles.courseContentsComponant}>
      <h2>In this course, you will gain knowledge in</h2>
      <div className="row">
        {/* Expectations */}
        <div className={styles.expectations}>
          <h6>#1</h6>
          <p>Basic to avanced Command line</p>
        </div>
        <div className={styles.expectations}>
          <h6>#2</h6>
          <p>Basic to avanced Git and GitHub</p>
        </div>
        <div className={styles.expectations}>
          <h6>#3</h6>
          <p>Developing simple websites in HTML and CSS</p>
        </div>
      </div>
      <div className="row">
        <div className={styles.expectations}>
          <h6>#4</h6>
          <p>Basic to Advanced JavaScript, programming language</p>
        </div>
        <div className={styles.expectations}>
          <h6>#5</h6>
          <p>Basic to Advanced JavaScript, programming language</p>
        </div>
        <div className={styles.expectations}>
          <h6>#6</h6>
          <p>Basic to Advanced JavaScript, programming language</p>
        </div>
      </div>
    </section>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CourseContents />
      </main>
    </Layout>
  );
}
