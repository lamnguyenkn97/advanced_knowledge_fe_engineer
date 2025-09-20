import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 🚀
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/dsa-knowledge">
            Explore DSA 🧮
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Master Frontend Engineering`}
      description="Comprehensive learning resource for DSA, JavaScript, and React. Master the essential skills for frontend engineering success.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--xl">
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center">
                  <Heading as="h2">Why Choose This Knowledge Hub?</Heading>
                  <p className="text--lg">
                    This comprehensive resource is designed specifically for frontend engineers who want to 
                    master the essential skills needed for career advancement and technical excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="row margin-top--lg">
              <div className="col col--4 text--center">
                <div className="padding--md">
                  <Heading as="h3">🎯 Interview Ready</Heading>
                  <p>Master the concepts most commonly tested in frontend engineering interviews</p>
                </div>
              </div>
              <div className="col col--4 text--center">
                <div className="padding--md">
                  <Heading as="h3">📚 Comprehensive</Heading>
                  <p>Cover everything from fundamentals to advanced patterns in one place</p>
                </div>
              </div>
              <div className="col col--4 text--center">
                <div className="padding--md">
                  <Heading as="h3">🚀 Career Growth</Heading>
                  <p>Build the skills needed to advance to senior frontend engineering roles</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
