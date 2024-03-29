import React, { FC } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};
type CourseOverviewType = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  url: string;
};
type CourseContentType = {
  number: number;
  description: string;
};
const FeatureList: FeatureItem[] = [
  {
    title: "The Course focus on you",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We believe that you deserve a simple and easy tutorial that will be
        simple and easy for you on all edges, that&apos;s why we set you first
        as our top priority when designing this curriculum
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        When you are the priority, it will be much easier for you to put more
        focus on the most imporat tast.
      </>
    ),
  },
  {
    title: "Simple to use",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        For that been said, we made a simple and well structed materials for
        you, with all the necesary details for you. Click the button above to
        start your new journey.
      </>
    ),
  },
];

const CourseContentList: CourseContentType[] = [
  {
    number: 1,
    description: "Basic to avanced Command line",
  },
  {
    number: 2,
    description: "Basic to avanced Git and GitHub",
  },
  {
    number: 3,
    description: "Developing simple websites in HTML and CSS",
  },
  {
    number: 4,
    description: "Basic to Advanced JavaScript, programming language",
  },
  {
    number: 5,
    description: "Basic to Advanced JavaScript, programming language",
  },
  {
    number: 6,
    description: "Basic to Advanced JavaScript, programming languagee",
  },
];
const CourseOverviewList: CourseOverviewType[] = [
  {
    title: "Terminal Fundamentals",
    Svg: require("@site/static/img/Windows_Terminal_logo.svg").default,
    description: (
      <>
        The Terminal is a powerful tool for interacting with a computer through
        text-based commands.
      </>
    ),
    url: "/docs/category/terminal-fundamentals",
  },
  {
    title: "Git And GitHub",
    Svg: require("@site/static/img/git-icon.svg").default,
    description: (
      <>
        Git is a version control system, and GitHub is a web-based platform for
        hosting Git repositories and collaboration.
      </>
    ),
    url: "/docs/category/git-and-github",
  },
  {
    title: "HTML",
    Svg: require("@site/static/img/icons8-html-480.svg").default,
    description: (
      <>
        HTML (Hypertext Markup Language) is the standard markup language for
        creating the structure and content of web pages.
      </>
    ),
    url: "/docs/category/html",
  },
  {
    title: "CSS",
    Svg: require("@site/static/img/css-icon.svg").default,
    description: (
      <>
        CSS (Cascading Style Sheets) is used to style and format the layout of
        web pages, enhancing their visual appearance.
      </>
    ),
    url: "docs/category/css",
  },
  {
    title: "JavaScript",
    Svg: require("@site/static/img/js-icon.svg").default,
    description: (
      <>
        JS (JavaScript) is a programming language that adds interactivity,
        dynamic behavior, and functionality to web pages.
      </>
    ),
    url: "docs/category/javascript-101",
  },
  {
    title: "React JS",
    Svg: require("@site/static/img/React-icon.svg").default,
    description: (
      <>
        ReactJS is a popular JavaScript library used for building user
        interfaces and creating interactive web applications.
      </>
    ),
    url: "docs/category/react-js",
  },
];
function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
function CourseContent({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  return (
    <div className={clsx("col col--4")}>
      <div
        style={{
          border: "1px lightgray solid",
          borderRadius: 10,
          margin: 10,
        }}
        className="text--center padding-horiz--md"
      >
        <h6>#{number}</h6>
        <p>{description}</p>
        <p></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const CourseContents: FC = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <h1>Course Contents</h1>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {CourseContentList.map((props, idx) => (
              <CourseContent key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export const CourseOverview: FC<CourseOverviewType> = ({
  Svg,
  description,
  title,
  url,
}) => {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      className={clsx("col col--4")}
    >
      <a
        href={url}
        style={{
          textDecoration: "none",
          color: "#0E5479",
        }}
      >
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};
export const CourseOverviews: FC = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {CourseOverviewList.map((props, idx) => (
              <CourseOverview key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
