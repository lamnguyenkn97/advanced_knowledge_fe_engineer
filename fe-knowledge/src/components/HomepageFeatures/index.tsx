import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DSA Knowledge',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Master Data Structures and Algorithms specifically tailored for frontend engineering. 
        Learn time complexity, data structures, algorithms, and problem-solving patterns.
      </>
    ),
    link: '/docs/dsa-knowledge',
  },
  {
    title: 'JavaScript Mastery',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        From fundamentals to advanced concepts, dive deep into JavaScript - the backbone of 
        modern web development. Cover ES6+, async programming, and DOM manipulation.
      </>
    ),
    link: '/docs/javascript-knowledge',
  },
  {
    title: 'React Expertise',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Master React from core concepts to advanced patterns. Learn components, hooks, 
        state management, performance optimization, and the React ecosystem.
      </>
    ),
    link: '/docs/react-knowledge',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.featureButton}>
          <Link
            className="button button--secondary button--sm"
            to={link}>
            Explore {title} →
          </Link>
        </div>
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
